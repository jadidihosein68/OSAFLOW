from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ContactViewSet, SegmentViewSet, TemplateViewSet, CampaignViewSet, RegisterView

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'contacts', ContactViewSet)
router.register(r'segments', SegmentViewSet)
router.register(r'templates', TemplateViewSet)
router.register(r'campaigns', CampaignViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
]
