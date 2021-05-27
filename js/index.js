// get
async function getAPI() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData(data);
    });
}

// Création card HTML pour produits
function showData(data) {
  let produit = "";
  for (let camera of data) {
    produit += `<div class="card"> 
                        <img src="${camera.imageUrl}" class="card-img-top" alt="teste alternatif"/>
                        <div class="card-body">
                            <h5 class="card-title">${camera.name}</h5>
                            <p class="card-text">${camera.description}</p> 
                            <a href="item.html?_${camera._id}" class="btn btn-warning">En savoir plus</a>
                        </div>
                    </div>`;
  }

  document.querySelector("#produits").innerHTML = produit;
}

getAPI();
