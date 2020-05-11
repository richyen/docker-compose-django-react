from django.shortcuts import render

from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework import status
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .renderers import UserJSONRenderer
from .serializers import (RegistrationSerializer, LoginSerializer,UserSerializer)

'''Class: Register User'''
class RegistrationAPIView(APIView):
    # Allow any user (authenticated or not) to hit this endpoint.
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = RegistrationSerializer
    def post(self, request):
        user = request.data.get('user', {})
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

'''Class: Login User '''
class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = LoginSerializer

    def post(self,request):
        user = request.data.get('user',{})
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data,status= status.HTTP_200_OK)

'''Class: User retrieve or update '''
class UserRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = UserSerializer

    #retrieve user info
    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data,status=status.HTTP_200_OK)

    #update user info
    def update(self, request, *args, **kwargs):
        user_data = request.data.get('user',{})
        serializer_data = {
           'username': user_data.get('username', request.user.username),
           'email': user_data.get('email',request.user.email),
           'profile': {
               'bio': user_data.get('bio',request.user.profile.bio),
               'image': user_data.get('image', request.user.profile.image)
           }
        }
        serializer = self.serializer_class(request.user, data=serializer_data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)