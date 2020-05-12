#!/bin/bash

# Wait for Postgres to start up (avoids race condition)
for (( i=0; i<60; i++ )); do
  R=$( PGPASSWORD=postgres psql -h db -Atc "select ${i}" postgres postgres )
  # Test both exit code and actual value returned from query
  [[ $? -eq 0 ]] && [[ $R -eq $i ]] && break
  echo "Still waiting after ${i} seconds"
  sleep 1
done

# Run migrations
## Collect static files
##echo "Collect static files"
##python manage.py collectstatic --noinput

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

echo "Load mockup data"
python manage.py loaddata blogpost.json blogpostcontent.json

# Start server
python manage.py runserver 0.0.0.0:8000
