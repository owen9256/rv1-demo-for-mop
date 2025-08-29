import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (redirectPath?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("moonshot_user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Failed to parse stored user:", error);
          localStorage.removeItem("moonshot_user");
        }
      }
      setIsLoading(false);
    };

    checkAuth();

    // Listen for auth state changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "moonshot_user") {
        if (e.newValue) {
          try {
            setUser(JSON.parse(e.newValue));
          } catch (error) {
            console.error("Failed to parse user from storage:", error);
          }
        } else {
          setUser(null);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (redirectPath: string = "/console") => {
    // Build the Moonshot AI login URL with PKCE parameters
    const baseUrl = "https://login.moonshot.cn/";
    const sourceUrl = `https://platform.moonshot.cn/redirect?path=${encodeURIComponent(redirectPath)}&`;
    
    // Generate PKCE code challenge (simplified for demo - in production use crypto.subtle)
    const codeChallenge = btoa(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
    
    const params = new URLSearchParams({
      source: sourceUrl,
      appid: "dev-workbench",
      code_challenge: codeChallenge,
      code_challenge_method: "S256"
    });

    // Store the code challenge for later verification
    localStorage.setItem("moonshot_code_challenge", codeChallenge);
    
    // Redirect to Moonshot login
    window.location.href = `${baseUrl}?${params.toString()}`;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("moonshot_user");
    localStorage.removeItem("moonshot_code_challenge");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};