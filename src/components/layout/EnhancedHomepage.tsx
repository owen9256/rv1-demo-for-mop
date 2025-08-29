import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Code, BookOpen, Users, Cpu, MessageSquare, Eye, Brain, FileText, Globe, Star, CheckCircle, Play, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const EnhancedHomepage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent-purple/5 py-20 lg:py-32" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <article className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto animate-fade-in">
            <a href="https://platform.moonshot.cn/docs/promotion" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent-purple/10 border-primary/20 animate-bounce-gentle hover:scale-105 transition-transform cursor-pointer">
                <Zap className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                🚀 kimi-k2-turbo-preview 输出速度已提至 100tokens/s
              </Badge>
            </a>
            
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              强大的大语言模型{" "}
              <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent animate-glow">
                API 服务
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light">
              Moonshot AI 提供先进的文本生成模型，支持对话、代码生成、内容创作、多模态理解等多种应用场景，
              <span className="text-primary font-medium">助力开发者构建下一代 AI 应用</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button size="lg" className="px-10 py-4 text-lg bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in" aria-label="立即开始使用Moonshot AI API">
                <Play className="mr-2 w-5 h-5" aria-hidden="true" />
                立即开始
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              <Link to="/docs">
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-2 hover:bg-primary/5 transition-all duration-300" aria-label="查看API技术文档">
                  <BookOpen className="mr-2 w-5 h-5" aria-hidden="true" />
                  查看文档
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-4xl" role="list" aria-label="核心特性">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border hover:shadow-lg transition-all duration-300" role="listitem">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Zap className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">极速响应</h3>
                  <p className="text-sm text-muted-foreground">100 Tokens/s</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border hover:shadow-lg transition-all duration-300" role="listitem">
                <div className="p-3 bg-accent-purple/10 rounded-full">
                  <Globe className="w-6 h-6 text-accent-purple" aria-hidden="true" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">长上下文</h3>
                  <p className="text-sm text-muted-foreground">128K 上下文长度</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border hover:shadow-lg transition-all duration-300" role="listitem">
                <div className="p-3 bg-accent-green/10 rounded-full">
                  <Eye className="w-6 h-6 text-accent-green" aria-hidden="true" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">多模态</h3>
                  <p className="text-sm text-muted-foreground">图文理解</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Enhanced Models Section */}
      <section className="py-24 bg-muted/20" aria-labelledby="models-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              <Cpu className="w-4 h-4 mr-2" />
              AI 模型产品
            </Badge>
            <h2 id="models-heading" className="text-4xl md:text-5xl font-bold mb-6">
              覆盖全场景的
              <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent"> AI 能力</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              从高速文本生成到复杂推理，从多模态理解到代码生成，我们提供最先进的 AI 模型满足您的每个需求
            </p>
          </header>
          
          <div className="grid lg:grid-cols-3 gap-8" role="list" aria-label="AI模型产品列表">
            {[
              {
                icon: <Sparkles className="w-7 h-7 text-primary" />,
                title: "Kimi-K2 系列",
                description: "MoE 架构基础模型，总参数1T，激活参数32B，具备超强代码和 Agent 能力",
                tags: ["128K 上下文", "高速输出", "Agent 能力"],
                gradient: "from-primary/10 to-primary/5",
                popular: true
              },
              {
                icon: <MessageSquare className="w-7 h-7 text-accent-blue" />,
                title: "Moonshot-v1 系列", 
                description: "专业的文本生成模型，支持多种上下文长度，适用于对话、内容创作等场景",
                tags: ["多规格可选", "文本生成", "对话系统"],
                gradient: "from-accent-blue/10 to-accent-blue/5"
              },
              {
                icon: <Eye className="w-7 h-7 text-accent-green" />,
                title: "Vision 视觉模型",
                description: "多模态模型，能够理解图片内容并生成文本描述，支持图文对话",
                tags: ["图文理解", "文档解析", "多模态"],
                gradient: "from-accent-green/10 to-accent-green/5"
              },
              {
                icon: <Brain className="w-7 h-7 text-accent-purple" />,
                title: "Kimi-Latest",
                description: "最新版本的 Kimi 大模型，保持与产品同步的最新特性和能力",
                tags: ["最新版本", "视觉理解", "128K 上下文"],
                gradient: "from-accent-purple/10 to-accent-purple/5"
              },
              {
                icon: <Brain className="w-7 h-7 text-accent-orange" />,
                title: "Kimi-Thinking",
                description: "具有多模态推理能力的思考模型，擅长深度推理，帮助解决复杂问题",
                tags: ["深度推理", "思考链", "复杂问题"],
                gradient: "from-accent-orange/10 to-accent-orange/5"
              },
              {
                icon: <Code className="w-7 h-7 text-primary" />,
                title: "Chat Completions API",
                description: "标准的聊天完成接口，兼容 OpenAI 格式，支持流式输出，易于集成",
                tags: ["OpenAI 兼容", "流式输出", "易集成"],
                gradient: "from-primary/10 to-primary/5"
              }
            ].map((model, index) => (
              <article 
                key={model.title}
                className={`relative p-8 rounded-3xl border bg-gradient-to-br ${model.gradient} hover:shadow-2xl transition-all duration-500 cursor-pointer group animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                role="listitem"
              >
                {model.popular && (
                  <Badge className="absolute -top-3 left-6 bg-gradient-to-r from-primary to-accent-purple text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    热门
                  </Badge>
                )}
                
                <header className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${model.gradient} border transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                    {model.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{model.description}</p>
                  </div>
                </header>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {model.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-primary font-medium group-hover:text-primary-hover transition-colors">
                  <span>了解更多</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24" aria-labelledby="use-cases-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 id="use-cases-heading" className="text-4xl md:text-5xl font-bold mb-6">
              适合
              <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">每个角色</span>
              的解决方案
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              无论您是工程师、产品经理还是对 AI 感兴趣的用户，我们都有适合您的解决方案
            </p>
          </header>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">开发工程师</h3>
                  <p className="text-muted-foreground mb-6">
                    快速集成 AI 能力，丰富的 API 文档和代码示例，支持多种编程语言
                  </p>
                  <Link to="/docs">
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      查看技术文档
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent-purple/50 group">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">产品经理</h3>
                  <p className="text-muted-foreground mb-6">
                    了解 AI 能力边界，获取产品集成方案，参考成功案例和最佳实践
                  </p>
                  <Link to="/blog">
                    <Button variant="outline" className="group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                      查看产品案例
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent-green/50 group">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent-green/10 to-accent-green/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">AI 爱好者</h3>
                  <p className="text-muted-foreground mb-6">
                    探索 AI 前沿技术，参与开发者活动，获取学习资源和社区支持
                  </p>
                  <Link to="/events">
                    <Button variant="outline" className="group-hover:bg-accent-green group-hover:text-white transition-all duration-300">
                      参与活动
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-accent-purple/5 to-primary/5 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold">
              开启您的
              <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent"> AI 之旅</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              获取 API 密钥，立即体验强大的大语言模型能力。简单易用的接口，让 AI 赋能您的应用。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="px-12 py-4 text-lg bg-gradient-to-r from-primary to-accent-purple hover:shadow-2xl transition-all duration-300" aria-label="立即开始使用Moonshot AI服务">
                立即开始使用
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              <Link to="/docs">
                <Button variant="outline" size="lg" className="px-12 py-4 text-lg border-2 hover:bg-primary/5 transition-all duration-300" aria-label="查看API技术文档">
                  <Download className="mr-2 w-5 h-5" aria-hidden="true" />
                  API 文档
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHomepage;