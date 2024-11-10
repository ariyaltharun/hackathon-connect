from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpResponse
from . import models


# Create your views here.
# TODO: Use React to create UI for this page
def profile_view(request, username):
    # user_profile = models.Profile.objects.filter(user_id=user_id)
    # user_projects = models.Projects.objects.filter(user_id=user_id)
    # user_skills = models.Skills.objects.filter(user_id=user_id)
    # user_seekings = models.Seeking.objects.filter(user_id=user_id)
    try:
        user_id = User.objects.get(username=username).id
        user_profile = models.Profile.objects.get(user_id_id=user_id)
        context = {
            "user_profile": user_profile,
            "user_projects": models.Project.objects.filter(user_id_id=user_id).values(), # Using filters coz, one user can have multiple projects
            "user_skills": models.Skill.objects.filter(user_id_id=user_id).values("skill_name", "proficiency_level", "description"), # Using filters coz, one user can have multiple skills
            "user_seekings": models.Seeking.objects.filter(user_id_id=user_id).values(), # Using filters coz, one user can have multiple seeking
        }
    except models.Profile.DoesNotExist:
        return HttpResponse("Profile Doesn't exists")
    # print(context)
    return render(request, 'profiles/profile.html', context=context)

# Note: 
## if u want only obj, use get
## Rasies Exceptions: When no record found or multiple record found
