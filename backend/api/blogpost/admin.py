from django.contrib import admin
from api.blogpost.models import Blogpost, Tag, Topic

# Register your models here.
admin.site.register(Blogpost)
admin.site.register(Tag)
admin.site.register(Topic)
