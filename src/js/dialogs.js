import $ from 'jquery';
import { jsPanel } from 'jspanel4/es6module/jspanel.min.js';
import 'jspanel4/es6module/extensions/modal/jspanel.modal.min.js';
import 'jspanel4/es6module/jspanel.min.css';

// Get Panel Theme from general App Theme
const rgb2hex = (rgb) => {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
   ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
   ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
   ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
 }

const panelAppTheme = rgb2hex( $('.bg-primary').css('background-color') )

// jsPanel z-Index base
jsPanel.ziBase = 1500;

// Panels
jsPanel.modal.create({
  id:           'welcome-panel',
  theme:        panelAppTheme +' filled',
  border:       '2px solid',
  headerLogo:   '<span class="fas fa-info-circle fa-lg" style="margin-left:10px; margin-top:4px;">',
  headerTitle:  'Information',
  // header: false,
  // position:    'center-top 0 58',
  boxShadow: 1,
  contentSize: 'auto 140',
  content:     '<div class="text-center"><p><i class="fas fa-layer-group fa-3x"></i></p><h5>Welcome to the OpenLayers Starter Application Template</h5></div>',
  callback: function () {
      this.content.style.padding = '20px';
  }
});

$("#show-about-btn").click(function(){
  jsPanel.create({
    container:    'window',
    id:           'about-panel',
    theme:        panelAppTheme,
    border:       '2px solid',
    headerLogo:   '<span class="fas fa-question-circle fa-lg" style="margin-left:10px; margin-top:4px;">',
    headerTitle:  'About this Application',
    dragit: {
			containment: [65, 10, -45, 10]
		},
		resizeit: {
      containment: 'window'
    },
    boxShadow: 1,
    contentSize: 'auto 140',
    content:     '<div class="text-center"><p><i class="fas fa-layer-group fa-3x"></i></p><h5>OpenLayers Starter Application Template</h5></div>',
    callback: function () {
        this.content.style.padding = '20px';
    }
  });
})