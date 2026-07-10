import requests

NASA_URL = "https://eonet.gsfc.nasa.gov/api/v3/events"


def get_nasa_events():

    try:

        response = requests.get(NASA_URL)

        if response.status_code != 200:
            return []

        data = response.json()

        events = []

        for event in data["events"][:20]:

            latitude = None
            longitude = None

            if event.get("geometry"):

                coordinates = event["geometry"][0]["coordinates"]

                # Point geometry -> [longitude, latitude]
                if len(coordinates) == 2:
                    longitude = coordinates[0]
                    latitude = coordinates[1]

            events.append({

                "title": event["title"],

                "category": event["categories"][0]["title"],

                "date": event["geometry"][0]["date"],

                "latitude": latitude,

                "longitude": longitude

            })

        return events

    except Exception as e:

        print(e)

        return []