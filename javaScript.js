let buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.addEventListener("click", () => alert("Hola"));
});

let li = document.querySelectorAll("li");
li.forEach((element) => {
  element.addEventListener("click", () => alert(element.innerText));
});
