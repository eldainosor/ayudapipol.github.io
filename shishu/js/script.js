var roms = ['AICP','Resurrection Remix','AOSiP', 'Dirty Unicorns','CrDroid','LineageOS','XenonHD','AOKP','Darkness Redefined','Purenexus','AOSP Extended'];
var idkroms = ['AquariOS','OmniROM']

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

$("#gotocar").click(function() {
    $('html, body').animate({
        scrollTop: $("#caracteristicas").offset().top
    }, 1500);
});