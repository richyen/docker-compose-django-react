"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.conf.urls import include, url
from django.conf.urls import static
from django.conf import settings
from rest_framework import routers
# from blogpost import blogpost
from api.blogpost_content.views import BlogpostContentViewSet
from api.blogpost.views import BlogpostViewSet

router = routers.SimpleRouter()

router.register(r'blogpostcontent', BlogpostContentViewSet)
router.register(r'blogpost', BlogpostViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include('api.authentication.urls', namespace='user')),
    re_path('api/(?P<version>(v1|v2))/', include(router.urls)),
    path('api/', include('api.profiles.urls', namespace='profiles'))
]
         #     + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
