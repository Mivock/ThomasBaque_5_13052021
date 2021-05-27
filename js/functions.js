//conversion du prix et ajout devise
function priceConversion(productPrice) {
  return Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(`${productPrice}` / 100);
}

//let price = priceConversion(camera.price);

const url = "https://p5-api-tb.herokuapp.com/api/cameras/";

const APIurl = "https://p5-api-tb.herokuapp.com/api/cameras/";
