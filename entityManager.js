
var EntityCollection = function() {
	var self = this;

	this.entities = {};
};

EntityCollection.prototype.add = function(item) {
	entities.push(item);
};

EntityCollection.prototype.remove = function(itemId) {
	var idFilter = function(item, index) {
		return item.entityId===itemId;
	};

	var itemToRemove = entities.filter(idFilter);
	var index = entities.indexOf(itemToRemove);
	if(index===-1)
		return;

	return entities.splice(index);
};

EntityCollection.prototype.getItemsInVisualRange = function(position) {
	var visualDistanceFilter = function(item) {
		var xs = item.x - position.x;
			xs = xs * xs;
		var ys = item.y - position.y;
			ys = ys * ys;
		var zs = item.z - position.z;
			zs = zs * zs;
			return xs+ys+zs < 800;//TODO: Need to get the correct value for this. Per player?
	};

	return entities.filter(visualDistanceFilter);
};

EntityCollection.prototype.getItemsInPickupRange = function(position) {
	var pickupDistanceFilter = function(item) {
		var xs = item.x - position.x;
			xs = xs * xs;
		var ys = item.y - position.y;
			ys = ys * ys;
		var zs = item.z - position.z;
			zs = zs * zs;
			return xs+ys+zs < 64; //TODO: Need to get the correct value for this
	};

	return entities.filter(pickupDistanceFilter);
};

module.exports = EntityCollection;