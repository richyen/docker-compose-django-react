from django.urls import path
from .views import ListBlogpostsView, BlogpostsDetailView

urlpatterns = [
   path('blogpost/', ListBlogpostsView.as_view(), name="blogposts-all"),
   path('blogpost/<int:pk>', BlogpostsDetailView.as_view(), name="blogposts-detail")
]
