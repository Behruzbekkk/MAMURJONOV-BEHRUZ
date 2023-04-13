let btnOut = document.querySelector("#btn_out");

btnOut.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear("token");
  window.location.replace("../login.html");
});
