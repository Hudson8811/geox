$(document).ready(function(){
    var points = []
    var resaults = [
        {
            title:'Больше ответов А: классика в стиле Одри Хепберн', 
            desc: 'Безупречный бежевый тренч, как у героини Одри Хепберн в «Завтраке у Тиффани», отлично подойдет тем, кто ищет спокойную и строгую по стилю вещь. Такой плащ может дополнить и женственный образ в духе lady like, и минималистский однотонный комплект, и коктейльное платье, и обычные джинсы с футболкой. Эта модель считается наиболее универсальной и вариативной, но при этом она максимально раскрывает феминность: сидит четко по фигуре, подчеркивает ее изгибы, придает образу аристократичность и собранность. Кстати, такой тренч из весенней коллекции <a target="blank" href="https://breathe.geox.com/ru/">Geox</a> можно носить тремя разными способами: расстегнутым – для создания расслабленных, нарочито небрежных образов, с поясом – если хочется выглядеть собранно и женственно, и с поднятым воротником – для того, чтобы подчеркнуть строгость и структурность образа.',
            desc2:'',
            images:{
                item1: 'assets/images/a1.png',
                item2: 'assets/images/a2.png',
                item3: 'assets/images/a3.png',
                item4: 'assets/images/a4.png',
                item5: 'assets/images/a5.png',
                item6: 'assets/images/a6.png',
            },
            mobImageUrl:'assets/images/item1-mobile.png'
        },
        {
            title:'Больше ответов Б: яркая деталь', 
            desc: 'Укороченный двубортный тренч с поясом можно отнести к классике, но чуть более дерзкой и динамичной ее вариации, особенно в необычном цветовом исполнении. Длина не позволяет носить такой плащ с длинными платьями, зато с экстремальным мини, а также с брюками и джинсами он сочетается идеально. Силуэты брюк, к слову, тоже должны быть достаточно смелыми: либо максимально широкими, либо зауженными – с этим тренчем невозможно создать простой или скучный комплект, даже если вы будете очень стараться.',
            desc2:'',
            images:{
                item1: 'assets/images/b1.png',
                item2: 'assets/images/b2.png',
                item3: 'assets/images/b3.png',
                item4: 'assets/images/b4.png',
                item5: 'assets/images/b5.png',
                item6: 'assets/images/b6.png',
            },
            mobImageUrl:'assets/images/item2-mobile.png'
        },
        {
            title:'Больше ответов В: в духе 60-х', 
            desc: 'Лаконичный, практичный и с легким флером ретро, этот плащ – настоящая находка для тех, кто мечтал создавать романтичные, но при этом достаточно разноплановые образы. Благодаря А-силуэту плащ подходит для любых типов фигуры: в его силах подчеркнуть достоинства фигуры, хрупкость и стройность. Несмотря на необычный силуэт, этот плащ можно назвать базовым и универсальным: он здорово будет смотреться с любой одеждой в стиле casual, придавая ей романтичное и игривое настроение.', 
            desc2: 'В этом плаще соединились актуальный дизайн, практичность и высокие технологии. Благодаря запатентованной системе AmphibioxTM, тренч сможет защитить даже от сильного дождя. Кроме того, с ним в комплекте представлена трендовая панама – идеальное решение для непогоды!',
            images:{
                item1: 'assets/images/c1.png',
                item2: 'assets/images/c2.png',
                item3: 'assets/images/c3.png',
                item4: 'assets/images/c4.png',
                item5: 'assets/images/c5.png',
                item6: 'assets/images/c6.png',
            },
            mobImageUrl:'assets/images/item3-mobile.png'
        },
        {
            title:'Больше ответов Г: нормкор и немного спортшика', 
            desc: 'Идеальный плащ для создания стильных образов с уклоном в спорт. Длина макси, лаконичный дизайн и эффектные разрезы по бокам превратили данную модель в настоящий объект желаний. Это как раз тот случай, когда на первый взгляд обычная вещь делает комплект более интересным и акцентным. При этом тренч легко вписать и в простой образ в духе нормкор с джинсами и кроссовками, и в трендовый лук с участием ключевых вещей сезона – для тех, кто хочет каждый день выглядеть по-разному.', 
            desc2: '',
            images:{
                item1: 'assets/images/d1.png',
                item2: 'assets/images/d2.png',
                item3: 'assets/images/d3.png',
                item4: 'assets/images/d4.png',
                item5: 'assets/images/d5.png',
                item6: 'assets/images/d6.png',
            },
            mobImageUrl:'assets/images/item4-mobile.png'
        },

    ]

    
    function flexAlign(){
        if($(window).width() < 560){
            const vars = document.querySelectorAll('.test__label')
            vars.forEach(item => {
                const $this = $(item)
                if($this.children('.test__desc').height() > $this.children('.test__input').height()){
                    $this.addClass('start')
                }
            });
            
        }
    }
    flexAlign()

    $(window).resize(function(){
        flexAlign()
    })

    $('.test__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 0,
        arrows:false,
        dots:false,
        swipe:false,
        fade: true,
        adaptiveHeight: true,
        cssEase: 'linear'
    })

    $('.test__baseInput').click(function(){
        point = $(this).data('point')
        points.push(point)
        $('.test__slider').slick('slickNext')

        if($(this).hasClass('last--item')){
            let order = 0
            let count1 = points.filter(item => item === 1).length
            let count2 = points.filter(item => item === 2).length
            let count3 = points.filter(item => item === 3).length
            let count4 = points.filter(item => item === 4).length
            if(count1 > count2 && count1 > count3 && count1 > count4){
                order = 0
            } else if(count2 > count1 && count2 > count3 && count2 > count4){
                order = 1
            } else if(count3 > count2 && count3 > count1 && count3 > count4){
                order = 2
            } else if(count4 > count1 && count4 > count3 && count4 > count2){
                order = 3
            }
            $('.test__result').addClass(`order${order}`)
            $('.test__slider').hide()
            $('.test__result').show()
            $('.test__result__heading').html(resaults[order].title);
            $('.test__result__desc#d1').html(resaults[order].desc);
            $('.test__result__desc#d2').html(resaults[order].desc2);
            $('.test__result__img.test__result__img--0').attr('src', resaults[order].images.item1)
            $('.test__result__img.test__result__img--1').attr('src', resaults[order].images.item2)
            $('.test__result__img.test__result__img--2').attr('src', resaults[order].images.item3)
            $('.test__result__img.test__result__img--3').attr('src', resaults[order].images.item4)
            $('.test__result__img.test__result__img--4').attr('src', resaults[order].images.item5)
            $('.test__result__img.test__result__img--5').attr('src', resaults[order].images.item6)
            $('.test__result__img-mobile').attr('src', resaults[order].mobImageUrl)

            const t2 = new TimelineMax()

            gsap.from('.test__result__heading',{
                scrollTrigger: '.test__result',
                x: -400,
                opacity: 0,
                duration:1
            })

            gsap.from('.test__result__desc',{
                scrollTrigger: '.test__result',
                x: -400,
                opacity: 0,
                duration:1
            })

            gsap.from('.test__result__img-mobile',{
                scrollTrigger: '.test__result',
                x: 400,
                opacity: 0,
                duration:1
            })

            gsap.from('.test__result__img--0',{
                scrollTrigger: '.test__result',
                y: 400,
                opacity: 0,
                duration:0.5
            })
            gsap.from('.test__result__img--1',{
                scrollTrigger: '.test__result',
                y: -400,
                opacity: 0,
                duration:1
            })
            gsap.from('.test__result__img--2',{
                scrollTrigger: '.test__result',
                y: -400,
                opacity: 0,
                duration:1.5
            })
            gsap.from('.test__result__img--3',{
                scrollTrigger: '.test__result',
                x: 400,
                opacity: 0,
                duration:2
            })
            gsap.from('.test__result__img--4',{
                scrollTrigger: '.test__result',
                y: 400,
                opacity: 0,
                duration:2.5
            })
            gsap.from('.test__result__img--5',{
                scrollTrigger: '.test__result',
                y: 400,
                opacity: 0,
                duration:3
            })
        }
    })

    $('.preview__btn').click(function(){
        $('html, body').animate({scrollTop: $('.test').offset().top}, 1000);
        return false;
    });
    
})

