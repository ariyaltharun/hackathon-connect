from django.contrib import admin
from . import models


# Register your models here.
admin.site.register([
    models.Profile,
    models.Skill,
    models.Project,
    models.Seeking,
])
