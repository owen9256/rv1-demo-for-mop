import { Link } from "react-router-dom";
import { ExternalLink, Github, MessageCircle, FileText, Calendar, HelpCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const friendLinks = [
    { name: "Kimi", url: "https://www.kimi.com/", description: "AI助手" },
    { name: "OpenAI", url: "https://openai.com/", description: "人工智能研究" },
    { name: "Anthropic", url: "https://www.anthropic.com/", description: "AI安全研究" },
    { name: "Hugging Face", url: "https://huggingface.co/", description: "AI模型社区" },
    { name: "LangChain", url: "https://langchain.com/", description: "LLM应用框架" },
    { name: "Vercel", url: "https://vercel.com/", description: "前端部署平台" }
  ];

  const quickLinks = [
    { name: "API 文档", href: "/docs", icon: FileText },
    { name: "博客资讯", href: "/blog", icon: MessageCircle },
    { name: "活动中心", href: "/events", icon: Calendar },
    { name: "技术支持", href: "/support", icon: HelpCircle }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-lg">Moonshot AI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              提供先进的大语言模型API服务，助力开发者构建下一代AI应用。高性能、易集成、安全可靠。
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com" 
                className="w-8 h-8 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.kimi.com/" 
                className="w-8 h-8 rounded-lg bg-muted hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Kimi AI助手"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">快速导航</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors group"
                  >
                    <Icon className="w-4 h-4 group-hover:text-primary" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">开发资源</h3>
            <nav className="space-y-2">
              <a href="/docs/quickstart" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                快速开始
              </a>
              <a href="/docs/api-reference" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                API参考
              </a>
              <a href="/docs/examples" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                代码示例
              </a>
              <a href="/docs/pricing" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                价格方案
              </a>
            </nav>
          </div>

          {/* Friend Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">友情链接</h3>
            <nav className="space-y-2">
              {friendLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors group"
                  title={link.description}
                >
                  <ExternalLink className="w-3 h-3 group-hover:text-primary" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Moonshot AI. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-foreground transition-colors">隐私政策</a>
            <span>•</span>
            <a href="/terms" className="hover:text-foreground transition-colors">服务条款</a>
            <span>•</span>
            <a href="/sitemap.xml" className="hover:text-foreground transition-colors">站点地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;