/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


        var flag = 0;
function playPause(obj)
{
    if (flag == 0) {
        obj.play();
        flag = 1;
    } else {
        obj.pause();
        flag = 0;
    }
}

var arr = ['banner1.png', 'banner2.png', 'banner3.png', 'banner4.png'];
var i = 0;
var timeid;
function runSale() {
    var anh = document.getElementById("sale12");
    anh.src = "anh/" + arr[i];
    i++;
    i = i % 4;
    timeid = window.setTimeout("runSale()", 1000);
}
function pauseSale() {
    window.clearTimeout(timeid);
}
function openSale(anh) {
    if (anh.src.lastIndexOf("banner1.png") > 0)
        window.open("khuyen-mai/dat-hang-truoc-s8.html");
    else if (anh.src.lastIndexOf("banner2.png") > 0)
        window.open("dien-thoai/apple/apple.html");
    else if (anh.src.lastIndexOf("banner3.png") > 0)
        window.open("dien-thoai/samsung/samsung-galaxy-j5-prime.html");
    else
        window.open("dien-thoai/samsung/samsung-galaxy-s7-edge.html");
}


function init() {
    window.localStorage.setItem(1, "samsung,dien-thoai/samsung.html");
    window.localStorage.setItem(2, "Samsung,dien-thoai/samsung.html");
    window.localStorage.setItem(3, "iphone,dien-thoai/apple.html");
    window.localStorage.setItem(4, "Iphone,dien-thoai/apple.html");
    window.localStorage.setItem(5, "ipad,tablet/apple.html");
    window.localStorage.setItem(6, "Ipad,dien-thoai/tablet/apple.html");
    window.localStorage.setItem(7, "iphone 7,dien-thoai/apple/iphone-7.html");
    window.localStorage.setItem(8, "Iphone 7,dien-thoai/apple/iphone-7.html");
    window.localStorage.setItem(9, "s7 edge,dien-thoai/samsung/samsung-galaxy-s7-edge.html");
    window.localStorage.setItem(10, "S7 edge,dien-thoai/samsung/samsung-galaxy-s7-edge.html");
    window.localStorage.setItem(11, "galaxy S7 edge,dien-thoai/samsung/samsung-galaxy-s7-edge.html");
    window.localStorage.setItem(12, "galaxy s7 edge,dien-thoai/samsung/samsung-galaxy-s7-edge.html");
}
function search() {
    var flag = 0;
    var a = document.getElementById("search").value;
    for (var i = 1; i <= 12; i++) {
        var c = window.localStorage.getItem(i);
        var arr2 = c.split(",");
        var d = arr2[0].indexOf(a);
        if (d != -1) {
            window.open(arr2[1]);
            flag = 1;
            break;
        }
    }
    if (flag == 0)
        alert("Không Tìm Thấy " + a);
}