gsap.registerPlugin(ScrollTrigger)
const t1 = new TimelineMax()




t1.from('.geox__bg',{
    scrollTrigger: '.geox__bg',
    opacity: 0,
    duration:1,
})
t1.from('.geox__heading-item:first-child',{
    scrollTrigger: '.geox__heading-item:first-child',
    x: -400,
    opacity: 0,
    duration:1
})

t1.from('.geox__heading-item:last-child',{
    scrollTrigger: '.geox__heading-item:last-child',
    x: 400,
    opacity: 0,
    duration:1,
}, '-=1')
t1.from('.geox__desc',{
    scrollTrigger: '.geox__desc',
    x: -400,
    opacity: 0,
    duration:1,
})

gsap.from('.preview__desc',{
    scrollTrigger: '.preview__desc',
    x: -400,
    opacity: 0,
    duration:1,
})

gsap.from('.preview__btn',{
    scrollTrigger: '.preview__btn',
    x: 400,
    opacity: 0,
    duration:1,
})

function animationSlide(itemNumber){
    gsap.from(`#item${itemNumber} .test__counts`,{
        scrollTrigger: `#item${itemNumber}`,
        x: -400,
        opacity: 0,
        duration:1,
    })
    
    gsap.from(`#item${itemNumber} .test__title`,{
        scrollTrigger: `#item${itemNumber}`,
        x: 400,
        opacity: 0,
        duration:1,
    })
    
    gsap.from(`#item${itemNumber} .test__image`,{
        scrollTrigger: `#item${itemNumber}`,
        x: -400,
        opacity: 0,
        duration:1,
    })
    
    gsap.from(`#item${itemNumber} .test__vars`,{
        scrollTrigger: `#item${itemNumber}`,
        x: 400,
        opacity: 0,
        duration:1,
    })
}

