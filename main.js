//Car func const
function Car(brand, model, year, descr, isNew) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.descr = descr;
  this.isNew = isNew;
}

/*New checkbox
const is_new = document.getElementById("is_new");

let box_res = false;
const checkBox = () => {
  if (!box_res) {
    box_res = true;
  } else {
    box_res = false;
  }
};
is_new.addEventListener("click", checkBox);*/

//ADD button
const btn_sub = document.querySelector(".btn_sub");
let resultArr = [];

let brand = document.getElementById("brand");
let model = document.getElementById("model");
let year = document.getElementById("year");
let descr = document.getElementById("descr");
let is_new = document.getElementById("is_new");

const AddCar = () => {
  const exp_text = document.querySelector(".exp_text");
  if (
    brand.value != "" &&
    model.value != "" &&
    year.value != "" &&
    descr.value != ""
  ) {
    const newCar = new Car(
      brand.value,
      model.value,
      Number(year.value),
      descr.value,
      is_new.checked
    );
    resultArr.push(newCar);
    exp_text.innerHTML = "";
    brand.value = "";
    model.value = "";
    year.value = "";
    descr.value = "";
    is_new.checked = false;
  } else {
    exp_text.innerHTML = "Bos qoymaq olmaz!";

    if (brand.value == "") {
      brand.style.backgroundColor = "#ffd3d3";
      brand.style.border = "2px solid rgb(255, 88, 88)";
    }
    if (model.value == "") {
      model.style.backgroundColor = "#ffd3d3";
      model.style.border = "2px solid rgb(255, 88, 88)";
    }
    if (year.value == "") {
      year.style.backgroundColor = "#ffd3d3";
      year.style.border = "2px solid rgb(255, 88, 88)";
    }
    if (descr.value == "") {
      descr.style.backgroundColor = "#ffd3d3";
      descr.style.border = "2px solid rgb(255, 88, 88)";
    }
    return;
  }
  //console.log(resultArr);

  //Creat Table
  resultArr.forEach((item) => {
    resBrand = item.brand;
    resModel = item.model;
    resYear = String(item.year);
    resDescr = item.descr;
    if (item.isNew) {
      item.isNew = "Yes";
    } else {
      item.isNew = "No";
    }
    resIsNew = item.isNew;
    let tr_new = document.createElement("tr");
    table.append(tr_new);

    let td1 = document.createElement("td");
    tr_new.append(td1);
    td1.innerHTML = resBrand;

    let td2 = document.createElement("td");
    tr_new.append(td2);
    td2.innerHTML = resModel;

    let td3 = document.createElement("td");
    tr_new.append(td3);
    td3.innerHTML = resYear;

    let td4 = document.createElement("td");
    tr_new.append(td4);
    td4.innerHTML = resDescr;

    let td5 = document.createElement("td");
    tr_new.append(td5);
    td5.innerHTML = resIsNew;
  });
  resultArr = [];
};
btn_sub.addEventListener("click", AddCar);

//Add Element
const table = document.querySelector(".table");

//Red color to default
const colorBrand = () => {
  brand.style.backgroundColor = null;
  brand.style.border = null;
};
brand.addEventListener("click", colorBrand);

const colorModel = () => {
  model.style.backgroundColor = null;
  model.style.border = null;
};
model.addEventListener("click", colorModel);

const colorYear = () => {
  year.style.backgroundColor = null;
  year.style.border = null;
};
year.addEventListener("click", colorYear);

const colorDescr = () => {
  descr.style.backgroundColor = null;
  descr.style.border = null;
};
descr.addEventListener("click", colorDescr);
