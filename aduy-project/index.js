var beginNumber = document.getElementsByClassName("beginNumber");
var buttonCong = document.getElementsByClassName("buttonCong");
var buttonTru = document.getElementsByClassName("buttonTru");
var themGioHang = document.getElementsByClassName("themGioHang");
for(var i=0; i<buttonCong.length; i++){
    var buttonC = buttonCong[i]
    var beginN = beginNumber[i]
    buttonC.addEventListener("click",function(x){
        buttonC.target.value = 1;
        x = Number(beginN.target.value) + Number(buttonC.target.value);
        beginN.target.value = x;
    });
}

buttonTru.addEventListener("click",tru);

// function cong(x){
//     buttonCong.value = 1;
//     x = Number(beginNumber.value) + Number(buttonCong.value);
//     beginNumber.value = x;
// }
function tru(x){
    buttonTru.value = 1;
    x = Number(beginNumber.value) - Number(buttonTru.value);
    beginNumber.value = x;
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
    img.setAttribute("class","SP");
    img.setAttribute("src","https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJvdHRsZSUyMHdhdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
    let ten = document.createElement("p");
    ten.innerHTML = ""
    let price = document.createElement("p");
    price.innerHTML = ""
    let unit = document.createElement("p");
    unit.innerHTML = "Bình";
    let button = document.createElement("p");
    let cong = document.createElement("button");
    cong.innerText = "+"
    button.appendChild(cong)
    // tuong tu cho các button khác
}