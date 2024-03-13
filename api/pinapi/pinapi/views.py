
from django.http import JsonResponse
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def baseSearchResource(request):

    # body = request.body

    query = 'cats'

    url = f'https://www.pinterest.com/resource/BaseSearchResource/get/?data={{"options":{{"query":"{query}"}}}}'

    resp = requests.get(url, timeout=30000)

    results = resp.json()

    return Response(results)

@api_view(['GET'])
def pinPage(request, pk):
    return Response({"hello welcome to this page": pk})
