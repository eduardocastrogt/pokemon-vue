import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 50000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default httpClient;