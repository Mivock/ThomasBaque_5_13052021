const clearBasket = document
  .querySelector("#clearBasket")

  .addEventListener("click", function () {
    localStorage.clear();
  });

async function getLocalStorage() {
  localStorage.getItem("shoppingCart");
  let basketContent = JSON.parse(window.localStorage.getItem("shoppingCart"));
  console.table(basketContent);
  createBasket(basketContent);
}

//let basketContent = localStorage.getItem("shoppingCart");
//console.log(localStorage);

async function createBasket(basketContent) {
  if (basketContent === null) {
    document.querySelector("#tableBasket").classList.add("d-none");
    document.querySelector(
      "#basketEmpty"
    ).innerHTML = `<h1>Le panier est vide.</h1>`;
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
