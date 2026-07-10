import requests

def get_satellite_image(latitude, longitude):

    url = (
        "https://api.nasa.gov/planetary/earth/assets"
        f"?lon={longitude}"
        f"&lat={latitude}"
        "&dim=0.15"
        "&api_key=DEMO_KEY"
    )

    try:

        response = requests.get(url)

        if response.status_code != 200:
            return None

        data = response.json()

        return data.get("url")

    except Exception:

        return None