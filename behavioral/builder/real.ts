enum TaskType {
  PUZZLE = "PUZZLE",
  HEAVY_LIFTING = "HEAVY_LIFTING",
}

interface User {
  age: number;
  height: number;
}

type Validator = (user: User) => User;

class UserValidator {
  validators: Validator[];

  validate(user: User) {
    this.validators.forEach((validator) => validator(user));
  }
}

class UserValidatorBuilder {
  private userValidator: UserValidator;

  constructor() {
    this.userValidator = new UserValidator();
  }

  addAgeValidation(number: number) {
    const ageValidator = (user: User) => {
      if (user.age < number) {
        throw new Error();
      }

      return user;
    };

    this.userValidator.validators.push(ageValidator);

    return this;
  }

  addHeightValidation(number: number) {
    const heightValidator = (user: User) => {
      if (user.height < number) {
        throw new Error();
      }

      return user;
    };

    this.userValidator.validators.push(heightValidator);

    return this;
  }

  build() {
    if (this.userValidator.validators.length === 0) {
      throw new Error();
    }

    return this.userValidator;
  }
}

const user: User = {
  age: 21,
  height: 160,
};

const userValidator = new UserValidatorBuilder()
  .addAgeValidation(21)
  .addHeightValidation(180)
  .build();

userValidator.validate(user);
