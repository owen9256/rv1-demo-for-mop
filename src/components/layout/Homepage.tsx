import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Code, BookOpen, Users, Cpu, MessageSquare, Image, Sparkles, Eye, Brain, FileText, Globe } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5" aria-labelledby="hero-heading">
        <div className="container mx-auto px-6 py-20">
          <article className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" aria-hidden="true" />
              kimi-k2-turbo-preview 输出速度已提至 60-100tokens/s
            </Badge>
            
            <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold tracking-tight">
              强大的大语言模型{" "}
              <span className="text-primary">API 服务</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Moonshot AI 提供先进的文本生成模型，支持对话、代码生成、内容创作、多模态理解等多种应用场景，助力开发者构建下一代 AI 应用。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8" aria-label="立即开始使用Moonshot AI API">
                立即开始
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" aria-label="查看API技术文档">
                <BookOpen className="mr-2 w-4 h-4" aria-hidden="true" />
                查看文档
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground" role="list" aria-label="核心特性">
              <div className="flex items-center gap-2" role="listitem">
                <Zap className="w-4 h-4" aria-hidden="true" />
                <span>60-100 Tokens/s</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>128K 上下文长度</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <Eye className="w-4 h-4" aria-hidden="true" />
                <span>多模态理解</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 bg-muted/30" aria-labelledby="models-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 id="models-heading" className="text-3xl md:text-4xl font-bold mb-4">
              核心模型产品
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从高速文本生成到多模态理解，我们提供多种专业模型满足不同应用场景需求
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="AI模型产品列表">
            <article className="p-6 hover:shadow-lg transition-shadow group cursor-pointer border-primary/20 bg-card rounded-lg border" role="listitem">
              <header className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">Kimi-K2 系列</h3>
              </header>
              <p className="text-muted-foreground mb-4">
                MoE 架构基础模型，总参数1T，激活参数32B，具备超强代码和 Agent 能力，输出速度高达100tokens/s。
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Kimi-K2特性">
                <Badge variant="secondary" role="listitem">128K 上下文</Badge>
                <Badge variant="secondary" role="listitem">高速输出</Badge>
                <Badge variant="secondary" role="listitem">Agent 能力</Badge>
              </div>
            </article>

            <article className="p-6 hover:shadow-lg transition-shadow group cursor-pointer bg-card rounded-lg border" role="listitem">
              <header className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">Moonshot-v1 系列</h3>
              </header>
              <p className="text-muted-foreground mb-4">
                专业的文本生成模型，支持8K/32K/128K多种上下文长度，适用于对话、内容创作、代码生成等场景。
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Moonshot-v1特性">
                <Badge variant="secondary" role="listitem">多规格可选</Badge>
                <Badge variant="secondary" role="listitem">文本生成</Badge>
                <Badge variant="secondary" role="listitem">对话系统</Badge>
              </div>
            </article>

            <article className="p-6 hover:shadow-lg transition-shadow group cursor-pointer bg-card rounded-lg border" role="listitem">
              <header className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Eye className="w-6 h-6 text-warning-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">Vision 视觉模型</h3>
              </header>
              <p className="text-muted-foreground mb-4">
                多模态模型，能够理解图片内容并生成文本描述，支持图文对话和文档理解。
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Vision特性">
                <Badge variant="secondary" role="listitem">图文理解</Badge>
                <Badge variant="secondary" role="listitem">文档解析</Badge>
                <Badge variant="secondary" role="listitem">多模态</Badge>
              </div>
            </article>

            <article className="p-6 hover:shadow-lg transition-shadow group cursor-pointer bg-card rounded-lg border" role="listitem">
              <header className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Brain className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">Kimi-Latest</h3>
              </header>
              <p className="text-muted-foreground mb-4">
                最新版本的 Kimi 大模型，支持128K上下文和图片理解，保持与产品同步的最新特性。
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Kimi-Latest特性">
                <Badge variant="secondary" role="listitem">最新版本</Badge>
                <Badge variant="secondary" role="listitem">视觉理解</Badge>
                <Badge variant="secondary" role="listitem">128K 上下文</Badge>
              </div>
            </article>

            <article className="p-6 hover:shadow-lg transition-shadow group cursor-pointer bg-card rounded-lg border" role="listitem">
              <header className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">Kimi-Thinking</h3>
              </header>
              <p className="text-muted-foreground mb-4">
                具有多模态推理能力的思考模型，擅长深度推理，帮助解决复杂问题。
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Kimi-Thinking特性">
                <Badge variant="secondary" role="listitem">深度推理</Badge>
                <Badge variant="secondary" role="listitem">思考链</Badge>
                <Badge variant="secondary" role="listitem">复杂问题</Badge>
              </div>
            </article>

            <article className="p-6 hover:shadow-lg transition-shadow group cursor-pointer bg-card rounded-lg border" role="listitem">
              <header className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Code className="w-6 h-6 text-warning-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">Chat Completions API</h3>
              </header>
              <p className="text-muted-foreground mb-4">
                标准的聊天完成接口，兼容 OpenAI 格式，支持流式和非流式输出，易于集成。
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Chat Completions API特性">
                <Badge variant="secondary" role="listitem">OpenAI 兼容</Badge>
                <Badge variant="secondary" role="listitem">流式输出</Badge>
                <Badge variant="secondary" role="listitem">易集成</Badge>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" aria-labelledby="features-heading">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4">
              核心能力特性
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              基于先进的语言模型技术，为开发者提供强大的 AI 能力支持
            </p>
          </header>
          
          <div className="grid lg:grid-cols-4 gap-8" role="list" aria-label="核心能力列表">
            <article className="p-6 text-center bg-card rounded-lg border" role="listitem">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">文本生成</h3>
              <p className="text-muted-foreground text-sm">
                支持内容创作、摘要生成、创意写作等多种文本生成任务
              </p>
            </article>

            <article className="p-6 text-center bg-card rounded-lg border" role="listitem">
              <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">智能对话</h3>
              <p className="text-muted-foreground text-sm">
                多轮对话理解，上下文保持，构建自然流畅的对话体验
              </p>
            </article>

            <article className="p-6 text-center bg-card rounded-lg border" role="listitem">
              <div className="mx-auto w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-warning-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">代码生成</h3>
              <p className="text-muted-foreground text-sm">
                多编程语言支持，代码生成、解释、调试一站式服务
              </p>
            </article>

            <article className="p-6 text-center bg-card rounded-lg border" role="listitem">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">高速响应</h3>
              <p className="text-muted-foreground text-sm">
                输出速度高达100tokens/s，提供极致的用户体验
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold">
              开始使用 Moonshot AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              获取 API 密钥，立即体验强大的大语言模型能力。简单易用的接口，让 AI 赋能您的应用。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" aria-label="立即开始使用Moonshot AI服务">
                立即开始使用
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg" className="px-8" aria-label="查看API技术文档">
                查看 API 文档
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;