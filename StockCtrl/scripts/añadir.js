const closeAll = document.querySelector(".addproduct-general");
const closeButton = document.querySelector(".addproduct-closeButton");
const openButton = document.querySelector(".addproduct-openButton");

closeButton.addEventListener("click", () => {
  closeAll.style = "display:none";
});
openButton.addEventListener("click", () => {
  closeAll.style = "display:block";
});
// ------------------------------------------------------------------------------ //
const submitArt = document.querySelector(".addproduct-submitArt");
const addProductFiles = document.getElementById("addProduct-files");
const pict1 = document.getElementById('addproduct-foto1');
const pict2 = document.getElementById('addproduct-foto2');
const pict3 = document.getElementById('addproduct-foto3');

const pictures = [];

addProductFiles.addEventListener("change", () => {
  const archivos = addProductFiles.files;

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
// ------------------------------------------------------------------------------ //
const addProductDate = document.querySelector(".addproduct-dateMod");
const addProductCodArt = document.getElementById("addproduct-cod");
const addProductDescr = document.querySelector(".addProduct-descrip");
const addProductListPrice = document.getElementById("addproduct-listPrice");
const addProductIvaArt = document.getElementById("addproduct-iva");
const addProductBonifArt = document.getElementById("addproduct-bonif");
const addProductSoldPrice = document.getElementById("addproduct-soldPrice");
const addProductStockArt = document.getElementById("addproduct-stock");

addProductListPrice.value ? undefined : addProductListPrice.value = 0;
addProductIvaArt.value ? undefined :
addProductIvaArt.value = 0;
addProductBonifArt.value ? undefined :
addProductBonifArt.value ? undefined :
addProductBonifArt.value = 0;
addProductSoldPrice.value? undefined :
addProductStockArt.value = 0;

function calcPorc() {
  if (parseFloat(addProductListPrice.value) || parseFloat(addProductIvaArt.value) >= 0) {
    return (
      parseFloat(addProductListPrice.value) *
      parseFloat(addProductIvaArt.value) / 100 +
      parseFloat(addProductListPrice.value)
    ).toFixed(2);
  }
}
function calcDesc() {
  if (parseFloat(addProductListPrice.value) || parseFloat(addProductBonifArt.value) >= 0) {
    return `$ ${(parseFloat(calcPorc()) -
      calcPorc() *
      (parseFloat(addProductBonifArt.value)) / 100
    ).toFixed(2)}`;
  }
}

addProductBonifArt.addEventListener('input', updateValue);

function updateValue() {
  addProductSoldPrice.innerText = calcDesc();
}
// ------------------------------------------------------------------------------ //
const addProductAllCode = document.querySelector(".addproduct-all-code");
const verCat = document.querySelector(".verCatalogo");

const nuevoProducto = [];

submitArt.addEventListener("click", () => {

  const newProduct = [
    addProductDate.value, 
    addProductCodArt.value, 
    addProductDescr.value.toUpperCase(), 
    parseFloat(addProductListPrice.value), 
    parseFloat(addProductIvaArt.value), 
    parseFloat(addProductBonifArt.value), 
    parseFloat(addProductStockArt.value), 
    pictures,
    addProductSoldPrice.textContent
  ];
  
  nuevoProducto.push(newProduct);

  addProductAllCode.classList.add("hide");

  verCat.classList.remove("hide");
});
// ------------------------------------------------------------------------------ //
const catalogoContainer = document.querySelector(".catalogo-container");

verCat.addEventListener("click", (e) => {

  for(producto of nuevoProducto) {

    console.log(producto);

  const catProCard = document.createElement("div");
  catProCard.classList.add("catalogo-product-card");

  const imgCat = document.createElement("img");
  imgCat.classList.add('catalogo-product-card-img');
  imgCat.src = `${producto[7][0]}`;
  catProCard.appendChild(imgCat);

  const catalogoProductInfo = document.createElement("div");
  catalogoProductInfo.classList.add("catalogo-product-info");

  const divCatalogoDiv = document.createElement('div');
  divCatalogoDiv.classList.add('catalogo-div-info-div');

  const firstPInfo = document.createElement("p");
  firstPInfo.textContent = `Código ${producto[1]}`.toUpperCase();
  divCatalogoDiv.appendChild(firstPInfo);

  const secondPInfo = document.createElement("p");
  secondPInfo.textContent = `${producto[2]}`;
  divCatalogoDiv.appendChild(secondPInfo);

  const thirdPInfo = document.createElement("p");
  thirdPInfo.textContent = `${producto[8]}`;
  divCatalogoDiv.appendChild(thirdPInfo);

  catalogoProductInfo.appendChild(divCatalogoDiv);

  const catalogoFigureCart = document.createElement('figure');
  catalogoFigureCart.classList.add('catalogo-cart-icon');

  const imagenCart = document.createElement('img');
  imagenCart.src = "./Icons/solid/cart-plus.svg";
  catalogoFigureCart.appendChild(imagenCart);

  catalogoProductInfo.appendChild(catalogoFigureCart);
  catProCard.appendChild(catalogoProductInfo);
  catalogoContainer.appendChild(catProCard);
  }
  
})


