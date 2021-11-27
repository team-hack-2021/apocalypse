// get bounding box of the map as it is displayed
const bounds = map.getBounds();
console.log(bounds);

// get the values for each of the bounds
const bounds_north = bounds._northEast.lat;
const bounds_east = bounds._northEast.lng;
const bounds_south = bounds._southWest.lat;
const bounds_west = bounds._southWest.lng;

// assemble bounds in the format overpass wants
const bounding_box = bounds_south + "," + bounds_west + "," + bounds_north + "," + bounds_east;
console.log(bounding_box);                                                                                              // save to console for debugging
document.getElementById('debug1').innerHTML = "bounding box coordinates: " + bounding_box;                              // display on page for debugging

// assemble bounds in the format for the overpass request
const bounding_box_for_query = bounds_south + "%2C" + bounds_west + "%2c" + bounds_north + "%2C" + bounds_east

// assemble the overpass query
const overpass_query = "https://overpass-api.de/api/interpreter?data=%2F*%0AThis%20has%20been%20generated%20by%20the%20overpass-turbo%20wizard.%0AThe%20original%20search%20was%3A%0A%E2%80%9Cbuilding%20in%20bbox%E2%80%9D%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F%20gather%20results%0A%28%0A%20%20%2F%2F%20query%20part%20for%3A%20%E2%80%9Cbuilding%E2%80%9D%0A%20%20way%5B%22building%22%5D%28" + bounding_box_for_query + "%29%3B%0A%20%20relation%5B%22building%22%5D%28" + bounding_box_for_query + "%29%3B%0A%29%3B%0A%2F%2F%20print%20results%0Aout%20body%3B%0A%3E%3B%0Aout%20skel%20qt%3B";
console.log(overpass_query);                                                                                            // save to console for debugging        
document.getElementById('debug2').innerHTML = "<a href='" + overpass_query + "'>" + overpass_query + "</a>";            // display on page for debugging
