from django.urls import path
from . import views
from django.contrib.auth.views import LoginView
from . import views


urlpatterns = [
    path('register/', views.registeruser_view, name="register"),
    path('login/', views.login_view, name="login"),
    path('logout/', views.logout_view, name="logout"),
]
