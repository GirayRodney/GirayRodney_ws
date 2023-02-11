// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

// initiate all tooltip
document
  .querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach(tp => new bootstrap.Tooltip(tp));

// initiate all popover
document
  .querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(po => new bootstrap.Popover(po));

// show toast on btn click #showWarning
document.getElementById('showWarning')?.addEventListener('click', () => {
  Array.from(document.querySelectorAll('.toast'))
    .map(t => new bootstrap.Toast(t))
    .forEach(ts => ts.show());
});

function onEyeClick (pw) {
  let pwi = document.querySelector(`#${pw}`);
  let eye = pwi.nextElementSibling.firstElementChild;

  if(pwi.getAttribute('type') == 'password') {
    pwi.setAttribute('type', 'text');
    eye.setAttribute('class', 'fa-solid fa-eye');
    return true;
  } 
  pwi.setAttribute('type', 'password');
  eye.setAttribute('class', 'fa-solid fa-eye-slash');
}