function animationSlideRot(itemNumber){
    gsap.from(`#item${itemNumber} .test__counts`,{
        scrollTrigger: `#item${itemNumber}`,
        x: -400,
        opacity: 0,
        duration:1,
    })
    
    gsap.from(`#item${itemNumber} .test__title`,{
        scrollTrigger: `#item${itemNumber}`,
        x: 400,
        opacity: 0,
        duration:1,
    })
    
    gsap.from(`#item${itemNumber} .test__image`,{
        scrollTrigger: `#item${itemNumber}`,
        x: 400,
        opacity: 0,
        duration:1,
    })
    
    gsap.from(`#item${itemNumber} .test__vars`,{
        scrollTrigger: `#item${itemNumber}`,
        x: -400,
        opacity: 0,
        duration:1,
    })
}

animationSlide(1)

$('.test__slider').on('afterChange', function(event, slick, currentSlide,){
    const even = n => !(n % 2);
    count = currentSlide + 1
    if(even(count)){
        animationSlideRot(count)
    } else{
        animationSlide(count)
    }
    
});

gsap.from('.header__logo',{
    scrollTrigger: '.header',
    x: -400,
    opacity: 0,
    duration:1
})

gsap.from('.header__line',{
    scrollTrigger: '.header',
    x: 400,
    opacity: 0,
    duration:1
})
const t3 = new TimelineMax()
t3.from('.header__item:nth-child(1)',{
    scrollTrigger: '.header',
    y: 400,
    opacity: 0,
    duration:1
},'-=0.9').from('.header__item:nth-child(2)',{
    scrollTrigger: '.header',
    y: 400,
    opacity: 0,
    duration:1
},'-=0.8').from('.header__item:nth-child(3)',{
    scrollTrigger: '.header',
    y: 400,
    opacity: 0,
    duration:1
},'-=0.8').from('.header__item:nth-child(4)',{
    scrollTrigger: '.header',
    y: 400,
    opacity: 0,
    duration:1
},'-=0.8').from('.header__item:nth-child(5)',{
    scrollTrigger: '.header',
    y: 400,
    opacity: 0,
    duration:1
},'-=0.8').from('.header__item:nth-child(6)',{
    scrollTrigger: '.header',
    y: 400,
    opacity: 0,
    duration:1
},'-=0.8').from('.header__item:nth-child(7)',{
    scrollTrigger: '.header',
    y: 400,
    opacity: 0,
    duration:1
},'-=0.8').from('.header__item:nth-child(8)',{
    scrollTrigger: '.header',
    y: 400,
    opacity: 0,
    duration:1
},'-=0.8')