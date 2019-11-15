import 'ol/ol.css';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import './src/js/dialogs';

const map = new Map({
  target: 'map',
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

