import House from "../Models/House.js"
import _store from '../store.js'
import store from "../store.js"


// @ts-ignore
let _api = axios.create({
    baseURL: '//bcw-sandbox.herokuapp.com/api/houses',
    timeout: 3000
})


class HouseService {
    create(newHouseObject) {
        _api.post('', newHouseObject)
            .then(res => {
                console.log(res.data)
                let newHouse = new House(res.data.data)
                let houses = [newHouse, ...store.State.houses]
                store.commit('houses', houses)
            }).catch(err => console.error(err))
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
                let houses = res.data.data.map(rawHouseData => new House(rawHouseData))
                store.commit('houses', houses)
                console.log(store.State)
            }).catch(err => console.error(err))
    }

    delete(houseId) {
        _api.delete(houseId)
            .then(res => {
                console.log(res.data)
            })
    }

    constructor() {
        this.getHouses()
    }

}


const HOUSESERVICE = new HouseService()
export default HOUSESERVICE