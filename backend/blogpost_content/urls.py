from django.urls import path
from .views import ListBlogpostContentView, BlogpostContentDetailView

urlpatterns = [
   path('blogpostcontents/', ListBlogpostContentView.as_view(), name="blogpostcontents-all"),
   path('blogpostcontents/<int:pk>', BlogpostContentDetailView.as_view(), name="blogpostcontents-detail")
]
