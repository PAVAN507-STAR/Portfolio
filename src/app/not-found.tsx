import type { Metadata } from "next";
import React from "react";
import PageHeader from "@/components/page-header";
import MarkdownRenderer from "@/components/markdown-renderer";
import config from "@/config";

const { title } = config;

export const metadata: Metadata = {
  title: `Not Found | ${title}`,
};

export default function NotFound() {
  const errorMessages = [
    "# 404 - Page Not Found",
    "The page you're looking for doesn't exist or has been moved."
  ];

  return (
    <article className="not-found">
      <section className="text-light-gray leading-relaxed">
        {errorMessages.map((item, index) => (
          <div key={`${item}-${index}`}>
            <MarkdownRenderer content={item} />
          </div>
        ))}
      </section>
    </article>
  );
}
