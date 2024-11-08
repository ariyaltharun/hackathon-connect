from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.urls import reverse


# Create your views here.
# def updateUser(request: HttpRequest, username: str) -> HttpResponse:
#     if request.method == 'POST':
#         user = User.objects.get(username=username)
#         if user is None:
#             return HttpResponse("User Not found")
#     return HttpResponse("User found")


# User Auth
## Create user
## Ops on user: create, update, delete, login
def registeruser_view(request: HttpRequest):
    # TODO: Create Custom Form to accept email, first_name, last_name etc
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # print(form.cleaned_data)
            user = form.save()
            login(request, user)
            # print(reverse('home'))
            return HttpResponseRedirect(reverse('home'))
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', { 'form': form })


def updateuser_view():
    # TODO: Update User Credentials
    pass


def deleteuser_view():
    # TODO: Delete User Account
    pass


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            return HttpResponseRedirect(reverse('home'))
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', { 'form': form })


def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return HttpResponseRedirect(reverse('home'))
