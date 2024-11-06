from django.http import HttpRequest, HttpResponse
from datetime import datetime


def test_view(request: HttpRequest):
    html = f"""
        <h1>Hello world</h1>
        <h2>{datetime.now().strftime("%d-%m-%Y | %H:%M:%S")}</h2>
    """
    return HttpResponse(html)
