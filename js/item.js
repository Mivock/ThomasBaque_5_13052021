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
  `; //html coupé de la fonction creatProduct, penser à mettre cette fontion en dernier sinon html pas encore crée et querySelector ne trouve pas #lenses
  }
}

getAPI();
