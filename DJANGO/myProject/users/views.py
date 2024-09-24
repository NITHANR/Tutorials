from django.shortcuts import render

def register_view(req):
    return render(req,"user/register.html")
