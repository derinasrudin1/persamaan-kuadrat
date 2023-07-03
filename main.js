const hasil1 = document.getElementById("hasil1");
const hasil2 = document.getElementById("hasil2");
const ngitung = document.getElementById("hitung");

ngitung.addEventListener("click", () => {
  const a = parseFloat(document.getElementById("nilai1").value);
  const b = parseFloat(document.getElementById("nilai2").value);
  const c = parseFloat(document.getElementById("nilai3").value);

  const diskriminan = Math.pow(b, 2) - 4 * a * c;
  const d = Math.sqrt(diskriminan);
  const pembagi = 2 * a;

  if (diskriminan > 0) {
    const x1 = (-b + d) / pembagi;
    const x2 = (-b - d) / pembagi;

    hasil1.innerHTML = "Nilai \\(x_1\\) nya adalah " + x1;
    hasil2.innerHTML = "Nilai \\(x_2\\) nya adalah " + x2;
    MathJax.typeset([hasil1, hasil2]);
  } else if (diskriminan === 0) {
    const x1 = (-b + d) / pembagi;

    hasil1.innerHTML = "Nilai \\(x_1\\) nya adalah " + x1;
    hasil2.innerHTML = "Nilai \\(x_2\\) nya adalah " + x1;
    MathJax.typeset([hasil1, hasil2]);
  } else {
    hasil1.innerHTML = `Nilai \\(x_1\\), \\(x_2\\) nya adalah akar imajiner ${-b} \\(\\pm\\) \\(\\sqrt{${diskriminan}\\over {${pembagi}}}\\)`;
    MathJax.typeset([hasil1]);
  }
});

function refres() {
  window.location.reload();
}
