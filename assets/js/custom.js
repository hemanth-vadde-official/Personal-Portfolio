$(document).ready(function(){
	var dark=false
	$("age").html(date_finder("1998-08-23"));
	$("#exp_desc text").html(date_finder("2019-12-02"));
	$(".nav-menu li:nth-child(3)").click(function(){
		if(dark){
			$('link[href="assets/css/style.css"]').attr('href','assets/css/style2.css');
			$(".nav-menu li:nth-child(3) a  svg, .nav-menu li:nth-child(3) a span ").attr("data-icon","ic:outline-dark-mode").text("Dark");
			dark = false;
		}
		else{
			$('link[href="assets/css/style2.css"]').attr('href','assets/css/style.css');
			$(".nav-menu li:nth-child(3) a svg, .nav-menu li:nth-child(3) a span").attr("data-icon","ic:outline-light-mode").text("Light");
			dark = true;
		}
	})
});

//Age and exp years finder
function date_finder(date)
{
	date = new Date(date);
	var today = new Date();
	var diff = Math.floor((today-date) / (365.25 * 24 * 60 * 60 * 1000));
	return diff;
}