import { useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

const AUTH_STORAGE_KEY = "niteu_auth_user";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user", error);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    return new Promise((resolve) => {
      const storedUsers = JSON.parse(localStorage.getItem("niteu_users") || "[]");
      const foundUser = storedUsers.find((u: any) => u.email === email && u.password === password);

      if (foundUser) {
        const userWithoutPassword = { id: foundUser.id, name: foundUser.name, email: foundUser.email, phone: foundUser.phone };
        setUser(userWithoutPassword);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userWithoutPassword));
        resolve({ success: true });
      } else {
        resolve({ success: false, error: "Invalid email or password" });
      }
    });
  };

  const signup = (data: { name: string; email: string; password: string; phone?: string }): Promise<{ success: boolean; error?: string }> => {
    return new Promise((resolve) => {
      const storedUsers = JSON.parse(localStorage.getItem("niteu_users") || "[]");
      
      if (storedUsers.find((u: any) => u.email === data.email)) {
        resolve({ success: false, error: "Email already registered" });
        return;
      }

      const newUser = { 
        id: Date.now().toString(), 
        name: data.name, 
        email: data.email, 
        password: data.password,
        phone: data.phone 
      };
      storedUsers.push(newUser);
      localStorage.setItem("niteu_users", JSON.stringify(storedUsers));

      const userWithoutPassword = { id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone };
      setUser(userWithoutPassword);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userWithoutPassword));
      resolve({ success: true });
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return { user, loading, login, signup, logout };
};
