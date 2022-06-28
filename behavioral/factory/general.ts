interface User {
  getName: () => string;
}

class Normal implements User {
  getName() {
    return "Normal";
  }
}

class Admin implements User {
  getName() {
    return "Admin";
  }
}

enum UserType {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

const userFactory = (userType: UserType): User => {
  switch (userType) {
    case UserType.NORMAL:
      return new Normal();
    case UserType.ADMIN:
      return new Admin();
    default:
      throw new Error();
  }
};

const myUsers = [userFactory(UserType.NORMAL), userFactory(UserType.ADMIN)];

myUsers.forEach((user) => console.log(user.getName()));
