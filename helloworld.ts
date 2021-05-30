class Name {
    constructor(name: string) {
        name = "Sergio";
    }


     myName = function (): string {
        return this.name;
      };
}

const user: Name = new Name("Murphy");
console.log(user.myName());
