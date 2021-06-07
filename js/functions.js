//conversion du prix et ajout devise
function priceConversion(productPrice) {
  return Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(`${productPrice}` / 100);
}

// var url À CHANGER pour en supprimer une
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

//création de la class pour fonction buyCamera
class User {
  constructor(email, firstName, lastName, address, city, zipCode) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.zipCode = zipCode;
  }
}

//date pour confirmation
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
