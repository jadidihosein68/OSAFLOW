from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_admin = models.BooleanField(default=False)
    wa_token = models.CharField(max_length=255, blank=True)

class Segment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

class Contact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    category = models.CharField(max_length=255)
    segment = models.ForeignKey(Segment, on_delete=models.SET_NULL, null=True)

class Template(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    content = models.TextField()
    is_ai_generated = models.BooleanField(default=False)

class Campaign(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    template = models.ForeignKey(Template, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    scheduled_at = models.DateTimeField()
    status = models.CharField(max_length=20, default="draft")

class CampaignContact(models.Model):
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, default="pending")
    sent_at = models.DateTimeField(null=True)
    delivered_at = models.DateTimeField(null=True)
    read_at = models.DateTimeField(null=True)
