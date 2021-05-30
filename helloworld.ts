class Name {
    constructor(name: string) {
        name = "Sergio";
    }


     myName = function (): string {
        return this.name;
      };
}

const user: Name = new Name("Sergio");
console.log(user.myName());
