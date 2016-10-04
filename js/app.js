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
  var sliderImg = sliderParent.querySelectorAll('.slider_container > .slider_chair > li');
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

      if(visiblePictureIdx >= 3){
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
  var sumKind = panelLeft.querySelector('.title');
  var sumColor = panelLeft.querySelector('.color');
  var sumMat = panelLeft.querySelector('.pattern');
  var sumTrans = panelLeft.querySelector('.transport');
  var panelRight = document.querySelector('.panel_right');
  var sumKindVal = panelRight.querySelector('.title');
  var sumColorVal = panelRight.querySelector('.color');
  var sumMatVal = panelRight.querySelector('.pattern');
  var sumTransVal = panelRight.querySelector('.transport');
  var summaryVal = document.querySelector('.sum > strong');

  var subListKind = kindList.querySelectorAll('.list_panel > li');
  var subListCol = colorList.querySelectorAll('.list_panel > li');
  var subListMat = materialList.querySelectorAll('.list_panel > li');

  var kindPriceList = 0;
  var kindNameList = '';
  var colorPriceList = 0;
  var colorNameList = '';
  var materialPriceList = 0;
  var materialNameList = '';

    for(var i = 0, len = subListKind.length; i < len; i++){
      subListKind[i].addEventListener('click', function(){
        kindPriceList = this.dataset.kindPrice;
        kindNameList = this.innerText;
        sumKindVal.innerText = kindPriceList + ' zl';
        sumKind.innerText = kindNameList;

        showSum();
      });
    }
    for(var i = 0, len = subListCol.length; i < len; i++){
      subListCol[i].addEventListener('click', function(){
        colorPriceList = this.dataset.colorPrice;
        colorNameList = this.innerText;
        sumColorVal.innerText = colorPriceList + ' zl';
        sumColor.innerText = colorNameList;

        showSum();
      });
    }
    for(var i = 0, len = subListMat.length; i < len; i++){
      subListMat[i].addEventListener('click', function(){
        materialPriceList = this.dataset.materialPrice;
        materialNameList = this.innerText;
        sumMatVal.innerText = materialPriceList + ' zl';
        sumMat.innerText = materialNameList;

        showSum();
      });
    }
//transport checkbox
  var transport = document.querySelector('#transport');
  var checkTrans = transport.getAttribute('data-transport-price');

    transport.addEventListener('change', function(){
        if(transport.checked){
          var checkTrans = transport.getAttribute('data-transport-price');
          sumTransVal.innerText = checkTrans + ' zl';
          sumTrans.innerText = 'Transport';
          transport.classList.add('active');
        } else {
          sumTransVal.innerText = '';
          sumTrans.innerText = '';
          transport.classList.remove('active');
        }

        showSum();
    });

    var showSum = function(){
      var generalPrice = parseInt(kindPriceList) + parseInt(colorPriceList) + parseInt(materialPriceList);
  console.log(generalPrice);
        if((transport.checked == true) && (generalPrice > 0)){
          summaryVal.innerText = generalPrice + parseInt(checkTrans) + ' zl';
        } else if((transport.checked != true) && (generalPrice > 0)){
          summaryVal.innerText = generalPrice + parseInt(0) + ' zl';
        }
    }

});
