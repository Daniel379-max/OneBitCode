export async function getSentryObjects() {
    const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY');
    const result = await response.json();
    return result["sentry_objects"];
}