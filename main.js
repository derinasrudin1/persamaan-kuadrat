let hasil1 = document.getElementById('hasil1');
let hasil2 = document.getElementById('hasil2');
let ngitung = document.getElementById('hitung');
ngitung.addEventListener('click', function () {
  let a = document.getElementById('nilai1').value;
  let b = document.getElementById('nilai2').value;
  let c = document.getElementById('nilai3').value;
  let diskriminan = Math.pow(b, 2) - 4 * a * c;
  let d = Math.sqrt(diskriminan);
  let pembagi = 2 * a;
  if (diskriminan > 0) {
    let x1 = (-b + d) / pembagi;
    let x2 = (-b - d) / pembagi;
    hasil1.innerHTML = 'Nilai x1 nya adalah' + ' ' + x1;
    hasil2.innerHTML = 'Nilai x2 nya adalah' + ' ' + x2;
  } else if (diskriminan == 0) {
    let x1 = (-b + d) / pembagi;
    let x2 = x1;
    hasil1.innerHTML = 'Nilai x1 nya adalah' + ' ' + x1;
    hasil2.innerHTML = 'Nilai x2 nya adalah' + ' ' + x2;
  } else if (diskriminan < 0) {
    hasil1.innerHTML = 'Nilai x1,x2 nya adalah akar imajiner  ' + -b + '±' + '√' + diskriminan + '/' + pembagi;
  }
});
