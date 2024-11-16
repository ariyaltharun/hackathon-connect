from django.shortcuts import render
from profiles.models import Seeking


# Create your views here.
def connect_view(request):
    seekings = Seeking.objects.all()
    context = {
        'seekings': list(Seeking.objects.values())
    }
    print(list(context['seekings']), type(list(context['seekings'])))
    return render(request, 'connect/connect.html', context=context)
