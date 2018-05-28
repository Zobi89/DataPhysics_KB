$(document).ready(function(){
	$('#login-form-link').click(function(e) {
	  $("#login-form").delay(100).fadeIn(100);
	  $("#register-form").fadeOut(100);
	  $('#register-form-link').removeClass('active');
	  $(this).addClass('active');
	  e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
	  $("#register-form").delay(100).fadeIn(100);
	  $("#login-form").fadeOut(100);
	  $('#login-form-link').removeClass('active');
	  $(this).addClass('active');
	  e.preventDefault();
	});
})

function sysSel() {
  var sel = document.getElementById("sysType").value;
  var inpSysNum = document.getElementById("sysNum");

  inpSysNum.readOnly = false

  switch(sel) {
    case "DP900":
    inpSysNum.min="90000";
    inpSysNum.max="99999";
    break;
    case "DP700":
    inpSysNum.min="70000";
    inpSysNum.max="79999";
    break;
    case "DP200":
    inpSysNum.min="20000";
    inpSysNum.max="29999";
    break;
    default:
    inpSysNum.min="1000";
    inpSysNum.max="9999";
  }
}
