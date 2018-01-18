$(document).ready(() => {
	

$('.btn').on('click', (event) => {
		
		switch(true){
			case $(event.currentTarget).hasClass('btnbio'):
				var $a = $('.btnbio');
				var $b = $('.bio');
				
			break;
			case $(event.currentTarget).hasClass('btndoc'):
				var $a = $('.btndoc');
				var $b = $('.doc');
				
			break;
			case $(event.currentTarget).hasClass('btnmedia'):
				var $a = $('.btnmedia');
				var $b = $('.media');
				
			break;
			case $(event.currentTarget).hasClass('btnlink'):
				var $a = $('.btnlink');
				var $b = $('.link');
				
			break;
			default:
				var $a = $('.btnbio');
				var $b = $('.bio');
				
		}
	
			$b.siblings().fadeOut(); // The .sibling is used to erase any section that is open
			$b.show('slow');

			

	});
	
});
