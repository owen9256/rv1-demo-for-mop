import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Code, Zap, BookOpen, Users, Cpu, MessageSquare, Image, Video, Mic } from "lucide-react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Build the Future with{" "}
              <span className="text-primary">Moonshot AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Advanced multimodal AI models for chat, code generation, image understanding, and beyond. 
              Trusted by thousands of developers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <BookOpen className="mr-2 w-4 h-4" />
                Documentation
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50,000+ Developers</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>1B+ API Calls</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Capabilities for Every Use Case
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From conversational AI to multimodal understanding, our platform provides 
              comprehensive AI solutions for modern applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Chat & Conversation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced conversational AI with context understanding and multi-turn dialogue capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">GPT-Compatible</Badge>
                <Badge variant="secondary">Function Calling</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Code className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Code Generation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Intelligent code completion, debugging, and generation across multiple programming languages.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Multi-Language</Badge>
                <Badge variant="secondary">Debug Assistant</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Image className="w-6 h-6 text-warning-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Vision & Multimodal</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Analyze images, documents, and visual content with state-of-the-art computer vision models.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">OCR</Badge>
                <Badge variant="secondary">Image Analysis</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mic className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Speech & Audio</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Natural speech synthesis and recognition with real-time processing capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Text-to-Speech</Badge>
                <Badge variant="secondary">Voice Clone</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Video className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Video Understanding</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Analyze video content, extract insights, and generate descriptions from visual media.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Video Analysis</Badge>
                <Badge variant="secondary">Content Detection</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-warning-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Custom Models</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Fine-tune and deploy specialized AI models tailored to your specific business needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Fine-tuning</Badge>
                <Badge variant="secondary">Enterprise</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Flagship Models Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flagship AI Models
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our latest generation of AI models designed for performance, efficiency, and versatility.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Moonshot-v1</h3>
                  <Badge>Latest</Badge>
                </div>
                
                <p className="text-muted-foreground">
                  Our most advanced language model with exceptional reasoning capabilities and multilingual support.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">200K context length</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Advanced reasoning & logic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Starting at $0.5/1M tokens</span>
                  </div>
                </div>
                
                <Button className="w-full">
                  Try Moonshot-v1
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Moonshot Vision</h3>
                  <Badge variant="secondary">Multimodal</Badge>
                </div>
                
                <p className="text-muted-foreground">
                  Powerful multimodal model that understands both text and images with high accuracy.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">High-resolution image analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">Document understanding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm">$2 per 1000 images</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Explore Vision API
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Moonshot Code</h3>
                  <Badge variant="secondary">Specialized</Badge>
                </div>
                
                <p className="text-muted-foreground">
                  Code-specialized model optimized for programming tasks, debugging, and software development.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <span className="text-sm">50+ programming languages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <span className="text-sm">Code explanation & debugging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <span className="text-sm">$0.8/1M tokens</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Try Code Model
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Build with Moonshot AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who are already building amazing applications with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Start Building Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View API Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;