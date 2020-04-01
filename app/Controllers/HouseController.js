import HouseService from '../Services/HouseService.js'
import _store from '../store.js'
import store from "../store.js"





export default class HouseController {
    constructor() {

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