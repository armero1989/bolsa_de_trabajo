//Muestra la hora actual cada milisegundo
function reloj(){
	var fechaactual=new Date();
	var horas=fechaactual.getHours();
	var minutes=fechaactual.getMinutes();
	var second=fechaactual.getSeconds();
	if(horas<10){
		horas="0"+horas;
	}
	if(minutes<10){
		minutes="0"+minutes;
	}
	if(second<10){
		second="0"+second;
	}
	document.getElementById("reloj").innerHTML=""+horas+" : "+minutes+" : "+second;
	
}

window.setInterval(reloj,1);