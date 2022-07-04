class IA {
  methodA: () => number;
}

class A implements IA {
  methodA() {
    return 10;
  }
}

class B {
  methodB() {
    return "10";
  }
}

class BAdapter implements IA {
  private b: B;

  constructor(b: B) {
    this.b = b;
  }

  methodA() {
    return parseInt(this.b.methodB());
  }
}
