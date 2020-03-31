import Car from "../Models/Car.js"
import _store from '../store.js'
import store from "../store.js"


// @ts-ignore
let _api = new axios.create({
    baseURL: '//bcw-sandbox.herokuapp.com/api/cars',
    timeout: 3000
})


class CarService {

    bid(carId) {
        let foundCar = _store.State.cars.find(car => car.id == carId)
        if (foundCar) {
            foundCar.price += 100
            _api.put(carId, foundCar)
                .then(res => {
                    this.getCars()
                }).catch(err => console.error(err))
        }
    }

    getCars() {
        _api.get()
            .then(res => {
                let cars = res.data.data.map(rawCarData => new Car(rawCarData))
                store.commit('cars', cars)
                console.log(store.State);
            }).catch(err => console.error(err))
    }

    delete(index) {
        _store.State.cars.splice(index, 1)
    }
    create(newCarObject) {
        let newCar = new Car(newCarObject)
        _store.State.cars.push(newCar)
        console.log(_store.State.cars)
    }
    constructor() {
        console.log("car service works")
    }
}


const CARSERVICE = new CarService()
export default CARSERVICE