const rental = document.getElementById("rental");
const expir = document.getElementById("expir");

const nrg = document.getElementById("nrg");
const nrgexpir = document.getElementById("nrgexpir");

const gas = document.getElementById("gas");
const gasexpir = document.getElementById("gasexpir");

const net = document.getElementById("net");
const netxpir = document.getElementById("netxpir");

const calc = document.querySelector('.calc');
const formu = document.getElementById('form');
const totals = document.querySelector(".total");

function suma(a, b, c, d) {
  return a + b + c + d;
}

formu.addEventListener('submit',(e)=> {
  e.preventDefault();
   totals.textContent=parseInt(rental.value)+
   parseInt(nrg.value)+parseInt(gas.value)+parseInt(net.value);
})
