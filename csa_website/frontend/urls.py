from django.urls import path, re_path
from . import views

urlpatterns = [
  path('', views.index),
  path('api/admin_login', views.login_admin, name="login"),
  path('api/events', views.get_events, name="get_events"),
  path('api/people', views.get_people, name="get_people"),
  path('api/add_person', views.add_person, name="add_person"),
  re_path("/", views.index, name="index")
]