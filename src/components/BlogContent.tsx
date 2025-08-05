import React from 'react';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  // Enhanced content processing for better readability
  const processContent = (htmlContent: string) => {
    return htmlContent
      // Convert double line breaks to paragraph breaks
      .split('\n\n')
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0)
      .map(paragraph => {
        // Handle headers
        if (paragraph.startsWith('# ')) {
          return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">${paragraph.substring(2)}</h1>`;
        }
        if (paragraph.startsWith('## ')) {
          return `<h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4 leading-tight">${paragraph.substring(3)}</h2>`;
        }
        if (paragraph.startsWith('### ')) {
          return `<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3 leading-tight">${paragraph.substring(4)}</h3>`;
        }
        
        // Handle lists
        if (paragraph.includes('\n- ') || paragraph.includes('\n* ')) {
          const listItems = paragraph
            .split('\n')
            .filter(line => line.startsWith('- ') || line.startsWith('* '))
            .map(item => `<li class="mb-2">${item.substring(2)}</li>`)
            .join('');
          return `<ul class="list-disc pl-6 mb-6 space-y-2">${listItems}</ul>`;
        }
        
        // Handle numbered lists
        if (paragraph.includes('\n1. ')) {
          const listItems = paragraph
            .split('\n')
            .filter(line => /^\d+\. /.test(line))
            .map(item => `<li class="mb-2">${item.replace(/^\d+\. /, '')}</li>`)
            .join('');
          return `<ol class="list-decimal pl-6 mb-6 space-y-2">${listItems}</ol>`;
        }
        
        // Handle quotes
        if (paragraph.startsWith('> ')) {
          return `<blockquote class="border-l-4 border-blue-500 pl-6 py-2 mb-6 bg-blue-50 italic text-gray-700">${paragraph.substring(2)}</blockquote>`;
        }
        
        // Handle regular paragraphs
        return `<p class="mb-6 leading-relaxed text-gray-800">${paragraph.replace(/\n/g, '<br />')}</p>`;
      })
      .join('');
  };

  return (
    <div 
      className="blog-content max-w-none"
      style={{
        fontSize: '1.125rem',
        lineHeight: '1.8'
      }}
      dangerouslySetInnerHTML={{ 
        __html: processContent(content)
      }}
    />
  );
}