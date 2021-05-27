async function getAPI() {
  let cameraID = new URLSearchParams(location.search)
    .toString()
    .substr(-25, 24);
  //console.log(cameraID.substr(-25, 24)); //pour retirer le dernier caractère (=)
  fetch(APIurl + `${cameraID /*.substr(-25, 24)*/}`)
    .then((response) => response.json())
    .then((data) => {
      createProduct(data);
      console.log(APIurl + `${cameraID}`); //pour test;
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
      <select name="lense" id="lense">
        <option value="volvo">test</option>
        <option value="saab">test</option>
        <option value="saab">test</option>
      </select>
    </div>
    <div class="buy d-flex justify-content-between align-items-center">
      <div class="price text-success">
        <h5 class="mt-4">${priceConversion(data.price)}</h5>
      </div>
      <a href="#" class="btn btn-danger mt-3">Ajouter au panier</a>
    </div>
  </div>
</div>`;
  console.log(data.name); //pour test;
}

getAPI();
