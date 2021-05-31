//conversion du prix et ajout devise
function priceConversion(productPrice) {
  return Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(`${productPrice}` / 100);
}

// var url
const url = "https://p5-api-tb.herokuapp.com/api/cameras/";
const APIurl = "https://p5-api-tb.herokuapp.com/api/cameras/";

//création de la class pour fonction buyCamera
class Item {
  constructor(cameraID, chosenLense, quantity) {
    this.cameraID = cameraID;
    this.chosenLense = chosenLense;
    this.quantity = quantity;
  }
}
