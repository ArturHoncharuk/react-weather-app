import axios from "axios";

export const fetchData = async (country) => {
    return await axios.get(`http://api.weatherapi.com/v1/current.json?key=3362fac4043149b1b1e103617221107&q=${country}&aqi=yes`)
        .then(response => response.data)
}