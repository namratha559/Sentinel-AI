import requests
from app.config import PLANET_API_KEY

headers = {
    "Authorization": f"Bearer {PLANET_API_KEY}"
}

response = requests.get(
    "https://api.planet.com/data/v1",
    headers=headers
)

print("Status Code:", response.status_code)
print(response.text)