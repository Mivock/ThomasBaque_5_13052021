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
            
            document.getElementById("productName").innerText = data[0].name;
            document.getElementById("productInfo").innerText = data[0].description;
            document.getElementById("productPrice").innerText = data[0].price;
            document.getElementById("productImg").src = data[0].imageUrl;

        })
        .catch(function(err) {
            // message d'erreur
        }) 
}

// Création card HTML pour produits

function createCards() {

    let productCard = 
        `<a href="#">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><span class="" id="productName"></span></h5>
                <p class="card-text"><span class="" id="productInfo"></span></p>
                <p class="card-text"><small class="text-muted"><span class="" id="productPrice"></span></small></p>
            </div>
        <img class="card-img-bottom" id="productImg" src="" alt="alt text">
        </div>
        </a>`;

    const createCard =
    document.getElementById("productCards").innerHTML = productCard;
}


 





window.onload =
    
    createCards()
    getCameras()
    //displayData()
