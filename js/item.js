async function getAPI() {
  let cameraID = new URLSearchParams(location.search)
    .toString()
    .substr(-25, 24); //pour retirer le dernier caractère (=)
  //console.log(cameraID.substr(-25, 24));
  fetch(APIurl + `${cameraID /*.substr(-25, 24)*/}`)
    .then((response) => response.json())
    .then((data) => {
      createProduct(data);
      //console.log(APIurl + `${cameraID}`); //pour test;
      lenseOption(data);
      buyCamera(data);
    });
}

function createProduct(data) {
  document.querySelector("#itemCard").innerHTML = `<img class="card-img" src="${
    data.imageUrl
  }" alt="Photo du produit" />
  <div class="card-body" id="itemName">
    <h4 class="card-title">${data.name}</h4>
    <p class="card-text">${data.description}</p>
    <div class="options">
    <label for="lense">Choisissez un objectif:</label>
    <select name="lense" id="lenses">
    </select>
    </div>
    <br>
    <div class="quantity">
    <label for="quantity">Quantité :</label>
      <select name="quantity" id="quantity">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div class="buy d-flex justify-content-between align-items-center">
      <div class="price text-success">
        <h5 class="mt-4">${priceConversion(data.price)}</h5>
      </div>
      <a href="#" class="btn btn-danger mt-3" id="buy">Ajouter au panier</a>
    </div>
  </div>
</div>`;
  //console.log(data.name); //pour test;
}

function lenseOption(data) {
  for (let lenses of data.lenses) {
    document.querySelector("#lenses").innerHTML +=
      //pas oublier le += pour rajouter tous les objectifs
      ` 
    <option value="${lenses}">${lenses}</option>
  `; //html coupé de la fonction createProduct, penser à mettre cette fontion en dernier sinon html pas encore crée et querySelector ne trouve pas #lenses
  }
}

function buyCamera(cameraID) {
  document.querySelector("#buy").addEventListener("click", function () {
    //écouter #buy onclick et si click exectuer =>
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")); //création local storage
    let chosenLense = document.querySelector("#lenses").value; //reference objectif
    let quantity = document.querySelector("#quantity").value; //reference quantité
    console.log(chosenLense); //test
    console.log(quantity); //test

    if (shoppingCart === null) {
      //!!null important sinon erreur et impossible de push car array pas créé
      shoppingCart = [];
    }
    let item = new Item(cameraID, chosenLense, quantity); // création d'un nouvel item avec les parametres définis (id, objectif, quantité dans le panier)
    shoppingCart.push(item); //push de l'element item créé dans le array shoppingCart
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart)); //parsing
    console.log(shoppingCart); //test
  });
}

getAPI();
