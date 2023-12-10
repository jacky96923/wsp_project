async function signUp(event) {
  event.preventDefault();
  let form = event.target;
  let res = await fetch("/signUp", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: form.username.value,
      password: form.password.value,
    }),
  });
  let json = await res.json();
  if (json.error) {
    errorMessage.textContent = json.error;
    return;
  }
  errorMessage.textContent = "signup successfully";
  location.href = "/login.html";
}