//Car func const
function Car(brand, model, year, descr, isNew) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.descr = descr;
  this.isNew = isNew;
}

//Select tags
const btn_sub = document.querySelector(".btn_sub");
const table = document.querySelector(".table");
const exp_text = document.querySelector(".exp_text");

let brand = document.getElementById("brand");
let model = document.getElementById("model");
let year = document.getElementById("year");
let descr = document.getElementById("descr");
let is_new = document.getElementById("is_new");

//Creat some arrays
let arrInput = [brand, model, year, descr];
let resultArr = [];

//Add Button Listener
btn_sub.addEventListener("click", () => {
  //let arrValues = arrInput.map((item)=> item.value);
  let arrValues = [brand.value, model.value, year.value, descr.value];

  if (arrValues.every((item) => item != "")) {
    //Creat Car Obj
    const newCar = new Car(...arrValues, is_new.checked);
    resultArr.push(newCar);

    //Reset Values
    exp_text.innerHTML = null;
    arrInput.forEach((item) => (item.value = null));
    is_new.checked = false;
  } else {
    //Empty error feedBack
    exp_text.innerHTML = "Please fill all the fields!";

    arrInput.forEach((box) => {
      if (box.value == "") {
        box.style.backgroundColor = "#ffd3d3";
        box.style.border = "2px solid rgb(255, 88, 88)";
      }
    });
    return;
  }

  //Add Table Row
  resultArr.forEach((obj) => {
    obj.isNew ? (obj.isNew = "Yes") : (obj.isNew = "No");

    let tr_new = document.createElement("tr");
    table.append(tr_new);

    let arrItem = [obj.brand, obj.model, obj.year, obj.descr, obj.isNew];

    arrItem.forEach((td_item) => {
      let td_new = document.createElement("td");
      tr_new.append(td_new);
      td_new.innerHTML = td_item;
    });
  });
  resultArr = [];
});

//Red color to default
arrInput.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.backgroundColor = null;
    box.style.border = null;
  });
});
