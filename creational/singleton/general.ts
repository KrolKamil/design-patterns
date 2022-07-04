class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance() {
    if (this.instance === undefined) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
