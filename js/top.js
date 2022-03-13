    $(function() {
    $(".sliderWrap1").slick({
        arrows: false,
        dots: true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:1000,
        infinite: true,
        });
    });

    $(function() {
    $(".sliderWrap2").slick({
        arrows: false,
        dots: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        });
    });


// スムーススクロール

    $(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
    });




//animation//
const targetElement = document.querySelectorAll('.pTop') ;
document.addEventListener('scroll',function(){              //スクロールするたびにfor文が走るようにするにはこう書く

for (let i = 0; i < targetElement.length; i++) {
    const targetElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight*0.5              //targetElementDistanceの高さを取得して、その何％くらいまでがみえた時にアニメーションを設定する、というふうにする
    console.log(targetElementDistance);                                     
    if(window.innerHeight>targetElementDistance) {                          //targetElementDistanceよりも画面の高さが高い時
        targetElement[i].classList.add('show');             //targetElement[i]番目に対してクラスを追加する
    }                 
}
})