import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Calendar, HelpCircle, Wrench, Building } from "lucide-react";
import moonshotLogo from "@/assets/moonshot-logo.svg";

const Header = () => {
  // For demo purposes, using state to simulate login status
  // In a real app, this would come from your auth context/store
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              活动
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              支持
            </a>
          </nav>
          {!isLoggedIn ? (
            <Button onClick={() => setIsLoggedIn(true)}>
              开始使用
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">用户名</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      user@example.com
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Building className="mr-2 h-4 w-4" />
                  <span>用户中心</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Wrench className="mr-2 h-4 w-4" />
                  <span>开发工作台</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                  <User className="mr-2 h-4 w-4" />
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