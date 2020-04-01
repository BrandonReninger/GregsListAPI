import HouseService from '../Services/HouseService.js'
import _store from '../store.js'
import store from "../store.js"


function _drawHouses() {
    let template = ""
    let houses = _store.State.houses

    houses.forEach(house => template += house.Template)
    document.getElementById("houses").innerHTML = template
}


export default class HouseController {
    constructor() {
        _store.subscribe('houses', _drawHouses)
    }

    bid(houseId) {
        HouseService.bid(houseId)
    }

    create(event) {
        event.preventDefault()
        let formData = event.target

        let newHouseObject = {
            bedrooms: formData.bedrooms.value,
            bathrooms: formData.bathrooms.value,
            levels: formData.levels.value,
            year: formData.year.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value,
            description: formData.description.value
        }
        HouseService.create(newHouseObject)
        formData.reset()
        $('#add-house-modal').modal('toggle')
    }

    delete(houseId) {
        HouseService.delete(houseId)
    }

}