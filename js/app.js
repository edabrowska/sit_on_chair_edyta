document.addEventListener("DOMContentLoaded", function(){

  var menuList = document.querySelectorAll('header_li');

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
  var sliderParent = document.querySelector('.slider_parent');
  var sliderImg = sliderParent.querySelectorAll('.slider_container > .slider_chair > li > img');
  var prevPhoto = sliderParent.querySelector('.slider_left');
  var nextPhoto = sliderParent.querySelector('.slider_right');
  var visiblePictureIdx = 0;

  console.log(sliderImg);
  console.log(prevPhoto);
  console.log(nextPhoto);

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
  var sectionProducts = document.querySelector('.products');
  var prodDiv = sectionProducts.querySelectorAll('.main_width > div');
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

//transport checkbox - czy to o to chodzilo
  var transport = document.querySelector('#transport');
    transport.addEventListener('change', function(){
        if(transport.checked){
            var checkTrans = transport.getAttribute('data-transport-price');

            transport.classList.add('active');
        }
    });

//drop down lists
  var prodForm = document.querySelector('.form');
  var dropDiv = document.querySelectorAll('.drop_down_list');
  var kindList = dropDiv[0];
  var colorList = dropDiv[1];
  var materialList = dropDiv[2];
  var listArrow = document.querySelectorAll('.list_arrow');

//drop kind
      listArrow[0].addEventListener('click', function(e){
        console.log('kind clicked');
        var subList = kindList.querySelector('.list_panel');
        var itemsList = subList.querySelectorAll('li');

        if(subList !== null){
          subList.classList.toggle('inline');
        }

        if(subList.classList.contains('inline')){
            for (var i = 0, len = itemsList.length; i < len; i++){
                itemsList[i].addEventListener('click', function(){
                  subList.classList.remove('inline')
                });
            }
         }
      });

//drop color
      listArrow[1].addEventListener('click', function(){
        console.log('color clicked');
        var subList = colorList.querySelector('.list_panel');
        var itemsList = subList.querySelectorAll('li');

        if(subList !== null){
          subList.classList.toggle('inline');
        }

        if(subList.classList.contains('inline')){
            for (var i = 0, len = itemsList.length; i < len; i++){
                itemsList[i].addEventListener('click', function(){
                  subList.classList.remove('inline')
                });
            }
         }
      });

//drop material
      listArrow[2].addEventListener('click', function(){
        console.log('material clicked');
        var subList = materialList.querySelector('.list_panel');
        var itemsList = subList.querySelectorAll('li');

        if(subList !== null){
          subList.classList.toggle('inline');
        }

        if(subList.classList.contains('inline')){
            for (var i = 0, len = itemsList.length; i < len; i++){
                itemsList[i].addEventListener('click', function(){
                  subList.classList.remove('inline')
                });
            }
         }
      });

//summary
  var panelLeft = document.querySelector('.panel_left');
  var sumColor = panelLeft.querySelector('.color');
  var sumMat = panelLeft.querySelector('.pattern');
  var sumTrans = panelLeft.querySelector('.transport');
  var panelRight = document.querySelector('.panel_right');
  var sumColorVal = panelRight.querySelector('.color');
  var sumMatVal = panelRight.querySelector('.pattern');
  var sumTransVal = panelRight.querySelector('.transport');
  var summaryVal = document.querySelector('.sum');

  var subListKind = kindList.querySelectorAll('.list_panel > li');
  var subListCol = colorList.querySelectorAll('.list_panel > li');
  var subListMat = materialList.querySelectorAll('.list_panel > li');

console.log(sumColorVal);
console.log(sumTransVal);

  /*  for(var i = 0, len = subListKind.length; i < len; i++){
      var kindPrice = subListKind[i].getAttribute('data-kind-price');
      sumKindVal.innerText = kindPrice;
    }
  */

    for(var i = 0, len = subListCol.length; i < len; i++){
      subListCol[i].addEventListener('click', function(){
        var colorPrice = subListCol[i].getAttribute('data-kind-price');
        sumColorVal.innerText = colorPrice;
      });  
    }
    for(var i = 0, len = subListMat.length; i < len; i++){
      var materialPrice = subListMat[i].getAttribute('data-kind-price');
      sumMatVal.innerText = materialPrice;
    }
});
