let form = document.querySelector("#form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = await fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value.trim(),
      password: password.value.trim(),
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  if (data) {
    localStorage.setItem("token", data.token);
    window.location.replace("../index.html");
  }
});
