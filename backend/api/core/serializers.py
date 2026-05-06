from rest_framework.serializers import ModelSerializer
from ..models import Inscription

class ApiSerializer(ModelSerializer):
    class Meta:
        model = Inscription
        fields = '__all__'
        