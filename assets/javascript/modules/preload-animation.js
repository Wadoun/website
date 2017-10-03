// (function($) {

// 	document.location = '/#welcome';
// 	var limit = document.getElementById('trigger');
// 	var arrow = document.getElementById('page-down-arrow');
// 	var textArrow = document.getElementById('page-down-text');
// 	var projects = document.getElementsByClassName('project-container');
// 	var selectorProjects = document.getElementById('projectSelector');
// 	var projectName = document.getElementsByClassName('project-selected');
// 	var arrowSecond = document.getElementById('page-down-arrow-second');
// 	var projectsGlobal = $('.project-container');
// 	var imageBg = $('.project-image-bg');
// 	var imageProject = $('.project-image');
// 	var descriptionBg = $('.project-description');
// 	var feedbackBg = $('.project-feedback');
// 	var containerBg = $('.project-selector-container');
// 	var lineColorContact = $('.box');
// 	var allLines = $('.lines');



// 	function loadProject(project) {
// 		projectName[0].innerHTML = project
// 		switch (project) {
// 			case "Dj Book'in":
// 				projects[0].querySelector('a.project-image-bg').style.backgroundImage = "url('/images/djbookin.png')";
// 				projects[0].querySelector('a.project-image-bg').href = "http://www.dj-bookin-staging.eu-central-1.elasticbeanstalk.com";
// 				projects[0].querySelector('div.project-description').innerHTML = 'Design and development built from scratch. UI/UX oriented, this website was made with the technology Ruby on Rails.'
// 				projects[0].querySelector('p.description').innerHTML = 'description in coming'
// 				projects[0].querySelector('span.author').innerHTML = 'name of author in coming'
// 				break;
// 			case 'ShoeSize.Me':
// 				projects[0].querySelector('a.project-image-bg').style.backgroundImage = "url('/images/shoesizeme.png')";
// 				projects[0].querySelector('a.project-image-bg').href = "http://www.shoesize.me";
// 				projects[0].querySelector('div.project-description').innerHTML = 'Design made looking for the perfect pixel. We paid attention to build an UI/UX design in order to make the user experience always more intuitive and optimal.'
// 				projects[0].querySelector('p.description').innerHTML = 'We are very happy with the resulting design and how it fit our requirements. Great work, thank you!'
// 				projects[0].querySelector('span.author').innerHTML = 'Timo Steitz - CEO Shoesize.me'
// 				break;
// 			case '3Ddent':
// 				projects[0].querySelector('a.project-image-bg').style.backgroundImage = "url('/images/3ddent.png')";
// 				projects[0].querySelector('a.project-image-bg').href = "http://www.3ddent.es";
// 				projects[0].querySelector('div.project-description').innerHTML = 'Designed and developped from scratch. The technologies used are HTML5, CSS3 and Javascript.'
// 				projects[0].querySelector('p.description').innerHTML = 'We have found Tripsylon team very reliable. They’re always available for any question or new ideas. We were satisfied at the end, not only because they met the deadlines but also because the final design exceeded what we expected. Highly recommendable!'
// 				projects[0].querySelector('span.author').innerHTML = 'Adrián Perez - CEO 3Ddent'
// 				break;
// 			default:

// 		}
// 	}

// 	loadProject("Dj Book'in");

// 	selectorProjects.addEventListener('click', function(e) {		
// 		selectorProjects.classList.add('fade-in');
// 		loadProject(e.target.textContent);
// 	});

// 	arrow.addEventListener('click', function() {
// 		$.fn.multiscroll.moveTo('why-us');
// 	});

// 	textArrow.addEventListener('click', function() {
// 		$.fn.multiscroll.moveTo('projects');
// 	});

// 	function callHeader() {
// 		var header = document.querySelector('[data-anchor = header]');
// 		header.classList.add('fade-' +  header.dataset.effectType);
// 	}

// 	function callEffects(section) {
// 		var elements = document.querySelectorAll('div[data-anchor = ' + section + '] [data-effect]');

