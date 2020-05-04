# Django application

To work on the backend, you'll need to have Django running in a Docker container, pointing to this folder.  If that all seems like a foreign language to you, simply go `cd ../` up to the parent folder and run `docker-compose up`

## Adding a new application

If you need to create a new app, issue `docker exec -it ismp_django_1 python manage.py createapp <appname> /app/api/<appname>`
You can now add `api.<appname>` to your imports
