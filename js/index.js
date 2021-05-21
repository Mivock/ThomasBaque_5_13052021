
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

