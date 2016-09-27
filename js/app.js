document.addEventListener("DOMContentLoaded", function(){

var menuList = document.querySelectorAll('header_li');
var sectionSlider = document.querySelector('.slider');
var sliderImg = sectionSlider.querySelectorAll('.main_width > .slider_chair > li > img');
var prevPhoto = sectionSlider.querySelector('.slider_left');
var nextPhoto = sectionSlider.querySelector('.slider_right');
var visiblePictureIdx = 0;
var sectionProducts = document.querySelector('.products');
var prodDiv = sectionProducts.querySelectorAll('.main_width > div');
console.log(sliderImg);
console.log(prevPhoto);
console.log(nextPhoto);
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
  sliderImg[visiblePictureIdx].classList.add('visible');

  nextPhoto.addEventListener('click', function(){
    console.log('next clicked');
    sliderImg[visiblePictureIdx].classList.remove('visible');
    visiblePictureIdx += 1;

    if(visiblePictureIdx >= 4){
      visiblePictureIdx = visiblePictureIdx -1;
    }

    sliderImg[visiblePictureIdx].classList.add('visible');
    console.log(sliderImg[visiblePictureIdx]);
  });

  prevPhoto.addEventListener('click', function(){
    console.log('prev clicked');
    sliderImg[visiblePictureIdx].classList.remove('visible');
    visiblePictureIdx -= 1;

    if(visiblePictureIdx < 0){
      visiblePictureIdx = 0;
    }

    sliderImg[visiblePictureIdx].classList.add('visible');
      console.log(sliderImg[visiblePictureIdx]);
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
