const modalBtn = document.querySelector('.modal-btn');
var modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close-btn');

modalBtn.onclick = function () {
  modal.style.display = 'block';
};

closeBtn.onclick = function () {
  modal.style.display = 'none';
};

modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.visibility = 'visible';
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
