import House from "../Models/House.js"
import _store from '../store.js'
import store from "../store.js"


// @ts-ignore
let _api = axios.create({
    baseURL: '//bcw-sandbox.herokuapp.com/api/houses',
    timeout: 3000
})


class HouseService {

    constructor() {

    }

    bid(houseId) {
        let foundHouse = store.State.houses.find(house => house.id == houseId)
        if (houseId) {
            foundHouse.price += 1000
            _api.put(houseId, foundHouse)
                .then(res => {
                    this.getHouses()
                }).catch(err => console.error(err))
        }
    }

    getHouses() {
        _api.get()
            .then(res => {
                let houses = res.data.data.map(rawHouseData => (rawHouseData))
            })
    }

}


const HOUSESERVICE = new HouseService()
export default HOUSESERVICE