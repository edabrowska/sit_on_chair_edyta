document.addEventListener("DOMContentLoaded", function(){

var menuList = document.querySelectorAll('header_li');
var sectionSlider = document.querySelector('.slider');
var sliderImg = sectionSlider.querySelectorAll('.main_width > img');
var arrowLeft = sectionSlider.querySelector('.slider_left');
var arrowRight = sectionSlider.querySelector('.slider_right');
var sectionProducts = document.querySelector('.products');
var prodDiv = sectionProducts.querySelectorAll('.main_width > div');
console.log(sliderImg);
//dropdown list;
  for(var i = 0, len = menuList.length; i < len; i++){
    menuList[i].addEventListener('mouseover', function(){
      var subList = this.querySelector('slider_ul_drop');

      if(subList !== null){
      subList.style.display = 'block';
      }

    });

  }

  for(var i = 0, len = menuList.length; i < len; i++){
    menuList[i].addEventListener('mouseout', function(){
      var subList = this.querySelector('slider_ul_drop');

      if(subList !== null){
      subList.style.display = 'none';
      }

    });

  }

//slider photos;
  arrowLeft.addEventListener('click', function(){
    for(var i = 0, len = sliderImg.length; i < len; i++){
      sliderImg[i].style.display = 'block';
    }

  });

//products name dissappear after mouseover;
  for(var i = 0, len = prodDiv.length; i < len; i++){
    prodDiv[i].addEventListener('mouseover', function(){
      var prodOpaDiv = this.querySelector('.products_opa');

      if(prodOpaDiv !== null){
      prodOpaDiv.style.display = 'none';
      }

    });

  }

  for(var i = 0, len = prodDiv.length; i < len; i++){
    prodDiv[i].addEventListener('mouseout', function(){
      var prodOpaDiv = this.querySelector('.products_opa');

      if(prodOpaDiv !== null){
      prodOpaDiv.style.display = 'block';
      }

    });

  }

});