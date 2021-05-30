var Name = /** @class */ (function () {
    function Name(name) {
        this.myName = function () {
            return this.name;
        };
        name = "Sergio";
    }
    return Name;
}());
var user = new Name("Murphy");
console.log(user.myName());
