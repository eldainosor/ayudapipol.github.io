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

function myOnload() {
  var ua = navigator.userAgent;
  if (typeof ua != “undefined” && ua.match(/Android.* 2\.[0 – 2](\.[0 – 9]+)*[^.0 – 9]/i) !== null) {
    var vid = document.getElementById(“video”);
    vid.addEventListener(“click”, function() {
      vid.play();
    }, false);
  }
}
window.onload = myOnload;