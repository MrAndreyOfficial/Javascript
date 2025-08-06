export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return json;
    }
    catch (err) {
        console.error(err.message);
    }
}
