import { createContext, useContext, useEffect, useState } from "react";
import { getMe, login as loginApi, logout as logoutApi } from "../api/auth";

interface User {
  id: number;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Auto fetch user on reload
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const u = await getMe();

        console.log("🔍 AuthContext getMe() response:", u);

        if (u) {
          // Normalize backend response → User type
          setUser({
            id: u.id,
            email: u.email,
            name: u.name ?? "",
          });
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("getMe() failed:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginApi(email, password);

    console.log("🔐 Login successful →", data);

    // Normalize backend response
    setUser({
      id: data.id,
      email: data.email,
      name: data.name ?? "",
    });
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
