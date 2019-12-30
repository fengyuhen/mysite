from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.contrib.auth import authenticate
from django.shortcuts import redirect


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


def do_login(request):
    username = request.GET.get('username')
    password = request.GET.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            print("You provided a correct username and password!")
        else:
            print("Your account has been disabled!")
    else:
        print("Your username and password were incorrect.")
    context = {}
    return redirect('index.html', context)
