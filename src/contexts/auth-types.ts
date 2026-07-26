export type UserRole = "admin";

export interface LoginEvent {
  id: string;
  username: string;
  role: UserRole;
  action: "login" | "logout";
  at: string;
  adminId?: string | null;
  displayName?: string;
}
