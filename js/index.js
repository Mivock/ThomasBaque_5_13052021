/*


// Récuperer les données de l'API

    async function getCameras() {

        const url = "http://localhost:3000/api/cameras"
    
            fetch(url)
            .then(function(res) {
                if (res.ok) {
                    return res.json()
                }
            })
            .then(function(data) {
                
                let produit = '<div class="row row-cols-1 row-cols-lg-2 g-4 text-center">';
                for(let camera of data) {
                    produit += // Création card HTML pour produits
                    `
                    
                    <div class="card"> 
                        <img src="${camera.imageUrl}" class="card-img-top" alt="teste alternatif"/>
                        <div class="card-body">
                            <h5 class="card-title">${camera.name}</h5>
                            <p class="card-text">${camera.description}</p>
                            <a href="#!" class="btn btn-warning">En savoir plus</a>
                        </div>
                    </div>`;
                }
                produit +='</div>';
                document.querySelector("#produits").innerHTML = produit;

    
            })
            

    }  
getCameras()



*/

//définition url
const url = "http://localhost:3000/api/cameras";

// get
async function getAPI() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData(data);
      console.log(data[1]._id); //verif si c'est ok
    });
}

//classe pour data de l'api
/*
class Data {
  constructor(lenses, _id, name, price, description, imageUrl) {
    this.lenses = lenses;
    this.id = _id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = imageUrl;
  }
}
*/

//conversion du prix en euros, fonction appelé dans showData() pour création de lu html
function priceConversion(productPrice) {
  let price = `${productPrice}`; //
  price = Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price / 100);
  return price;
}

//creation affichage dans html
function showData(data) {
  let produit = '<div class="row row-cols-1 row-cols-lg-2 g-4 text-center">'; // mettre dans l'html
  for (let camera of data) {
    let price = priceConversion(camera.price);
    console.log(priceConversion(camera.price));

    produit +=
      // Création card HTML pour produits
      `
                    
                    <div class="card"> 
                        <img src="${
                          camera.imageUrl
                        }" class="card-img-top" alt="teste alternatif"/>
                        <div class="card-body">
                            <h5 class="card-title">${camera.name}</h5>
                            <p class="card-text">${priceConversion(
                              //à rajouter pour activer la fonction
                              camera.price
                            )}</p> 
                            <a href="#!" class="btn btn-warning">En savoir plus</a>
                        </div>
                    </div>`;
  }
  produit += "</div>";
  document.querySelector("#produits").innerHTML = produit;
}

getAPI();
