import { Role } from 'src/app/shared/model';

export class User {
  constructor(
    public id: string = '',
    public login: string = '',
    public password: string = '',
    public role: Role = 'USER'
  ) {}
}
