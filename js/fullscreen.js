// Continue button animation
$(document).ready(function() {
  setTimeout(function() {
    $("#continue").slideDown(600);
  }, 10000);
  setTimeout(function() {
    $("#fn-title").slideDown(600);
  }, 37000);
  setTimeout(function() {
    $(".tv").fadeOut(600);
  }, 73000);
});


var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 1, iv_load_policy: 3};
var vid = [
			{'videoId': 'd76PjPXF4ZQ', 'startSeconds': 0, 'endSeconds': 73, 'suggestedQuality': 'hd720'},
		],
    currVid = 0;
function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: playerDefaults
  });
}

function onPlayerReady(){
  tv.loadVideoById(vid[currVid]);
}

function onPlayerStateChange(e) {
  if (e.data === -1){
    $('#tv').addClass('active');
  } else if (e.data === 2){
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

// Video Rescaling
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
})
$('#control').on('click', function(){
  $('#tv').toggleClass('pause');
  if($('#tv').hasClass('pause')){
    tv.playVideo();
  } else {
    tv.playVideo();
  }
	$('#control').toggleClass('glyphicon-play')
	$('#control').toggleClass('glyphicon-pause');
});*/
