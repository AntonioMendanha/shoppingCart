export class Product {
  id: string = "";
  name: string = "";
  image: string = "";
  description: string = "";
  price: number = 0

  constructor(id: string, name: string, image: string, description: string, price: number){
    id = this.id;
    name = this.name;
    image = this.image;
    description = this.description;
    price = this.price
  }
}