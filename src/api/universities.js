import axios from "axios";

async function getUniversitiesFromUkraine() {
    try {
        const response = await axios.get('http://universities.hipolabs.com/search?name=&country=Ukraine');
        return response.data;
    } catch (err) {
        () => { console.log(err) }
        throw err;
    }
}

export { getUniversitiesFromUkraine }