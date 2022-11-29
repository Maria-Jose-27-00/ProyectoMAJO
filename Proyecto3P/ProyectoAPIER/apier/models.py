from django.db import models

# Create your models here.

class Company(models.Model):
    mes = models.CharField(max_length=50)
    Nodepersonasenfermas= models.FloatField()
    decesos= models.FloatField()
#sorry...
   