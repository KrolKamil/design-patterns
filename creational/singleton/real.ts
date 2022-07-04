class DbConnection {
  private static instance: DbConnection;

  private constructor() {}

  public static getInstance() {
    if (this.instance === undefined) {
      this.instance = new DbConnection();
    }

    return this.instance;
  }

  queryDb(query: string) {}
}

const dbConnection = DbConnection.getInstance();

dbConnection.queryDb("SELECT * FROM X");
