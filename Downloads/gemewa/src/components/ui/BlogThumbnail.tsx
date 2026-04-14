import React from 'react';
import { getBlogImage, getImageSchema } from '../../data/blogImages';

interface BlogThumbnailProps {
  slug: string;
  size?: 'og' | 'thumb';
  className?: string;
  priority?: boolean;
}

const BlogThumbnail: React.FC<BlogThumbnailProps> = ({ 
  slug, 
  size = 'thumb', 
  className = '',
  priority = false 
}) => {
  const image = getBlogImage(slug);
  const dimensions = image.dimensions[size].split('x');
  const width = parseInt(dimensions[0]);
  const height = parseInt(dimensions[1]);
  
  return (
    <img
      src={`/images/blog/${image.filename}`}
      alt={image.alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      className={`rounded-xl object-cover w-full h-auto ${className}`}
      onError={(e) => {
        (e.target as HTMLImageElement).src = `/images/blog/default-blog-ewaste-kochi.webp`;
      }}
    />
  );
};

interface BlogImageWithCaptionProps {
  slug: string;
  caption?: string;
  className?: string;
}

export const BlogImageWithCaption: React.FC<BlogImageWithCaptionProps> = ({ 
  slug, 
  caption,
  className = '' 
}) => {
  const image = getBlogImage(slug);
  
  return (
    <figure className={`my-6 ${className}`}>
      <BlogThumbnail slug={slug} size="og" />
      {caption && (
        <figcaption className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export const getBlogArticleSchema = (slug: string, title: string, description: string, datePublished: string, dateModified: string, author: string) => {
  const image = getBlogImage(slug);
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": `/images/blog/${image.filename}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": "EWaste Kochi",
      "url": "https://ewastekochi.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EWaste Kochi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ewastekochi.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ewastekochi.com/blog/${slug}`
    }
  };
};

export default BlogThumbnail;