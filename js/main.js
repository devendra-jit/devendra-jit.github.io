var info = {
    "name": "Devendra Mewada",
    "title":"Backend Developer",
    "email": "mewadadevender@gmail.com",
    "phone_number":"+918819889533",
    "address":"Indore, Madhya Pradesh, India",
    "about_me":"I'm Backend developer and a choosy person. I love to play cricket and consuming digital media. I enjoy being outdoor with my friends. When i have time to spare I love to watch comedy shows and often I am very moody about spending my time",
    "instagram":"#",
    "linkedin": "https://www.linkedin.com/in/devender-mewada-585070164",	
    "twitter":"#",
    "github":"https://github.com/devendra-jit",

}
; (function () {

		'use strict';

		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};


		var fullHeight = function () {

			if (!isMobile.any()) {
				$('.js-fullheight').css('height', $(window).height());
				$(window).resize(function () {
					$('.js-fullheight').css('height', $(window).height());
				});
			}
		};

		// Parallax
		var parallax = function () {
			$(window).stellar();
		};

		var contentWayPoint = function () {
			var i = 0;
			$('.animate-box').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function () {

						$('body .animate-box.item-animate').each(function (k) {
							var el = $(this);
							setTimeout(function () {
								var effect = el.data('animate-effect');
								if (effect === 'fadeIn') {
									el.addClass('fadeIn animated-fast');
								} else if (effect === 'fadeInLeft') {
									el.addClass('fadeInLeft animated-fast');
								} else if (effect === 'fadeInRight') {
									el.addClass('fadeInRight animated-fast');
								} else {
									el.addClass('fadeInUp animated-fast');
								}

								el.removeClass('item-animate');
							}, k * 100, 'easeInOutExpo');
						});

					}, 50);

				}

			}, { offset: '85%' });
		};



		var goToTop = function () {

			$('.js-gotop').on('click', function (event) {

				event.preventDefault();

				$('html, body').animate({
					scrollTop: $('html').offset().top
				}, 500, 'easeInOutExpo');

				return false;
			});

			$(window).scroll(function () {

				var $win = $(window);
				if ($win.scrollTop() > 200) {
					$('.js-top').addClass('active');
				} else {
					$('.js-top').removeClass('active');
				}

			});

		};

		var pieChart = function () {
			$('.chart').easyPieChart({
				scaleColor: false,
				lineWidth: 4,
				lineCap: 'butt',
				barColor: '#fc7b44',
				trackColor: "#f5f5f5",
				size: 160,
				animate: 1000
			});
		};

		var skillsWayPoint = function () {
			if ($('#fh5co-skills').length > 0) {
				$('#fh5co-skills').waypoint(function (direction) {

					if (direction === 'down' && !$(this.element).hasClass('animated')) {
						setTimeout(pieChart, 400);
						$(this.element).addClass('animated');
					}
				}, { offset: '90%' });
			}

		};

		var getDetails = () => {

					var name = document.getElementsByClassName("name");
					var title = document.getElementsByClassName("title");
					var phone = document.getElementsByClassName("phone");
					var email = document.getElementsByClassName("email");
					var address = document.getElementsByClassName("address");
					var github = document.getElementsByClassName("github")
					var linkedin = document.getElementsByClassName("linkedin")
					var twitter = document.getElementsByClassName("twitter")
					var instagram = document.getElementsByClassName("instagram")
					var footerEmail = document.getElementsByClassName("footer-email");
					var aboutMe = document.getElementsByClassName("about-me");

					console.log(name)

					for(var i=0;i<name.length;i++)
					{
						name.item(i).innerHTML = info.name;
					}
					title.item(0).innerHTML = info.title;
					phone.item(0).innerHTML = info.phone_number;
					email.item(0).innerHTML = info.email;
					address.item(0).innerHTML = info.address;
					for(var i=0;i<github.length;i++)
					{
						github.item(i).href = info.github;
					}
					for(var i=0;i<linkedin.length;i++)
					{
						linkedin.item(i).href = info.linkedin;
					}
					for(var i=0;i<twitter.length;i++)
					{
						twitter.item(i).href = info.twitter;
					}
					for(var i=0;i<instagram.length;i++)
					{
						instagram.item(i).href = info.instagram;
					}
					footerEmail.item(0).innerHTML = info.email;
					footerEmail.item(0).href = "mailto:"+info.email;
					aboutMe.item(0).innerHTML = info.about_me;







		}
				

		// Loading page
		var loaderPage = function () {
			$(".fh5co-loader").fadeOut("slow");
		};


		$(function () {
			contentWayPoint();
			goToTop();

			loaderPage();
			fullHeight();
			parallax();
			// pieChart();
			getDetails();
			skillsWayPoint();
		});


	}());