pc.script.create("spinner", function (context) {
 
    var Spinner = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };
 
    Spinner.prototype = {
        update: function (dt) {
            // Rotate 90 degrees around the world Y axis every second
            this.entity.rotate(0, 90 * dt, 0);
        }
    };
 
    return Spinner;
});
