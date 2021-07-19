// gọi các biến
var beginNumber = document.getElementsByClassName("beginNumber");
var beginN = document.getElementsByClassName("beginN");
var buttonCong = document.getElementsByClassName("buttonCong");
var buttonC = document.getElementsByClassName("buttonC");
var buttonTru = document.getElementsByClassName("buttonTru");
var buttonT = document.getElementsByClassName("buttonT");
var openCart = document.getElementById("openCart");
var unhide = document.getElementById("unhide");
var dong = document.getElementById("dong");
var xoaCart = document.getElementsByClassName("xoaCart");
var Item = document.getElementsByClassName("Item");
var items = document.getElementById("items");
var xoaHet = document.getElementById("xoaHet");
var themGioHang = document.getElementsByClassName("themGioHang");
var hinhSP = document.getElementsByClassName("hinhSP");
var tenSP = document.getElementsByClassName("tenSP");
var tenTrongGio = document.getElementsByClassName("tenTrongGio");
var giaSP = document.getElementsByClassName("giaSP");
var giaTrongGio = document.getElementsByClassName("giaTrongGio");
var total = document.getElementById("tongCong");
// thêm sản phẩm vào giỏ hàng
for ( let i = 0 ; i<themGioHang.length; i++) {
    themGioHang[i].addEventListener("click",function(){
       let hinh = hinhSP[i].src;
       let ten = tenSP[i].innerText;
       let gia = giaSP[i].innerText;
       let nutXoa = "xóa";
       let nutCong = "+";
       let nutInput = "";
       let nutTru = "-";
       let taoTheDivItem = document.createElement("div");
       taoTheDivItem.setAttribute("class","Item");
       let taoTheHinh = document.createElement("img");
       taoTheHinh.setAttribute("class","hinhTrongGio");
       taoTheHinh.innerText = hinh;
    })
}
// xóa hết sản phẩm trong giỏ hàng
xoaHet.addEventListener("click",function(){
    items.remove();
})
// xóa từng sản phẩm trong giỏ hàng
for ( let i = 0 ; i<xoaCart.length; i++) {
    xoaCart[i].addEventListener("click",function(){
        Item[i].remove();
    })
}
// tăng giảm sản phẩm cho trang chính
for ( let i = 0 ; i<buttonCong.length; i++) {
    buttonCong[i].addEventListener("click",function(){
        buttonCong[i].value = 1;
        beginNumber[i].value = Number(beginNumber[i].value) + Number(buttonCong[i].value);
    })
}
for ( let i = 0; i<buttonTru.length; i++) {
    buttonTru[i].addEventListener("click",function(){
        buttonTru[i].value = 1;
        beginNumber[i].value = Number(beginNumber[i].value) - Number(buttonTru[i].value);
        if (beginNumber[i].value < 0){
            beginNumber[i].value = 0;
        }
    })
}
// tăng giảm sản phẩm trong giỏ hàng
for ( let i = 0 ; i<buttonC.length; i++) {
    buttonC[i].addEventListener("click",function(){
        buttonC[i].value = 1;
        beginN[i].value = Number(beginN[i].value) + Number(buttonC[i].value);
    })
}
for ( let i = 0; i<buttonT.length; i++) {
    buttonT[i].addEventListener("click",function(){
        buttonT[i].value = 1;
        beginN[i].value = Number(beginN[i].value) - Number(buttonT[i].value);
        if (beginN[i].value < 0){
            beginN[i].value = 0;
        }
    })
}
// mở giỏ hàng
openCart.addEventListener("click",mo);
function mo(){
    unhide.style.display = "block";
    unhide.style.background = "lightskyblue";
}
// đóng giỏ hàng
dong.addEventListener("click",close);
function close(){
    unhide.style.display = "none";
}
//  thêm sản phẩm vào trang chính 
// const products = [
//     {   img: "" ,
//         ten:  "",
//         price: "",
//         unit:  "",
//         button: ""}
// ]
// let product = document.getElementById("product");
// function addproduct(x) {
//     let img = document.createElement("img");
//     img.setAttribute("class","SP");
//     img.setAttribute("src","https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJvdHRsZSUyMHdhdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
//     let ten = document.createElement("p");
//     ten.innerHTML = ""
//     let price = document.createElement("p");
//     price.innerHTML = ""
//     let unit = document.createElement("p");
//     unit.innerHTML = "Bình";
//     let button = document.createElement("p");
//     let cong = document.createElement("button");
//     cong.innerText = "+"
//     button.appendChild(cong)
//     // tuong tu cho các button khác
// }
