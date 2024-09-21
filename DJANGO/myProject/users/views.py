from django.shortcuts import render
from django.http import HttpResponse

def userReg(req):
    return render(req,"user/register.html")
