//Muestra la fecha actual cada milisegundo

function fecha() {
    var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	var fechaa=new Date();
var diasemana=fechaa.getDay();
var dia=fechaa.getDate();

if(dia<10){
	dia="0"+dia;
}
var mes=fechaa.getMonth();
var ano= fechaa.getFullYear();
document.getElementById("fecha").innerHTML=" A "+dias[diasemana]+" , "+dia+" de "+meses[mes]+" de "+ano;
}
window.setInterval(fecha,1);