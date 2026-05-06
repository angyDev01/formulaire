from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.core.urls import rooter


rooter_api = DefaultRouter()
rooter_api.registry.extend(rooter.registry)

urlpatterns = [
    path('', include(rooter_api.urls)),
]
