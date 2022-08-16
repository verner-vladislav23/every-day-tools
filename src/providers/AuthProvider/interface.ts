export interface AuthProviderProps {
  children: React.ReactNode;
};

export interface AuthContextType {
  isAuthorized: boolean;
  loading: boolean;
  login: (data: unknown) => Promise<void>;
  register: (data: unknown) => Promise<void>;
  logout: () => Promise<void>;
};