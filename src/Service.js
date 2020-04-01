import axios from 'axios'

export default class Service{
    static BASE_URL = 'https://carfil.herokuapp.com/api/v1'

    static getFilters(){
        return axios.get(`${this.BASE_URL}/filters`)
    }

    static getCarOwners(filter){
        return axios.get(`${this.BASE_URL}/car-owners?filter=${filter}`)
    }
}

