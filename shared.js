function test(){
    alert("test");
}


// SHOW NUMBERS/IMAGES///////////////////////////////////////////////////////////////////////////////////////////////////////
//Toggle numbers
function toggleNumbers(element, txt1, txt2) {
  //  alert("help");
  if (element.innerHTML == txt1) {
    element.innerHTML = txt2;    
    element.classList.toggle("btnredtext");
  } else {
    element.innerHTML = txt1;
    element.classList.toggle("btnredtext");
  }
}
// ShowNumbers
function ShowNumbers(divName){   
  const child = document.getElementById(divName);
  const parentDIV = child.parentElement;
  // alert("help");
const x = parentDIV.getElementsByClassName("btn");
// alert("help");
for (let i = 0; i < x.length; i++) {
  if (x[i].classList.contains("btnredtext")){
      x[i].click();
    }
  }
}




// Show Images
function ShowImages(divName){
    // alert(divName);
    const child = document.getElementById(divName);
    // alert("help");
    const parentDIV = child.parentElement;
    const x = parentDIV.getElementsByClassName("btn");
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("btnredtext")==false){
      x[i].click();
    }
  }
}


// SHOW NUMBERS/IMAGES/////////////////////////////////////////////////////////////////////////////////////////////////////
//Toggle numbers2
function toggleNumbers2(element, txt1, txt2) {
  //  alert("help");
  if (element.innerHTML == txt1) {
    element.innerHTML = txt2;    
    element.classList.toggle("btnredtext2");
  } else {
    element.innerHTML = txt1;
    element.classList.toggle("btnredtext2");
  }
}
// ShowNumbers2
function ShowNumbers2(){   
const x = document.getElementsByClassName("btn2");
//alert("help");
for (let i = 0; i < x.length; i++) {
  if (x[i].classList.contains("btnredtext2")){
      x[i].click();
    }
  }
}
// Show images2
function ShowImages2(idname){ 
  const child = document.getElementById(idname);
  const parentDIV = child.parentElement;
const x = parentDIV.getElementsByClassName("btn2");
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("btnredtext2")==false){
      x[i].click();
    }
  }
}


//POP UPS//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function openPopupInfantDef() {
  var popup = document.getElementById("PopupInfantDef");
  popup.classList.toggle("show");
}
function openPopupChildDef() {
  var popup = document.getElementById("PopupChildDef");
  popup.classList.toggle("show");
}
function openPopupPediatricDef() {
  var popup = document.getElementById("PopupPediatricDef");
  popup.classList.toggle("show");
}
function openPopupAdultDef() {
  var popup = document.getElementById("PopupAdultDef");
  popup.classList.toggle("show");
}
function openPopupAEDImage() {
  var popup = document.getElementById("PopupAEDImage");
  popup.classList.toggle("show");
}





// SCROLL BUTTON/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    // Get the scroll button
  let mybutton = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






