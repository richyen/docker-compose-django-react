from django.urls import path
from django.conf.urls import include, url
from .views import (RegistrationAPIView, LoginAPIView,UserRetrieveUpdateAPIView)

app_name = 'authentication'
urlpatterns = [
    url(r'^users/?$', RegistrationAPIView.as_view()),
    url(r'^users/login/?$', LoginAPIView.as_view()),
    url(r'^user$', UserRetrieveUpdateAPIView.as_view()),
]
