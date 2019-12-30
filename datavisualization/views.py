from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.contrib.auth import authenticate
from django.shortcuts import redirect
from django.contrib.auth import logout


# Create your templates here.
def index(request):
    context = {}
    template = loader.get_template('datavisualization/dashboard/index.html')
    return HttpResponse(template.render(context, request))


def login(request):
    context = {}
    template = loader.get_template('datavisualization/dashboard/login.html')
    return HttpResponse(template.render(context, request))


def page_1(request):
    context = {}
    template = loader.get_template('datavisualization/dashboard/page_1.html')
    return HttpResponse(template.render(context, request))


def page_2(request):
    context = {}
    template = loader.get_template('datavisualization/dashboard/page_2.html')
    return HttpResponse(template.render(context, request))


def page_3(request):
    context = {}
    template = loader.get_template('datavisualization/dashboard/page_3.html')
    return HttpResponse(template.render(context, request))


# 这里有问题，问题在于前端传数据到后台的方式，单纯ajax的话，没有跳转，单纯form表单的话，再试
def do_login(request):
    username = request.GET.get('loginUsername')
    password = request.GET.get('loginPassword')
    user = authenticate(username=username, password=password)
    print(username, password)
    if user is not None:
        if user.is_active:
            print("You provided a correct username and password!")
        else:
            print("Your account has been disabled!")
            return redirect('login.html')
    else:
        print("Your username and password were incorrect.")
        return redirect('login.html')
    context = {}
    return redirect('index.html', context)


def do_logout(request):
    logout(request)
    return redirect('login.html')
