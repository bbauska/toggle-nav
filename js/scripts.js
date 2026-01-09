/* ./js/scripts.js of bbauska/toggle-nav.bauska.org */
$(document).ready() 
var width = function(checkWidth) {
  if(window.width>768) {
    $("nav .navbar-default").hide()
  } else {
    $("nav .navbar-default").show()
  }
};
width;
