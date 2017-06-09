var correo=process.env.ADMIN_EMAIL;
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

   
    loadProfile();

$('#correosolicita').attr('href','mailto://'+correo+'?subject=Registrar%20Empresa');

});

function getLocalProfile(callback){
    var profileImgSrc      = localStorage.getItem("PROFILE_IMG_SRC");
    var profileName        = localStorage.getItem("PROFILE_NAME");
    var profileReAuthEmail = localStorage.getItem("PROFILE_REAUTH_EMAIL");

    if(profileName !== null
            && profileReAuthEmail !== null
            && profileImgSrc !== null) {
        callback(profileImgSrc, profileName, profileReAuthEmail);
    }
}


function loadProfile() {
    if(!supportsHTML5Storage()) { return false; }
    getLocalProfile(function(profileImgSrc, profileName, profileReAuthEmail) {
        $("#profile-img").attr("src",profileImgSrc);
        $("#profile-name").html(profileName);
        $("#reauth-email").html(profileReAuthEmail);
        $("#inputEmail").hide();
        $("#remember").hide();
    });
}


function supportsHTML5Storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}


function testLocalStorageData() {
    if(!supportsHTML5Storage()) { return false; }
}