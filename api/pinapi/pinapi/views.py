
from django.http import JsonResponse
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def baseSearchResource(request):

    query = request.query_params.get('q')
    bookmark = request.query_params.get('bookmark')

    if bookmark:
        url = f'https://www.pinterest.com/resource/BaseSearchResource/get/?data={{"options":{{"query":"{query}","bookmarks":["{bookmark}"]}}}}'
    else:
        url = f'https://www.pinterest.com/resource/BaseSearchResource/get/?data={{"options":{{"query":"{query}"}}}}'

    resp = requests.get(url, timeout=30000)

    results = resp.json()

    return Response(results)
