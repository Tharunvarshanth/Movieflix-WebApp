/* tslint:disable */
export class User {
  token?: string;
  username?: string;
  name?: string;
  role?: string;
  constructor() {
  }
}
export class  FullDetailsUser{
  constructor(
  _id: string,
  username: string,
  name: string,
  enabled: boolean,
  roles: any
){}
}
