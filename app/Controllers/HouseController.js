import HouseService from '../Services/HouseService.js'
import _store from '../store.js'
import store from "../store.js"





export default class HouseController {
    constructor() {

    }

    bid(houseId) {
        HouseService.bid(houseId)
    }

}