from django.contrib import admin
from django.urls import path
from randomarray import views

urlpatterns = [
    path('', views.index),
    path('create',views.create)
]