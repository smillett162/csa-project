from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

from django.middleware.csrf import get_token

from frontend.models import *

import json

# Create your views here.

def index(request):
  return render(request, 'frontend/index.html')

def make_error(status):
    """
    Helper method to return error status code.
    Args:
        status (int): The status code to return
    """
    res = HttpResponse({})
    res.status_code = status
    return res


def login_admin(request):

  print("in login")
  if request.method == "POST":
    print("in if")
    try:
        body = json.loads(request.body)["params"]
        username = body['username']
        password = body['password']
    except Exception as e:
        response = make_error(400)

    if password == None or len(password.strip()) == 0 or username == None or len(username.strip()) == 0:
        response = make_error(400)

    user = authenticate(username=username, password=password)

    if user is not None:
        login(request, user)
        # Return new csrf token
        token = get_token(request)
        response = JsonResponse({'csrfToken': token, 'status': 200})
    else:
        response = make_error(403)
    print("before response")
    return response

def get_events(request):
  if request.method == "GET":

    events = Event.objects.all()
    json_list = []
    for event in events:
      json_event= {
        "title": event.title,
        "id": event.id,
        "text": event.text.split('\n'),
        "time": event.time,
        "link": event.link,
        "date": event.date,
        "image": str(event.image),
      }
      json_list.append(json_event)

    data = {
        'events': json_list,
    }
    return JsonResponse(data)

def get_people(request):
  if request.method == "GET":

    people = Person.objects.all()
    json_list = []
    for person in people:
      json_person = {
        "name": person.name,
        "id": person.id,
        "profileText": person.profileText.split('\n'),
        "role": person.role,
        "image": str(person.image),
      }
      json_list.append(json_person)

    data = {
        'people': json_list,
    }
    return JsonResponse(data)


def add_person(request):
  if request.method == "POST":
    response = JsonResponse({"success" : True})
    try:
      body = json.loads(request.body)["params"]
      name = body['name']
      role = body['role']
      profileText = body['profileText']
      print(profileText)
      image = body['image']
    except Exception as e:
      response = make_error(400)

    try:
    
      joinedText = profileText.join('\n')
      print(joinedText)
    except Exception:
      pass

    
    person = Person(name=name,role=role, profileText=profileText, image=image)
    person.save()

    return response
      