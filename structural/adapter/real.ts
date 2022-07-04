class IUserFromDb {
  getAge: () => number;
}

class UserFromDb implements IUserFromDb {
  getAge() {
    return 10;
  }
}

class UserFromExcel {
  getColoumnXRowY() {
    return "10";
  }
}

class UserFromExcelAdapter implements IUserFromDb {
  private userFromExcel: UserFromExcel;

  constructor(userFromExcel: UserFromExcel) {
    this.userFromExcel = userFromExcel;
  }

  getAge() {
    return parseInt(this.userFromExcel.getColoumnXRowY());
  }
}

const sumAges = (target: IUserFromDb[]) =>
  target.reduce((acc, next) => {
    acc = acc + next.getAge();
    return acc;
  }, 0);

const userFromDb = new UserFromDb();
const userFromExcelAdapter = new UserFromExcelAdapter(new UserFromExcel());

sumAges([userFromDb, userFromExcelAdapter]);
