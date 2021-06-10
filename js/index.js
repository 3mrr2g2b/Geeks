$(document).ready(function(){
    
    //window loading...
    
    //toggle click....
    $('.toggle').click(function(){
			$('.toggle').toggleClass('active');
			$('.back').toggleClass('active');
			
			$('.list').slideToggle(300);
			
		});
		
	
    $('.dark-light').click(function(){
			$('body').toggleClass('active');
			$('.navbar').toggleClass('active');
			$('.navbar .logo_1').toggleClass('active');
			$('.navbar .log_2').toggleClass('active');
			$('.navbar .cont .toggle span').toggleClass('active');
			$('.curved').toggleClass('active');
			$('.curved svg path').toggleClass('active');
			$('.dark-light').toggleClass('active');
			$('.container').toggleClass('active');
			$('.connect .container_con .box button').toggleClass('active');
			$('.container_con').toggleClass('active');
			$('.connect .container .box').toggleClass('active');
			$('.end').toggleClass('active');
			$('p').toggleClass('active');
			
			
		});
		
	
        $('.container').slice(0, 3).show();
    $('.btn').click(function(){
		
        $('.container:hidden').slice(0, 3).show(0.5);
		
	    if( $('.container:hidden').length ===0 ){
	         $('.btn').fadeOut();
	    }
		});
});

