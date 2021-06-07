// vider le panier, À FAIRE: reload au click
const clearBasket = document
  .querySelector("#clearBasket")

  .addEventListener("click", function () {
    localStorage.clear();
  });

//récupération du panier + init localStorage pour userData
function getLocalStorage() {
  localStorage.getItem("shoppingCart");
  let basketContent = JSON.parse(window.localStorage.getItem("shoppingCart"));
  console.table(basketContent);
  createBasket(basketContent);

  localStorage.getItem("userData");
  let users = JSON.parse(window.localStorage.getItem("userData"));
  console.table(users);
  validateBasket(users);
}

//let basketContent = localStorage.getItem("shoppingCart");
//console.log(localStorage); //pour test

//création des éléments du tableau pour le panier
async function createBasket(basketContent) {
  if (basketContent === null) {
    //si panier vide alors cacher tableau et afficher h1
    document.querySelector("#tableBasket").classList.add("d-none");
    document.querySelector(
      "#basketEmpty"
    ).innerHTML = `<h1>Le panier est vide.</h1> <br>`;
  } else {
    //let basket = "";
    for (let item of basketContent)
      document.querySelector("#basketDisplay").innerHTML += `
      <tr class="text-center">
        <td class="w-25">
            <img src="${
              item.cameraID.imageUrl
            }" class="img-fluid img-thumbnail" alt="${item.cameraID.name}}">
        </td>
        <td class="align-middle">
            <span>${item.cameraID.name}</span>
        </td>
      <td class="align-middle">
      <span>${item.chosenLense}</span>
  </td>
  <td class="align-middle">
  <span>${item.quantity}</span>
</td>
<td class="align-middle">
            <span>${priceConversion(item.cameraID.price)}</span>
        </td>
    </tr>`;
  }
}

getLocalStorage();

function validateBasket(users) {
  document
    .querySelector("#validateBasket")
    .addEventListener("click", function () {
      //écouter #validateBasket onclick et si click exectuer =>
      let userData = JSON.parse(localStorage.getItem("userData")); //création local storage
      let email = document.getElementById("inputEmail").value;
      let firstName = document.getElementById("inputFirstName").value;
      let lastName = document.getElementById("inputLastName").value;
      let address = document.getElementById("inputAddress").value;
      let city = document.getElementById("inputCity").value;
      let zipCode = document.getElementById("inputZip").value;
      console.log(email); //test
      console.log(firstName); //test

      if (userData === null) {
        //!!null important sinon erreur et impossible de push car array pas créé
        userData = [];
      }
      let user = new User(email, firstName, lastName, address, city, zipCode);
      userData.push(user); //push de l'element user créé dans le array userData
      localStorage.setItem("userData", JSON.stringify(userData)); //parsing
      console.log(userData); //test
    });
}
