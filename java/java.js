$(document).ready(function() {
	
	"use strict";
	$(".button").click(function(){
  		var fname = $('input[name=fname]').val();
  		var lname = $('input[name=lname]').val();
  		var nachricht = $('textarea[name=nachricht]').val();
		$(".list").empty();
  		$(".list").append('<div class="item">'+"<br/>" + fname +" "+ lname + "<br/>" + " Nachricht: " + nachricht + "<br/>"+ '</div>');
});
});
