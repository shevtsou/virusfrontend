//@ts-check
import axios from "axios"
import { PROPERTIES } from "../src/properties"

export const loadStatistic = async () => {
    const response = await axios.get(PROPERTIES.BACKEND_URL + "/api/stats")
    return response.data
}

export const loadMap = async () => {
    const response = await axios.get(PROPERTIES.BACKEND_URL + "/api/countries/map")
    return `data:image/png;base64,${response.data.data}`
}

export const loadInfectionPerCountry = async () => {
    const response = await axios.get(PROPERTIES.BACKEND_URL + "/api/countries")
    return response.data.sort((a, b)=>b.infected - a.infected)
}

export const loadNews = async () => {
    const response = await axios.get(PROPERTIES.BACKEND_URL + "/api/news")
    return response.data
}