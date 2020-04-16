export default class Marker {
  lat: number = 0
  lng: number = 0

  constructor(lat: number, lng: number) {
    this.lat = lat
    this.lng = lng
  }

  getLat(): number {
    return this.lat
  }

  getLng(): number {
    return this.lng
  }

  getCoord() {
    return [this.lng, this.lat]
  }
}
