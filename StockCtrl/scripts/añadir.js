const closeAll = document.querySelector(".addproduct-general");
const closeButton = document.querySelector(".addproduct-closeButton");
const openButton = document.querySelector(".addproduct-openButton");

closeButton.addEventListener("click", () => {
  closeAll.style = "display:none";
});
openButton.addEventListener("click", () => {
  closeAll.style = "display:block";
});

const file1 = document.getElementById("file1");
const inputSubmit = document.querySelector(".inputSubmit");

const foto1 = document.querySelector(".addproduct-foto1");
const foto2 = document.querySelector(".addproduct-foto2");
const foto3 = document.querySelector(".addproduct-foto3");

const pict1 = document.createElement("img");
pict1.classList.add('addproduct-img');
pict1.id = "pict1";
pict1.src = "./images/disponible.jpg";
pict1.alt = "imagen previa";
foto1.appendChild(pict1);

const pict2 = document.createElement("img");
pict2.classList.add('addproduct-img');
pict2.id = "pict2";
pict2.src = "./images/disponible.jpg";
pict2.alt = "imagen previa";
foto2.appendChild(pict2);

const pict3 = document.createElement("img");
pict3.classList.add('addproduct-img');
pict3.id = "pict3";
pict3.src = "./images/disponible.jpg";
pict3.alt = "imagen previa";
foto3.appendChild(pict3);

const pictures = [];

inputSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});

file1.addEventListener("change", () => {
  const archivos = file1.files;

  if (!archivos || !archivos.length) {
    pict1.src = "";
    return;
  }
  const firstArch = archivos[0];
  const objectURL = URL.createObjectURL(firstArch);
  pict1.src = objectURL;

  if (!archivos || !archivos.length) {
    pict2.src = "";
    return;
  }

  const secondArch = archivos[1];
  const object2URL = URL.createObjectURL(secondArch);
  pict2.src = object2URL;

  if (!archivos || !archivos.length) {
    pict3.src = "";
    return;
  }

  const thirdArch = archivos[2];
  const object3URL = URL.createObjectURL(thirdArch);
  pict3.src = object3URL;

  pictures.push(objectURL, object2URL, object3URL);
});

const submitArt = document.querySelector(".addproduct-submit");
const dateMod = document.getElementById("dateMod");
const codArt = document.getElementById("cod");
const descArt = document.getElementById("desc");
const listPrice = document.getElementById("listPrice");
const ivaArt = document.getElementById("iva");
const bonifArt = document.getElementById("bonif");
const soldPrice = document.getElementById("soldPrice");
const stockArt = document.getElementById("stock");


submitArt.addEventListener("click", () => {
  
  const newProd = {
    fecha: dateMod.value,
    codigo: codArt.value,
    descrip: descArt.value,
    precioLista: listPrice.value,
    iva: ivaArt.value,
    bonif: bonifArt.value,
    precioVenta: soldPrice.value,
    stock: stockArt.value
  }
   
  const nuevoProducto = Object.create(newProd);

  var [a, b, c] = pictures;
  console.log(nuevoProducto);
});


