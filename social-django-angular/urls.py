from django.conf.urls import patterns, url, include
from rest_framework import routers
from authentication.views import AccountViewSet
from .views import IndexView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns(
    '',
    url(r'api/v1/', include(router.urls)),
    url('^.*$', IndexView.as_view(), name='index'),
)