// 		for (var i = 0; i < elements.length; i++) {
// 			elements[i].classList.add('fade-' + elements[i].dataset.effectType);
// 		}
// 	};
// 	function containerDesappear () {
// 		imageBg.addClass("min-opacity").removeClass('fade-in');		
// 		descriptionBg.addClass("min-opacity").removeClass('fade-in');
// 		feedbackBg.addClass("min-opacity").removeClass('fade-in');
// 		containerBg.addClass("min-opacity").removeClass('fade-in');
// 	}
// 	function containerAppear () {
// 		imageBg.addClass("fade-in").removeClass("min-opacity");														
// 		descriptionBg.addClass("fade-in").removeClass("min-opacity");							
// 		feedbackBg.addClass("fade-in").removeClass("min-opacity");							
// 		containerBg.addClass("fade-in").removeClass("min-opacity");		
// 	}
// 	function callLines() {
// 		var line1 	= document.getElementsByClassName('line1');
// 		var line2 	= document.getElementsByClassName('line2');
// 		var line3 	= document.getElementsByClassName('line3');
// 		var line4 	= document.getElementsByClassName('line4');
// 		var line5 	= document.getElementsByClassName('line5');
// 		var line6 	= document.getElementsByClassName('line6');
// 		var line7 	= document.getElementsByClassName('line7');
// 		var ellipse = document.getElementsByClassName('ellipse');

// 		line5[0].classList.add("move-line-five");
// 		line5[0].classList.remove("min-opacity");

// 		line5[0].addEventListener('animationend', function() {
// 			line1[0].classList.add("move-line-one");
// 			line1[0].classList.remove("min-opacity");				
// 			line3[0].classList.add("move-line-three");
// 			line3[0].classList.remove("min-opacity");

// 			line3[0].addEventListener('animationend', function() {	
// 				line2[0].classList.add("move-line-two");
// 				line2[0].classList.remove("min-opacity");
// 				line4[0].classList.add("move-line-four");
// 				line4[0].classList.remove("min-opacity");	

// 				line4[0].addEventListener('animationend', function() {	
// 					line6[0].classList.add("move-line-six");
// 					line6[0].classList.remove("min-opacity");	
// 					line7[0].classList.add("move-line-seven");
// 					line7[0].classList.remove("min-opacity");	
// 					ellipse[0].classList.remove("min-opacity");	

// 					line7[0].addEventListener('animationend', function() {
// 						containerAppear();
// 					});
// 				});	
// 			});	
// 		});
// 	}

// 	function buildOnSection(section) {
// 		var hash = {
// 			'#welcome': function() {
// 				containerDesappear();
// 				textArrow.style.display = 'none';			
// 				arrow.style.display = 'block';
// 				lineColorContact.removeClass('blue');
// 				lineColorContact.removeClass('beige');
// 				arrowSecond.style.display = 'none';		
// 				projectsGlobal.css({'z-index' : '1'});		
// 				allLines.addClass('none');
// 				limit.addEventListener(
// 					'animationend',
// 					function() {
// 						var lineA = document.getElementsByClassName('lineA');
// 						var lineB = document.getElementsByClassName('lineB');
// 						var lineC = document.getElementsByClassName('lineC');
// 						var lineD = document.getElementsByClassName('lineD');
// 						var lineE = document.getElementsByClassName('lineE');
// 						var lineF = document.getElementsByClassName('lineF');
// 						lineColorContact.addClass('fade-in');
// 						lineColorContact.removeClass('caci');
// 						lineA[0].classList.add("animation-line-left-1");
// 						lineB[0].classList.add('animation-line-bottom-1');
// 						lineC[0].classList.add('animation-line-left-2');
// 						lineD[0].classList.add('animation-line-left-3');
// 						lineE[0].classList.add('animation-line-left-4');
// 						lineF[0].classList.add('animation-line-bottom-2');
// 						lineF[0].addEventListener('animationend', function() {
// 							callEffects('welcome');
// 							callHeader();
// 							arrow.classList.add('fade-in');

