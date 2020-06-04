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
from django.urls import path, re_path
from django.conf.urls import include, url
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from api.blogpost_content.views import BlogpostContentViewSet
from api.blogpost.views import BlogpostViewSet, TagViewSet, TopicViewSet
from api.school.views import SchoolViewSet
from api.application_form.views import ApplicationFormViewSet, SubscribeNewsletterView
from api.mentor.views import MentorViewSet

router = routers.SimpleRouter()

router.register(r'blogpostcontent', BlogpostContentViewSet)
router.register(r'blogpost', BlogpostViewSet)
router.register(r'school', SchoolViewSet)
router.register(r'applicationForms', ApplicationFormViewSet)
router.register(r'tag', TagViewSet)
router.register(r'mentor', MentorViewSet)
router.register(r'topic', TopicViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include('api.authentication.urls', namespace='user')),
    re_path('api/(?P<version>(v1|v2))/', include(router.urls)),
    path('api/', include('api.profiles.urls', namespace='profiles')),
    path('tinymce/', include('tinymce.urls')),
    path('upload/', include('api.upload.urls')),
    path('subscribe-newsletter/', SubscribeNewsletterView.as_view())
    # TODO: Make the following only happen if debug is set to true
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
