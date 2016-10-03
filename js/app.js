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
  var listArrow = document.querySelectorAll('.list_arrow');
  var dropDiv = document.querySelectorAll('.drop_down_list');

      console.log(transport);
      console.log(dropDiv);

//drop kind
      listArrow[0].addEventListener('click', function(e){
        console.log('kind clicked');
        var subList = dropDiv[0].querySelector('.list_panel');
        var itemsList = subList.querySelectorAll('li');

        if(subList !== null){
          subList.classList.toggle('inline');
        }

        if(subList.classList('inline')){
        //for usuwa clasę, ale if ją dodaje z powrotem...
            for (var i = 0, len = itemsList.length; i < len; i++){
                var item = itemsList[i];
                if(item.classList.contains('inline'))(
                    item.classList.remove('inline')
                )
            }
         }


      });


    //drop color
      listArrow[1].addEventListener('click', function(){
        console.log('color clicked');
        var subList = dropDiv[1].querySelector('.list_panel');

        if(subList !== null){
          subList.classList.toggle('inline');
        }
      });


    //drop material
      listArrow[2].addEventListener('click', function(){
        console.log('material clicked');
        var subList = dropDiv[2].querySelector('.list_panel');

        if(subList !== null){
          subList.classList.toggle('inline');
        }
      });


});
