$( document ).ready(function() {
    if($(".flex-right").css("flex-direction") == "row") {
        setInterval(function() {
            navbarswitchdirection();
        }, 20);
    }

function navbarswitchdirection() {

var $rightnavbarcontent = 0;
var $navbarcontainer = 0;
$rightnavbarcontent=$rightnavbarcontent+$(".navhome").outerWidth();
$rightnavbarcontent=$rightnavbarcontent+$(".navcrew").outerWidth();
$rightnavbarcontent=$rightnavbarcontent+$(".navcontact").outerWidth();
$rightnavbarcontent=$rightnavbarcontent+$(".navoverons").outerWidth();

$navbarcontainer=$navbarcontainer+$(".navbar-flexbox").outerWidth();

if($rightnavbarcontent>$navbarcontainer) {
	$(".flex-right").css("flex-direction", "column");
} else {
	$(".flex-right").css("flex-direction", "row");
}

console.log($rightnavbarcontent);
console.log($navbarcontainer);

}
    
});