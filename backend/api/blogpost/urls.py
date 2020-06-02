from django.urls import path
from api.blogpost.views import ListBlogpostView, BlogpostDetailView

urlpatterns = [
    path('blogpost/', ListBlogpostView.as_view(), name="blogpost-list"),
    path('blogpost/<int:pk>', BlogpostDetailView.as_view(), name="blogposts-detail")
]
