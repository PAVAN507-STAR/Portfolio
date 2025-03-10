import "@/styles/markdown-alert.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { rehypeGithubAlerts } from "rehype-github-alerts";

import Anchor from "@/components/markdown/anchor";
import AnchorHeader from "@/components/markdown/anchor-header";
import BlockQuote from "@/components/markdown/block-quote";
import CodeBlock from "@/components/markdown/code-block";
import MarkdownImage from "@/components/markdown/markdown-image";
import Paragraph from "@/components/markdown/paragraph";

interface MarkdownRendererProps {
  className?: string;
  content: string;
}

function MarkdownRenderer({ className, content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className={className}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeGithubAlerts]}
      components={{
        h1: AnchorHeader as any,
        h2: AnchorHeader as any,
        h3: AnchorHeader as any,
        h4: AnchorHeader as any,
        h5: AnchorHeader as any,
        h6: AnchorHeader as any,
        p: Paragraph as any,
        a: Anchor as any,
        blockquote: BlockQuote as any,
        img: MarkdownImage as any,
        code: ({ inline, className, children, ...props }: any) => {
          const match = /language-(\w+)/.exec(className || "");
          const language = match ? match[1] : "";

          return !inline ? (
            <CodeBlock language={language} {...props}>
              {String(children).replace(/\n$/, "")}
            </CodeBlock>
          ) : (
            <code className="rounded-md bg-gray-200 px-1 py-0.5 dark:bg-gray-800" {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default MarkdownRenderer;