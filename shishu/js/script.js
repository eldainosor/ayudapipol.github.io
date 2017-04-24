var roms = ['AICP','RR','AOSiP', 'DU','CrDroid','Lineage','XenonHD','AOKP','Darkness Redefined','AquariOS','Purenexus','OmniROM','AOSP Extended'];

/*Thx stackoverflow*/

$( document ).ready(function() {
var interval = setInterval(function() { 
	$('#romtitle').fadeOut(function() {
	var target = Math.floor(Math.random() * (roms.length - 0 )) + 0;
   	$('#romtitle').text(roms[target]);
   });
   	$('#romtitle').fadeIn();
}, 5000);
});