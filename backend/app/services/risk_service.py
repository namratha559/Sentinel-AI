def calculate_risks(temperature, humidity, weather):
    flood = "Low"
    fire = "Low"
    heatwave = "Low"

    # Flood Risk
    if humidity >= 85:
        flood = "High"
    elif humidity >= 70:
        flood = "Moderate"

    # Fire Risk
    if temperature >= 40:
        fire = "High"
    elif temperature >= 35:
        fire = "Moderate"

    # Heatwave Risk
    if temperature >= 42:
        heatwave = "High"
    elif temperature >= 36:
        heatwave = "Moderate"

    summary = f"""
Weather Analysis

Flood Risk : {flood}

Fire Risk : {fire}

Heatwave Risk : {heatwave}
"""

    return {
        "flood": flood,
        "fire": fire,
        "heatwave": heatwave,
        "summary": summary.strip()
    }