from django.urls import path
from .views import ListBlogpostView, BlogpostDetailView

urlpatterns = [
   path('mentor/', ListMentorView.as_view(), name="mentors-all"),
   path('mentor/<int:pk>', MentorDetailView.as_view(), name="mentors-detail")
]
