//hide preloader





eventListener();

function eventListener(){
  window.addEventListener('load',function(){
    document.querySelector('.preloader').style.display="none";
  })
  
  document.querySelector('.navBar').addEventListener('click',function () {
    document.querySelector('.nav').classList.toggle('nav--show');
    
  })
  

  document.querySelector('.video_switch').addEventListener('click',function(){
    let btn = document.querySelector('.video_btn');
    if (!btn.classList.contains('pauseVideo')){
      btn.classList.add('pauseVideo')
      document.querySelector('.video__item').pause()
    }
    else{
      btn.classList.remove('pauseVideo')
      document.querySelector('.video__item').play()
    }
  })

  //model
    var links = document.querySelectorAll('.work-item__icon');
    // console.log(links);

    links.forEach(function(item){     
      item.addEventListener('click', function(event){
        event.preventDefault();
        if(event.target.parentElement.classList.contains('work-item__icon')){
          let id = event.target.parentElement.dataset.id
          // console.log(id);
          const modal = document.querySelector('.work-modal');
          const modalItem = document.querySelector('.work-modal__item');
      
          modal.classList.add('work-modal--show');
          modalItem.style.backgroundImage = 'url(images/work-' + id + '.jpg)'
        }
      })
    })

    //hide
    document.querySelector('.work-modal__close').addEventListener('click', function(){
      document.querySelector('.work-modal').classList.remove('work-modal--show');
    })
  
    window.addEventListener('scroll',function(){
      console.log(window.pageYOffset);  
      if (window.pageYOffset>300) {
        document.querySelector('.scroll-top').classList.add('active')
    
      } else {
        document.querySelector('.scroll-top').classList.remove('active')
    
      }
      })

}

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    
  },
});
new WOW().init();

