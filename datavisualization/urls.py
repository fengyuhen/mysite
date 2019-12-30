from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('index.html', views.index, name='index'),
    path('login.html', views.login, name='login'),
    path('page_1.html', views.page_1, name='page_1'),
    path('page_2.html', views.page_2, name='page_2'),
    path('page_3.html', views.page_3, name='page_3'),
    path('do_login', views.do_login, name='do_login')
]
