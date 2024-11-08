from django.shortcuts import render
from django.contrib.auth.models import User
from . import models


# Create your views here.
# TODO: Use React to create UI for this page
def profile_view(request, user_id):
    # user_profile = models.Profile.objects.filter(user_id=user_id)
    # user_projects = models.Projects.objects.filter(user_id=user_id)
    # user_skills = models.Skills.objects.filter(user_id=user_id)
    # user_seekings = models.Seeking.objects.filter(user_id=user_id)
    context = {
        "user_profile": models.Profile.objects.get(user_id=user_id),
        "user_projects": models.Project.objects.get(user_id=user_id),
        "user_skills": models.Skill.objects.get(user_id=user_id),
        "user_seekings": models.Seeking.objects.get(user_id=user_id),
    }
    print(context)
    return render(request, 'profiles/profile.html', context=context)
