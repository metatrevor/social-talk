from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers
from authentication.models import Account


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account