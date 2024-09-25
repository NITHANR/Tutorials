from django.shortcuts import render
from .models import Post
from django.contrib.auth.decorators import login_required

def posts_list(request):
    post_data = Post.objects.all().order_by("-date")
    return render(request,'posts/post_list.html',{"posts":post_data})



def post_page(req,slug):
    post = Post.objects.get(slug=slug)
    return render(req,"posts/post_page.html",{"Post":post})

@login_required(login_url="/users/login/")
def post_new(request):
    return render(request,'posts/post_new.html')