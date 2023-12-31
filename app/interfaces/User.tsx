export interface User {
  id: string,
  docId: string,
  name: string,
  wins?: number,
  losses?: number,
  rating?: number
};

export interface UserProps {
  users: Array<User>;
}