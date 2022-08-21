const count = document.querySelector("#count");
const increment = document.querySelector("#increment");
const decreament = document.querySelector("#decrement");

increment.onclick = () => {
  count.innerHTML = parseInt(count.innerHTML) + 1;
};

decreament.onclick = () => {
  count.innerHTML = parseInt(count.innerHTML) - 1;
};
