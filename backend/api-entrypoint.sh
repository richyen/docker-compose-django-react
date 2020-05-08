#!/bin/bash

# Wait for Postgres to start up (avoids race condition)
for (( i=0; i<30; i++ )); do
  [[ $( PGPASSWORD=postgres psql -h db -Atc "select ${i}" postgres postgres ) -eq ${i} ]] && break
  echo "Still waiting after ${i} seconds"
  sleep 1
done

# Run migrations
python manage.py migrate
python manage.py loaddata blogpost.json

# Start server
python manage.py runserver 0.0.0.0:8000
