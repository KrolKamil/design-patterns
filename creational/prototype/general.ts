class Prototype {
  a: string;
  b: string;

  clone() {
    const clone = new Prototype();
    clone.a = this.a;
    clone.b = this.b;

    return clone;
  }
}

const prototype = new Prototype();
prototype.a = "a";
prototype.b = "b";

const prototypeClone = prototype.clone();
