from django.conf import settings
from django.db import models


class AppInfo(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    version = models.CharField(
        max_length=50,
    )
    last_updated = models.DateTimeField(
        auto_now=True,
    )
