$(document).ready(() => {

  pannellum.viewer('panorama', {
    "autoLoad" : true,
    "autoRotate": -2,
    "type": "equirectangular",
    "panorama": "assets/360-bootstrap/kitchen.jpg",
    "showControls": false
  });

});
