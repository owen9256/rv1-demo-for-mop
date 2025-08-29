const tocItems = [
  "文本生成模型",
  "语言模型推理服务", 
  "Token",
  "速率限制",
  "处理响应"
];

const TableOfContents = () => {
  return (
    <div className="w-64 bg-doc-toc border-l h-full p-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-sm">目录</h3>
        <nav className="space-y-2">
          {tocItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;