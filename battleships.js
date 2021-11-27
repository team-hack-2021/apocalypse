// get bounding box of the map as it is displayed
const bounds = map.getBounds();
console.log(bounds);

// get the values for each of the bounds
const bounds_north = bounds._northEast.lat;
const bounds_east = bounds._northEast.lng;
const bounds_south = bounds._southWest.lat;
const bounds_west = bounds._southWest.lng;

// assemble bounds in the format overpass wants
const bounding_box = bounds_north + "," + bounds_east + "," + bounds_south + "," + bounds_west;
console.log(bounding_box);

