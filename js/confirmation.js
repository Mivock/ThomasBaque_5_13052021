const displayDate = (document.querySelector("#displayDate").textContent =
  cDay + " / " + cMonth + " / " + cYear);

function getLocalStorage() {
  localStorage.getItem("userData");
  let users = JSON.parse(window.localStorage.getItem("userData"));
  console.table(users);
  confirmationPage(users);
}
getLocalStorage();

function confirmationPage(users) {
  for (let user of users)
    (document.querySelector("#clientName").textContent = `${
      user.firstName + " " + user.lastName
    }`),
      //faire numero de commande
      (document.querySelector(
        "#userFirstName"
      ).textContent = `${user.firstName}`),
      (document.querySelector("#userEmail").textContent = `${user.email}`);
}
