$(document).ready(function() {
  setTimeout(function() {
    $("#continue").slideDown(600);
  }, 10000);
});


var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 1, iv_load_policy: 3};
var vid = [
			{'videoId': 'QDyjUIsD-wQ', 'startSeconds': 115, 'endSeconds': 300, 'suggestedQuality': 'hd720'},
		],
		randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;

$('.hi em:last-of-type').html(vid.length);

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid[currVid]);
}

function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#tv').addClass('active');
    $('.hi em:nth-of-type(2)').html(currVid + 1);
  } else if (e.data === 2){
    $('#tv').removeClass('active');
    if(currVid === vid.length - 1){
      currVid = 0;
    } else {
      currVid++;
    }
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

function vidRescale(){

  var w = $(window).width()+200,
    h = $(window).height()+200;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});

// Volume Controls
$('#volume').on('click', function(){
  $('#tv').toggleClass('mute');
  if($('#tv').hasClass('mute')){
    tv.mute();
  } else {
    tv.unMute();
  }
	$('#volume').toggleClass('glyphicon-volume-off')
	$('#volume').toggleClass('glyphicon-volume-up');
});




// Play/Pause Controls

/*$('#control').on('click', function(){
  tv.pauseVideo();
	$('#control').toggleClass('glyphicon-pause')
	$('#control').toggleClass('glyphicon-play');
});*/
 /*$('#control').on('click', function(){
  if($('#tv').hasClass('pause')){
    tv.pauseVideo();
  } else {
		return;
  }
	$('#control').toggleClass('glyphicon-pause')
	$('#control').toggleClass('glyphicon-play');
});*/
