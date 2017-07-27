$('#shareBtn').on('click', function(){
  FB.ui({
    method: 'share',
    mobile_iframe: true,
    href: 'https://developers.facebook.com/docs/',
  }, function(response){});
});
