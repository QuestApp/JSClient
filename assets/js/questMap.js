function initialize() {
	var mapOptions = {
	zoom: 15
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function setCenter(lat, lng){
	var pos = new google.maps.LatLng(lat, lng);
	map.setCenter(pos);
}

function updateGeoPosition(force,loop){

	if(navigator.geolocation) {
		console.log('updating position');
		navigator.geolocation.getCurrentPosition(function(position) {
			if($('#follow_location').is(':checked') || force){
			  setCenter(position.coords.latitude, position.coords.longitude);
			};
			$.ajax($.QueryString['srv']+'/api/track.json?latlong='+JSON.stringify([position.coords.latitude, position.coords.longitude])+'&ident='+retrieveQuestClientID());
			console.log('updated position');
	    }, function() {
	      handleNoGeolocation(true);
	    });
	} else {
		// Browser doesn't support Geolocation
		handleNoGeolocation(false);
	}

	if(!loop){
		window.setTimeout(updateGeoPosition, 10000);
	}
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var lat = 52.0791709;
  var lng = 4.3114062;

  var options = {
    map: map,
    position: new google.maps.LatLng(lat, lng),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  setCenter(lat, lng);
}

function addQuestion(question) {

	var infowindow = new google.maps.InfoWindow({
		content: question.summary
	});

	var lat = question.location_coord.split(',')[0];
	var lng = question.location_coord.split(',')[1];

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(parseFloat(lat), parseFloat(lng)),
		map: map,
		title: question.location_human,
		icon: question.question_type.icon
	});

	google.maps.event.addListener(marker, 'click', function() {
		//infowindow.open(map,marker);
		Router.navigate('question/'+question.id, true);
		//App.renderQuestion(question.id);
	});
}

function centerQuestion(question) {
	var lat = question.location_coord.split(',')[0];
	var lng = question.location_coord.split(',')[1];

	setCenter(parseFloat(lat), parseFloat(lng));
}