# from django.http import HttpResponse

# def home(res):
#     return HttpResponse("NITHAN")

# def cart(responce):
#     return HttpResponse("Welcome to our cart")
from django.shortcuts import render

def home(req):
    return render(req,'home.html')

def about(req):
    return render(req,'about.html')