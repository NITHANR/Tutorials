from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm

def register_view(req):
    if req.method == "POST":
        form = UserCreationForm(req.POST)
        if form.is_valid():
            form.save()
            return redirect("posts:list")
    else:
        form = UserCreationForm()
    return render(req,"user/register.html",{"form":form})
