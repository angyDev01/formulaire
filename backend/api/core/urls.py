from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApiViewSet

router = DefaultRouter()
# Registration de la route pour l'ApiViewSet
router.register(r'api', ApiViewSet)

#Après (clair)
urlpatterns = [
    path('', include(router.urls)), 
]