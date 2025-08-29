import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Calendar, HelpCircle, Wrench, Building, LogOut } from "lucide-react";
import moonshotLogo from "@/assets/moonshot-logo.svg";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <header className="border-b bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={moonshotLogo} alt="Moonshot AI" className="h-8" />
          </a>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              博客
            </a>
            <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
              文档
            </a>
            <a href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
              活动
            </a>
            <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              支持
            </a>
          </nav>
          {!isAuthenticated ? (
            <Button onClick={() => login()}>
              开始使用
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
                    <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/console" className="flex items-center">
                    <Building className="mr-2 h-4 w-4" />
                    <span>用户中心</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/console" className="flex items-center">
                    <Wrench className="mr-2 h-4 w-4" />
                    <span>开发工作台</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>退出登录</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;