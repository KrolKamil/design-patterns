class Product {
  parts: string[];
}

class ProductBuilder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  addA() {
    this.product.parts.push("a");
    return this;
  }

  addB() {
    this.product.parts.push("b");
    return this;
  }

  build() {
    if (this.product.parts.length === 0) {
      throw new Error();
    }

    return this.product;
  }
}

const product = new ProductBuilder().addA().addB().build();
