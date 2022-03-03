function helloWorld() {
  const element = document.getElementById("hello-world");

  if (element) {
    element.textContent = "Hello, World!";
  }
}
function initFunction() {
  const element = document.getElementById("sample");
  element?.addEventListener("click", listenerFunction);
}

function listenerFunction(this: HTMLElement, ev: Event) {
  ev.preventDefault();
  this.style.backgroundColor = this.style.backgroundColor === "red" ? "blue" : "red";
}

helloWorld();
initFunction()
