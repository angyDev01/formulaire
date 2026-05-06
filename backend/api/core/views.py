from rest_framework.viewsets import ModelViewSet
from ..models import Inscription

from .serializers import ApiSerializer

class ApiViewSet(ModelViewSet):
    queryset = Inscription.objects.all()
    serializer_class = ApiSerializer