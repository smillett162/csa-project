from django.db import models

from django.contrib.auth.models import User


class Event(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField(default="")
    time = models.TimeField(auto_now_add=True)
    link = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    image = models.ImageField()

class Person(models.Model):
    name = models.CharField(max_length=200)
    profileText = models.TextField(default="")
    role = models.CharField(max_length=200)
    image = models.ImageField()


# Create your models here.
