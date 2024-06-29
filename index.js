var product1 = document.getElementById("product1")
var qty1 = document.getElementById("qty1")
var price1 = document.getElementById("price1")

var product2 document.getElementById("product2")
var qty2 = document.getElementById("qty2")
var price2 = document.getElementById("price2")

var carts = document.getElementById("carts")
var total = document.getElementById("total")
var cash = document.getElementById("cash")
var change = document.getElementById("change")  

function addOrder () {  
    carts.textcontent=""
    if (parsefloat (qty1.value) > 0) {
    var order= qtyl.value.toString() + 'pc/s x '+ pricel.textContent + textContent += carts.value.toString() + "\n"; +product1.textContent Php' (parseFloat(qtyl.value) *parseFloat(pricel.textContent)) + '\n'
    xtContent += order
    
    at(qty2.value) > 0) {
    r= qty2.value.toString() + pc/s x + price2.textContent ++ product2.textContent Php (parseFloat(qty2.value) *parseFloat (price2.textContent)) \n'
      
    textContent += carts.value.toString() + "\n";
    
    xtContent += order

tener("keyup", addOrder):
tener("keyup", addOrder

/*const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}

btnLike1.addEventListener("click", countLike1)

const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1
  count2.textContent = likeCounts.toString()
}

btnLike2.addEventListener("click", countLike2)

const btnLike3 = document.getElementById("btnLike3")
const count3 = document.getElementById("count3")

function countLike3() {
  let likeCounts = parseInt(count3.value) + 1
  count3.textContent = likeCounts.toString()
}

btnLike3.addEventListener("click", countLike3)

const btnLike4 = document.getElementById("btnLike4")
const count4 = document.getElementById("count4")

function countLike4() {
  let likeCounts = parseInt(count4.value) + 1
  count4.textContent = likeCounts.toString()
}

btnLike4.addEventListener("click", countLike4)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")

function submitComment(){
  commentbox.textContent += comment.value.toString() + "\n";
  comment.value="";
}
submit.addEventListener("click",submitComment)*/

