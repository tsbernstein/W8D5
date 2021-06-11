function Surrogate() {};
Surrogate.prototype = Superclass.prototype;
Subclass.prototype = new Surrogate();
Subclass.prototype.constructor =  Subclass;

Function.prototype.inherits = (parent, child) {
    function Surrogate () {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
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