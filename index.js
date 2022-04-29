const btnSubmit = document.getElementById('btnsubmit');
const btnRatings = document.querySelectorAll('.btn-rating');
const rate = document.getElementById('rate');
const front = document.querySelector('.rating-start');
const back = document.querySelector('.rating-end');
let rating = 0;

btnRatings.forEach((btn) => {
    btn.addEventListener('click', function() {
        rating = btn.dataset.num;
    })
});

btnSubmit.addEventListener('click', () => {
    front.classList.add('hide');
    back.classList.remove('hide');
    rate.innerText = rating;
})