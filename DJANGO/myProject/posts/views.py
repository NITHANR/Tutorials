from django.shortcuts import render
from .models import Post
# from django.http import HttpResponse
# Create your views here.
def posts_list(request):
    post_data = Post.objects.all().order_by("-date")
    return render(request,'posts/post_list.html',{"posts":post_data})

# def post_page(req,slug):
#     return HttpResponse(slug)

def post_page(req,slug):
    post = Post.objects.get(slug=slug)
    return render(req,"posts/post_page.html",{"Post":post})
