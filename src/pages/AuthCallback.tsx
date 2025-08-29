import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleAuthCallback = () => {
      const code = searchParams.get("code");
      const state = searchParams.get("state");
      const error = searchParams.get("error");

      if (error) {
        console.error("Authentication error:", error);
        navigate("/?auth_error=" + encodeURIComponent(error));
        return;
      }

      if (code) {
        // In a real implementation, you would exchange the code for tokens
        // For now, we'll simulate a successful login
        const mockUser = {
          id: "user_" + Date.now(),
          email: "user@example.com",
          name: "Moonshot User"
        };

        localStorage.setItem("moonshot_user", JSON.stringify(mockUser));
        
        // Redirect to the intended path or default to console
        const redirectPath = state ? decodeURIComponent(state) : "/console";
        window.location.href = redirectPath;
      } else {
        navigate("/?auth_error=missing_code");
      }
    };

    handleAuthCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin mx-auto" />
        <h2 className="text-xl font-semibold">正在处理登录...</h2>
        <p className="text-muted-foreground">请稍等，我们正在验证您的身份</p>
      </div>
    </div>
  );
};

export default AuthCallback;