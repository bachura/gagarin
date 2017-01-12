$(document).ready(function(){

	//Fixed header 
	var $menu = $("#menu"); 
	$(window).scroll(function(){
			if ( $(this).scrollTop() > 10 && $menu.hasClass("default") ){
					$menu.fadeOut('fast',function(){
							$(this).removeClass("default")
										 .addClass("fixed")
										 .fadeIn('slow');
					});
			} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
					$menu.fadeOut('fast',function(){
							$(this).removeClass("fixed main-head")
										 .addClass("default main-head")
										 .fadeIn('fast');
					});
			}
	});
	
	// header slider
	$('.slider').slick({
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 500
	});

	// reviews slider
	$('.reviews_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.reviews_slider-nav'
	});
		$('.reviews_slider-nav').slick({
			slidesToShow: 4,	
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			asNavFor: '.reviews_slider',
			centerMode: false,
			focusOnSelect: true,
			centerPadding: '0'
	});
	// $('.rotator-left').click(function(){
	// 		$('.reviews_slider-nav').slick('slickPrev');
	// })
	// $('.rotator-right').click(function(){
	// 		$('.reviews_slider-nav').slick('slickNext');
	// })

	// numbers count
	var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){

			if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

			var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

			var w_height = $(window).height();        // Высота окна браузера
			var d_height = $(document).height();      // Высота всего документа

			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

			if(w_top + 350 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
					$(".spincrement").spincrement({
							thousandSeparator: "",
							duration: 1700
					});

					show = false;
			}
	});

	// Parallax
	$('.parallax-window').parallax();

	// Popup form
	$(".mymagicoverbox").click(function()
	{
				$('#myfond_gris').fadeIn(300);
				var iddiv = $(this).attr("iddiv");
				$('#'+iddiv).fadeIn(300);
				$('#myfond_gris').attr('opendiv',iddiv);
				return false;
	});

	$('#modal_close, #myfond_gris, .mymagicoverbox_fermer').click(function()
	{
				var iddiv = $("#myfond_gris").attr('opendiv');
				$('#myfond_gris').fadeOut(300);
				$('#'+iddiv).fadeOut(300);
	});

	// Page scroll to id
	$("a[href*='#']").mPageScroll2id();

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-85073182-1', 'auto');
	ga('send', 'pageview');

	// drop-down
	$('.list > li').click(function (event) {
		$(this).children("ol").slideToggle();
		event.stopPropagation();
	});

	// circle analitics
	$('#indicatorContainer').radialIndicator({
		barColor: '#505050',
		barWidth: 6,
		initValue: 1,
		roundCorner : true,
		percentage: true,
		frameTime: 80,
		radius: 70
		});
	 
	var target = $('.analitics');
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;
		$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  	if(winScrollTop > scrollToElem){
    
  		var radialObj = $('#indicatorContainer').data('radialIndicator');
				//now you can use instance to call different method on the radial progress.
				//like
			radialObj.animate(20);

  	}
	});


	$('#big_indicatorContainer').radialIndicator({
		barColor: '#0072c0',
		barWidth: 8,
		initValue: 1,
		roundCorner : true,
		percentage: true,
		frameTime: 50,
		radius: 70
		});	

	var target = $('.analitics');
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;
		$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  	if(winScrollTop > scrollToElem){
    
  		var radialObj = $('#big_indicatorContainer').data('radialIndicator');
				//now you can use instance to call different method on the radial progress.
				//like
			radialObj.animate(98);
			
  	}
	});



		// Скрипт Задержки
		// setTimeout(function () {
		// 	// Ваш скрипт
		// }, 20000); // время в мс

		
		// Начнет работать когда блок будет в поле зрения пользователя. Это значит когда пользователь доскроллил до элемента который находиться где то в контенте начнет работать скрипт
		// var target = $('.elem');
		// var targetPos = target.offset().top;
		// var winHeight = $(window).height();
		// var scrollToElem = targetPos - winHeight;
		// 	$(window).scroll(function(){
  	// var winScrollTop = $(this).scrollTop();
  	// 	if(winScrollTop > scrollToElem){
  			//сработает когда пользователь доскроллит к элементу с классом .elem(поставить нужный скрипт)
  	// 	}
		// });


});


