const count = document.querySelector('#count');
const increment = document.querySelector('#increment');
const decreament = document.querySelector('#decrement');

increment.addEventListener('click', () => {
    count.innerHTML = parseInt(count.innerHTML) + 1;
});

decreament.addEventListener('click', () => {
    count.innerHTML = parseInt(count.innerHTML) - 1;
});