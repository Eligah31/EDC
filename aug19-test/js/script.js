/* put your javascript here */

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.520618, lng: -73.552457},
    scrollwheel: false,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}


var $sizers = document.getElementByTagName('button');
var $fontsize = document.body.style.fontsize;
for(var $i = 0; $i < $sizers.length; $i++)
	$
sizers[$i].addEventLister('click', function(){
	consol.log(this.innerHTML)
	var $getBtn = this.innerHTML;
	if($getBtn == '+'){
		console.log('the plus key was clicked');
		}else{
			console.log('the minus key was clicked');
		}
	
});
