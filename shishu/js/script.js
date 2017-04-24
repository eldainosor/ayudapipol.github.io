var roms = ['AICP','Resurrection Remix','AOSiP', 'Dirty Unicorns','CrDroid','LineageOS','XenonHD','AOKP','Darkness Redefined','AquariOS','Purenexus','OmniROM','AOSP Extended'];

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