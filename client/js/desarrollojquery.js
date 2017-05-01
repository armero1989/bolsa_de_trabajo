$(document).ready(function(){
	$('#about').addClass('visible');
$('#menulogin').on('click',function(){
	if($('#about').hasClass('visible')){
		
		$('#about').removeClass('visible');
		$('#about').addClass('oculto');
	}else{
		$('#about').removeClass('oculto');
		$('#about').addClass('visible');
	}

});

});