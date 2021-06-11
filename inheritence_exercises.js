// function Surrogate() {};
// Surrogate.prototype = Superclass.prototype;
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor =  Subclass;

Function.prototype.inherits = function (parent) {
    function Surrogate () {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

function MovingObject (speed) {
    this.speed = speed;
}

function Ship (color) {
    this.color = color;
}
Ship.inherits(MovingObject);

function Asteroid (size) {
    this.size = size;
}
Asteroid.inherits(MovingObject);