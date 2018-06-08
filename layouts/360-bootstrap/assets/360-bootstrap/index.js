$(document).ready(() => {
alert()
  pannellum.viewer('panorama', {
    "autoLoad" : true,
    "autoRotate": -2,
    "type": "equirectangular",
    "panorama": "assets/360-bootstrap/badroom.jpg",
    "showControls": false
  });

});
