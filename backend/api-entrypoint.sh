#!/bin/bash

# Wait for Postgres to start up (avoids race condition)
for (( i=0; i<60; i++ )); do
  R=$( PGPASSWORD=postgres psql -h ismpdb -Atc "select ${i}" postgres postgres )
  # Test both exit code and actual value returned from query
  [[ $? -eq 0 ]] && [[ $R -eq $i ]] && break
  echo "Still waiting after ${i} seconds"
  sleep 1
done

# Run migrations

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

echo "Collecting static files"
python manage.py collectstatic --no-input

echo "Load mockup data"
python manage.py loaddata blogpost.json blogpost_content.json school.json

if [[ "$1" == 'test' ]]; then
  # Run tests
  flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics && \
  flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics && \
  pylint --rcfile=/app/api/pylintrc api && \
  python manage.py test api.application_form api.school api.blogpost api.blogpost_content
else
  # Start server
  python manage.py runserver 0.0.0.0:8000
fi

