let inputNumber = document.getElementsByClassName("inputNumber");
let buttonCong = document.getElementsByClassName("buttonCong");
let buttonTru = document.getElementsByClassName("buttonTru");
buttonCong.addEventListener("click",cong);
buttonTru.addEventListener("click",tru);
function cong(x){
    buttonCong.value = 1;
    x = Number(inputNumber.value) + Number(buttonCong.value);
    inputNumber.value = x;
}
function tru(x){
    buttonTru.value = 1;
    x = Number(inputNumber.value) - Number(buttonCong.value);
    inputNumber.value = x;
}
const products = [
    {   img: "" ,
        ten:  "",
        price: "",
        unit:  "",
        button: ""}
]
let product = document.getElementById("product");
function addproduct(x) {
    let img = document.createElement("img");
    img.setAttribute("SP");
    img.innerHTML = ""
    let ten = document.createElement("p");
    ten.innerHTML = ""
    let price = document.createElement("p");
    price.innerHTML = ""
    let unit = document.createElement("p");
    unit.innerHTML = "Bình";
    let button = document.createElement("p");
    button.innerHTML = ""
}