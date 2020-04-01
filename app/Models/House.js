export default class House {
    constructor(data) {
        this.id = data.id || data._id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description || "No description provided."
    }

    get Template() {
        return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h5>Bedrooms: ${this.bedrooms}</h5>
      <h5>Bathrooms: ${this.bathrooms}</h5>
      <h5>Levels: ${this.levels}</h5>
      <h5>Year: ${this.year}</h5>
      <h5>Price: ${this.price}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.houseController.delete(${this.id})">Delete</button>
      <button type="button" class="btn btn-success btn-block" onclick="app.houseController.bid('${this.id}')">Bid</button>
    </div>`
    }

}