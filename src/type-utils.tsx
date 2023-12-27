export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export type UserWithoutEmail = Omit<User, "email">;
