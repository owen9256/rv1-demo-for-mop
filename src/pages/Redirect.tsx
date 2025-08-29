import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Redirect = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleRedirect = () => {
      // Get the path from URL params
      const path = searchParams.get("path") || "/console";
      
      // Simulate auth token exchange (in real implementation, this would be handled by your auth system)
      const authToken = searchParams.get("token");
      const code = searchParams.get("code");
      
      if (authToken || code) {
        // Store mock user data (in real app, you'd fetch this from your API)
        const mockUser = {
          id: "user_" + Date.now(),
          email: "user@moonshot.ai",
          name: "Moonshot Developer"
        };

        localStorage.setItem("moonshot_user", JSON.stringify(mockUser));
        
        // Redirect to intended destination
        window.location.href = path;
      } else {
        // No auth data, redirect to home with error
        window.location.href = "/?auth_error=missing_token";
      }
    };

    // Small delay to show loading state
    const timer = setTimeout(handleRedirect, 1500);
    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">登录成功</h2>
          <p className="text-muted-foreground">正在跳转到控制台...</p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>验证身份中</span>
        </div>
      </div>
    </div>
  );
};

export default Redirect;