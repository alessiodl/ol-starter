import $ from 'jquery';

// **********************************************
// ADATTAMENTO BOTTONE ZOOM TO EXTENT
// **********************************************
const zoomToExtentStyle = () => {
	$(".ol-zoom-extent > button").html("<i class='fa fa-globe'></i>");
};

// **********************************************
// ADATTAMENTO BOTTONE APRI/CHIUDI OVERVIEW
// **********************************************
const overviewMapStyle = () => {
	var overviewState = 'expanded';
	$(".ol-overviewmap > button > span").html("<i class='fa fa-caret-down'></i>");
	$(".ol-overviewmap > button").css({"width":"24px","height":"24px"});
	$(".ol-overviewmap.ol-unselectable.ol-control > button").click(function(e){
		if (overviewState == 'expanded') {
			$(".ol-overviewmap.ol-unselectable.ol-control.ol-collapsed > button > span" ).html("<i class='fas fa-map'></i>");
			$(this).css({"width":"34px","height":"34px"});
			overviewState = 'collapsed';
		} else {
			$(".ol-overviewmap > button").css({"width":"24px","height":"24px"});
			overviewState = 'expanded';
		}
	});
};

export { zoomToExtentStyle, overviewMapStyle }