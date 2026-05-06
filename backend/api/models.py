from django.db import models

# Create your models here.

""" FORMULAIRE D'INSCRIPTION
    -NOM (doit être au format texte, ex: John Doe)
    -EMAIL (doit être au format email, ex: user@example.com)
    -TELEPHONE  (doit être au format international, ex: +22912345678)
    -NIVEAU :
       ici il y a trois options qui sera proposée à l'utilisateur :
       -Débutant
       -Intermédiaire
       -Avancé
    -ADRESSE (une zone de texte pour que l'utilisateur puisse saisir son adresse complète ex: 123 Rue de l'Exemple, Ville, Pays)
    -OBJECTIF :
       ici il y a trois options qui sera proposée à l'utilisateur :
       -Je veux apprendre une nouvelle compétence
       -Je veux apprendre le digital pour gagner de l'argent
       -Je veux améliorer mes compétences existantes
       -Je veux créer un business en ligne
"""

OBJECTIF_CHOICES = [
        ("Je veux apprendre une nouvelle compétence", "Je veux apprendre une nouvelle compétence"),
        ("Je veux apprendre le digital pour gagner de l'argent", "Je veux apprendre le digital pour gagner de l'argent"),
        ("Je veux améliorer mes compétences existantes", "Je veux améliorer mes compétences existantes"),
        ("Je veux créer un business en ligne", "Je veux créer un business en ligne"),
    ]

class Inscription(models.Model):
    nom = models.CharField(max_length=200)
    email = models.EmailField()
    telephone = models.CharField(max_length=20)
    niveau = models.CharField(max_length=20, choices=[
        ('Débutant', 'Débutant'),
        ('Intermédiaire', 'Intermédiaire'),
        ('Avancé', 'Avancé'),
    ])
    adresse = models.TextField()
    objectif = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nom}  -  {self.email}"

    class Meta:
        verbose_name = "Inscription"
        verbose_name_plural = "Inscriptions"
        ordering = ['nom']