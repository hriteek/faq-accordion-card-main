let acc = document.getElementsByClassName('accordion');
console.log('test', acc);
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    console.log('clicked');
    this.classList.toggle('active');

    let panel = this.nextElementSibling;
    if (panel.style.display == 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
