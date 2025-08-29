import { Button } from "@/components/ui/button";

const MainContent = () => {
  return (
    <div className="flex-1 bg-doc-content">
      <div className="max-w-4xl mx-auto p-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <span>文档</span>
          <span>/</span>
          <span>使用手册</span>
        </div>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold mb-8">主要概念</h1>

          <section className="mb-12">
            <h2 id="文本生成模型" className="text-2xl font-semibold mb-4 scroll-mt-8">
              文本生成模型
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Moonshot的文本生成模型（指moonshot-v1）是训练用于理解自然语言和书面语言的，它可以根据输入生成文本输出。
              对模型的输入也被称为"prompt"。通常我们建议您提供明确的指令以及给出一些范例，来让模型能够完成既定的任务，
              设计 prompt 本质上就是学会如何"训练"模型。moonshot-v1模型可以用于各种任务，包括内容或代码生成、摘要、对话、创意写作等。
            </p>
          </section>

          <section className="mb-12">
            <h2 id="语言模型推理服务" className="text-2xl font-semibold mb-4 scroll-mt-8">
              语言模型推理服务
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              语言模型推理服务是一个基于我们 (Moonshot AI) 开发和训练的预训练模型的 API 服务。
              在设计上，我们对外主要提供了一个 Chat Completions 接口，它可以用于生成文本，
              但是它本身是不支持访问网络、数据库等外部资源，也不支持执行任何代码。
            </p>
          </section>

          <section className="mb-12">
            <h2 id="Token" className="text-2xl font-semibold mb-4 scroll-mt-8">
              Token
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              文本生成模型以 Token 为基本单位来处理文本。Token 代表常见的字符序列。
              例如，单个汉字"夔"可能会被分解为若干 Token 的组合，而像"中国"这样短且常见的短语则可能会使用单个 Token。
              大致来说，对于一段通常的中文文本，1 个 Token 大约相当于 1.5-2 个汉字。
            </p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm">
                <strong>需要注意的是</strong>，对于我们的文本模型，Input 和 Output 的总和不能超过模型的最大上下文长度。
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 id="速率限制" className="text-2xl font-semibold mb-4 scroll-mt-8">
              速率限制
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              这些速率限制是如何工作的？
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              速率限制通过4种方式体现：并发、RPM（每分钟请求数）、TPM（每分钟 Token 数）、TPD（每天 Token 数）。
              速率限制可能会在存在一种或数中达到。取决于哪个先发生，例如，你可能向 ChatCompletions 发送了 20 个请求，
              每个请求只有 100 个 Token，那么你会达到了RPM限制（如果是的RPM 限制是 20），
              即使你在这些 20 个请求中没有发送 200k 个 Token（假设的TPM限制是 200k）。
            </p>
          </section>

          <div className="flex justify-between items-center pt-8 border-t">
            <Button variant="outline">上一页</Button>
            <Button>下一页</Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MainContent;