// 							setTimeout(function() {
// 								arrow.classList.remove('min-opacity');
// 								arrow.classList.remove('fade-in');
// 								arrow.classList.add('bounce');
// 							}, 2000);
// 						});
// 					}
// 				);
// 			},
// 			'#why-us': function() {
// 				callEffects('why-us');
// 				callHeader();			
// 				lineColorContact.addClass('blue');	
// 				lineColorContact.removeClass('caci');
// 				lineColorContact.removeClass('beige');
// 				containerDesappear();		
// 				allLines.addClass('none');
// 				textArrow.classList.remove('fade-in');
// 				arrow.style.display = 'none';
// 				arrowSecond.style.display = 'none';
// 				textArrow.style.display = 'none';
// 				projectsGlobal.css({'z-index' : '1'});
// 			},
// 			'#presentation': function() {
// 				callEffects('presentation');
// 				callHeader();
// 				lineColorContact.removeClass('blue');
// 				lineColorContact.removeClass('caci');
// 				lineColorContact.removeClass('beige');
// 				containerDesappear();	
// 				projectsGlobal.css({'z-index' : '1'});
// 				textArrow.style.display = 'block';
// 				allLines.addClass('none');
// 				textArrow.classList.add('fade-in');			
// 				arrowSecond.style.display = 'block';
// 				arrowSecond.classList.add('fade-in');
// 				arrowSecond.classList.add('bounce');							
// 				arrow.style.display = 'none';				
// 			},
// 			'#projects': function() {
				
// 				callHeader();				
// 				allLines.removeClass('none');
// 				lineColorContact.removeClass('blue');
// 				lineColorContact.addClass('caci');
// 				lineColorContact.removeClass('beige');				
// 				textArrow.classList.remove('fade-in');
// 				callLines();
// 				projectsGlobal.css({'z-index' : '3'});
// 				arrow.style.display = 'none';				
// 				textArrow.style.display = 'none';				
// 				arrowSecond.style.display = 'none';
// 			},
// 			'#team': function() {
// 				callEffects('team');
// 				callHeader();
// 				allLines.addClass('none');
// 				lineColorContact.removeClass('blue');
// 				lineColorContact.removeClass('caci');
// 				containerDesappear();
// 				projectsGlobal.css({'z-index' : '1'});
// 				textArrow.classList.remove('fade-in');
// 				arrowSecond.style.display = 'none';
// 				arrow.style.display = 'none';
// 				lineColorContact.addClass('beige');
// 				textArrow.style.display = 'none';
// 			},
// 			'#join-us': function() {
// 				callEffects('join-us');
// 				callHeader();
// 				allLines.addClass('none');
// 				lineColorContact.addClass('blue');
// 				lineColorContact.removeClass('caci');
// 				lineColorContact.removeClass('beige');
// 				arrowSecond.style.display = 'none';
// 				containerDesappear();	
// 				projectsGlobal.css({'z-index' : '1'});	
// 				textArrow.classList.remove('fade-in');				
// 				textArrow.style.display = 'none';
// 				arrow.style.display = 'none';
// 			},
// 			'#contact': function() {				
// 				callHeader();
// 				callEffects('contact');
// 				allLines.addClass('none');							
// 				lineColorContact.removeClass('blue');
// 				lineColorContact.addClass('beige');
// 				lineColorContact.removeClass('caci');
// 				arrowSecond.style.display = 'none';
// 				containerDesappear();	
// 				projectsGlobal.css({'z-index' : '1'});	
// 				textArrow.classList.remove('fade-in');				
// 				textArrow.style.display = 'none';
// 				arrow.style.display = 'none';
// 			},			
// 		};

// 		return hash[section]();
// 	}

// 	window.addEventListener('load', function() {
// 		buildOnSection(document.location.hash ? document.location.hash : '#welcome');
// 	});

// 	window.addEventListener('popstate', function() {
// 		buildOnSection(document.location.hash);
// 	});

// 	/* multiscroll trigger */
// 	$('.container').multiscroll({
// 		sectionsColor: '#fff',
// 		anchors: ['welcome', 'why-us', 'presentation', 'projects', 'team', 'join-us', 'contact'],
// 		menu: '#menu',
// 		css3: true
// 	});
		
// 	$(".form-group input").val("");

// 	$(".input-effect input, .input-effect textarea").focusout(function(){
// 		if($(this).val() != ""){
// 			$(this).addClass("has-content");
// 		}else{
// 			$(this).removeClass("has-content");
// 		}
// 	})

// })(jQuery);
