import React, { Component } from 'react';
import $ from 'jquery';
import 'ol/ol.css';
import {Map, View} from 'ol';
import {fromLonLat, transformExtent} from 'ol/proj';
import {defaults as defaultControls, Control, ScaleLine, ZoomToExtent, OverviewMap} from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

class Mappa extends Component {

    state = {  }

    zoomToExtentStyle = () => {
        $(".ol-zoom-extent > button").html("<i class='fa fa-globe'></i>");
    }

    overviewMapStyle = () => {
        var overviewState = 'expanded';
        $(".ol-overviewmap > button > span").html("<i class='fas fa-minus'></i>");
        $(".ol-overviewmap > button").css({"width":"24px","height":"24px"});
        $(".ol-overviewmap.ol-unselectable.ol-control > button").click(function(e){
            if (overviewState === 'expanded') {
                $(".ol-overviewmap.ol-unselectable.ol-control.ol-collapsed > button > span" ).html("<i class='fas fa-map'></i>");
                $(this).css({"width":"34px","height":"34px"});
                overviewState = 'collapsed';
            } else {
                $(".ol-overviewmap > button").css({"width":"24px","height":"24px"});
                overviewState = 'expanded';
            }
        });
    };

    componentDidMount = () => {
        // Extent 
        const ItalyExtent = [3.691406249999991, 35.31736632923787, 22.67578124999999, 47.57652571374621];
        /* const WorldExtent = [-173.14453125, -43.96119063892022, 164.35546875, 73.47848507889992];
        const AbruzzoExtent = [13.018364289962841, 41.68212288096967, 14.782890505994267, 42.89478878999114]; */
        new Map({
            target: 'map',
            controls: defaultControls().extend([
                new ScaleLine({ 
                    // units: 'degrees' 
                }),
                new OverviewMap({
                    collapsed:false,
                    layers: [
                        new TileLayer({
                            source: new OSM()
                        })
                    ]
                }),
                new ZoomToExtent({
                    tipLabel: "Estensione iniziale",
                    extent: transformExtent(ItalyExtent, 'EPSG:4326', 'EPSG:3857')
                })
            ]),
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([13.3149453, 42.19191]),
                zoom: 6
            })
        });
        
        this.zoomToExtentStyle();
        this.overviewMapStyle();

    }

    render() { 
        return ( <div id="map"></div> );
    }
}
 
export default Mappa;