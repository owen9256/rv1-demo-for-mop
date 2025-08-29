import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Settings } from "lucide-react";
import moonshotLogo from "@/assets/moonshot-logo.svg";

const Header = () => {
  return (
    <header className="border-b bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={moonshotLogo} alt="Moonshot AI" className="h-8" />
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
            文档
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            开发工作台
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            用户中心
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                <User className="h-4 w-4" />
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
                <Settings className="mr-2 h-4 w-4" />
                <span>设置</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>退出登录</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;