from django.db import models
from django.contrib.auth.models import User


# Create your models here.
# UserTeam db [Optional]
# class Team(models.Model):
#     pass

# Each user will have only one record the profile to avoid data anonmoly problems
# So, plan is to create tables for everything and connect via primary and foriegn key
# Relationship will mostly be "one to many relationship" from user to tables
# Tables required are:
## 1. Profile: user_id, profile_pic, bio, instagram, twitter, linkedIN
class Profile(models.Model):
    user_id = models.ForeignKey(
        to=User, on_delete=models.CASCADE
    ) # user_id is foriegn to the primary in User table
    # TODO: Store profile pic and display
    bio = models.TextField(blank=True)
    linkedin_handle = models.CharField(max_length=100, blank=True)
    twitter_handle = models.CharField(max_length=100, blank=True)
    instagram_handle = models.CharField(max_length=100, blank=True)
    pass

## 2. Skills: user_id, skill_name, proficiency_level, description
class Skill(models.Model):
    user_id = models.ForeignKey(
        to=User, on_delete=models.CASCADE
    ) # user_id is foriegn to the primary in User table
    skill_name = models.CharField(max_length=1000)
    proficiency_level = models.CharField(choices=[
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]) # Remove if not valid param
    description = models.TextField(blank=True)
    pass

## 3. Projects: user_id, project_name, description, github_link
class Project(models.Model):
    user_id = models.ForeignKey(
        to=User, on_delete=models.CASCADE
    ) # user_id is foriegn to the primary in User table
    # TODO: Store profile pic and display
    project_name = models.CharField(max_length=1000)
    description = models.TextField(blank=True) # If a field has blank=True, form validation will allow entry of an empty value.
    github_link = models.CharField(max_length=1000)
    pass

## 4. Actively looking for someone: user_id, event_name, event_description, event_link, required_role
### describe "Actively looking for someone" -> Seeking
class Seeking(models.Model):
    user_id = models.ForeignKey(
        to=User, on_delete=models.CASCADE
    ) # user_id is foriegn to the primary in User table
    event_name = models.CharField(max_length=1000)
    event_description = models.TextField()
    event_link = models.CharField(max_length=1000, blank=True)
    looking_for = models.TextField()

# So, in connect app, use this "Actively looking for someone" table to display who are available 
# connect with them

