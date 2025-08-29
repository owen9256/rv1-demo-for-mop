import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Phone, Mail, MessageCircle, FileText, Bug, Lightbulb, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";

const Support = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    module: "",
    helpType: "",
    subject: "",
    description: "",
    attachments: [] as File[]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFormData(prev => ({ ...prev, attachments: [...prev.attachments, ...files] }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const uploadFiles = async (files: File[]): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    
    for (const file of files) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('support-attachments')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error(`文件 ${file.name} 上传失败`);
      }

      uploadedUrls.push(filePath);
    }

    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.module || !formData.helpType || !formData.subject || !formData.description) {
        toast({
          title: "表单验证失败",
          description: "请填写所有必填字段",
          variant: "destructive",
        });
        return;
      }

      // Upload files if any
      let attachmentUrls: string[] = [];
      if (formData.attachments.length > 0) {
        try {
          attachmentUrls = await uploadFiles(formData.attachments);
        } catch (error) {
          toast({
            title: "文件上传失败",
            description: error instanceof Error ? error.message : "文件上传时发生错误",
            variant: "destructive",
          });
          return;
        }
      }

      // Submit to database
      const { error } = await supabase
        .from('support_tickets')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          module: formData.module,
          help_type: formData.helpType,
          subject: formData.subject,
          description: formData.description,
          attachment_urls: attachmentUrls,
        });

      if (error) {
        console.error('Database error:', error);
        toast({
          title: "提交失败",
          description: "系统错误，请稍后重试或联系管理员",
          variant: "destructive",
        });
        return;
      }

      // Success
      toast({
        title: "反馈已提交",
        description: "感谢您的反馈，我们会尽快回复您。",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        module: "",
        helpType: "",
        subject: "",
        description: "",
        attachments: []
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "提交失败",
        description: "发生未知错误，请稍后重试",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">技术支持</h1>
            <p className="text-muted-foreground text-lg">
              遇到问题或需要帮助？请填写下面的表单，我们的技术团队会尽快为您提供支持。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    联系方式
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">support@moonshot.cn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">400-123-4567</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    常见问题类型
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Bug className="h-4 w-4" />
                      <span className="text-sm">Bug 报告</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      <span className="text-sm">功能建议</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">使用咨询</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>提交反馈</CardTitle>
                  <CardDescription>
                    请详细描述您遇到的问题或需要的帮助，我们会尽快回复您。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">姓名 *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="请输入您的姓名"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">邮箱 *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="请输入您的邮箱"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">电话</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="请输入您的电话号码"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">公司/组织</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="请输入您的公司或组织"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    {/* Feedback Categories */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="module">相关模块 *</Label>
                        <Select value={formData.module} onValueChange={(value) => handleInputChange("module", value)} disabled={isSubmitting}>
                          <SelectTrigger>
                            <SelectValue placeholder="选择相关的功能模块" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="api">API 接口</SelectItem>
                            <SelectItem value="model">模型服务</SelectItem>
                            <SelectItem value="console">控制台</SelectItem>
                            <SelectItem value="billing">计费相关</SelectItem>
                            <SelectItem value="auth">账户认证</SelectItem>
                            <SelectItem value="docs">文档说明</SelectItem>
                            <SelectItem value="other">其他</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="helpType">问题类型 *</Label>
                        <Select value={formData.helpType} onValueChange={(value) => handleInputChange("helpType", value)} disabled={isSubmitting}>
                          <SelectTrigger>
                            <SelectValue placeholder="选择问题类型" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bug">Bug 报告</SelectItem>
                            <SelectItem value="feature">功能建议</SelectItem>
                            <SelectItem value="usage">使用咨询</SelectItem>
                            <SelectItem value="integration">集成问题</SelectItem>
                            <SelectItem value="performance">性能问题</SelectItem>
                            <SelectItem value="billing">计费问题</SelectItem>
                            <SelectItem value="other">其他问题</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Subject and Description */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">问题标题 *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="请简要描述您的问题"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">详细描述 *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="请详细描述您遇到的问题、期望的功能或需要的帮助..."
                        className="min-h-[120px]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="attachments">上传附件</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          支持上传截图、日志文件等 (最大 10MB)
                        </p>
                        <input
                          type="file"
                          id="attachments"
                          multiple
                          accept="image/*,.pdf,.txt,.log,.json"
                          onChange={handleFileUpload}
                          className="hidden"
                          disabled={isSubmitting}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("attachments")?.click()}
                          disabled={isSubmitting}
                        >
                          选择文件
                        </Button>
                      </div>
                      
                      {/* Display uploaded files */}
                      {formData.attachments.length > 0 && (
                        <div className="space-y-2 mt-4">
                          <p className="text-sm font-medium">已上传的文件:</p>
                          <div className="flex flex-wrap gap-2">
                            {formData.attachments.map((file, index) => (
                              <Badge key={index} variant="secondary" className="px-3 py-1">
                                {file.name}
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="ml-2 text-muted-foreground hover:text-foreground"
                                  disabled={isSubmitting}
                                >
                                  ×
                                </button>
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isSubmitting ? "提交中..." : "提交反馈"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;