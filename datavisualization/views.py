from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.contrib.auth import authenticate
from django.shortcuts import redirect
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login


# Create your templates here.
@login_required(login_url='login.html')
def index(request):
    context = {'username': request.user}
    template = loader.get_template('datavisualization/dashboard/index.html')
    return HttpResponse(template.render(context, request))


def login_page(request):
    if request.user.username is not None:
        context = {}
        template = loader.get_template('datavisualization/dashboard/index.html')
        return HttpResponse(template.render(context, request))
    context = {}
    template = loader.get_template('datavisualization/dashboard/login.html')
    return HttpResponse(template.render(context, request))


@login_required(login_url='login.html')
def page_1(request):
    context = {'username': request.user}
    template = loader.get_template('datavisualization/dashboard/page_1.html')
    return HttpResponse(template.render(context, request))


@login_required(login_url='login.html')
def page_2(request):
    context = {'username': request.user}
    template = loader.get_template('datavisualization/dashboard/page_2.html')
    return HttpResponse(template.render(context, request))


@login_required(login_url='login.html')
def page_3(request):
    context = {'username': request.user}
    template = loader.get_template('datavisualization/dashboard/page_3.html')
    return HttpResponse(template.render(context, request))


def do_login(request):
    username = request.GET.get('loginUsername')
    password = request.GET.get('loginPassword')
    user = authenticate(username=username, password=password)
    print(username, password)
    if user is not None:
        if user.is_active:
            login(request, user)
            print("You provided a correct username and password!")
        else:
            print("Your account has been disabled!")
            return redirect('login.html')
    else:
        print("Your username and password were incorrect.")
        return redirect('login.html')
    context = {}
    return redirect('index.html', context)


# @login_required(login_url='login.html')
def do_logout(request):
    # logout时，使用from django.contrib.auth import logout函数，不能实现用户权限注销的功能，现使用
    # request.session.clear()保证权限的注销
    # logout(request)
    request.session.clear()
    return redirect('login.html')
