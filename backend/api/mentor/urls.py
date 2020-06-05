from django.urls import path
from api.mentor.views import ListMentorView, MentorDetailView

urlpatterns = [
   path('mentor/', ListMentorView.as_view(), name="mentors-all"),
   path('mentor/<int:pk>', MentorDetailView.as_view(), name="mentors-detail")
]
