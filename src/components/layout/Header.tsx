import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-lg">Moonshot AI</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
      </div>
    </header>
  );
};

export default Header;