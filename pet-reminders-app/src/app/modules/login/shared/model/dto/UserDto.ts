import { Role } from 'src/app/shared/model';

export interface UserDto {
  _id: string;
  login: string;
  password: string;
  role: Role;
}
