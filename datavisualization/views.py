from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader


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
    print()
    return index()
