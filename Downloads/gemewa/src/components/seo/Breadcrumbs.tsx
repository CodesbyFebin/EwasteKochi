import React from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  hideOnHomepage?: boolean;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  hideOnHomepage = true,
  className = ""
}) => {
  // Helper: generate breadcrumbs from current URL path if no custom items provided
  const generateFromPath = (path: string): BreadcrumbItem[] => {
    const segments = path.split('/').filter(Boolean);
    const result: BreadcrumbItem[] = [{ name: 'Home', url: '/' }];
    let current = '';

    segments.forEach((segment) => {
      current += `/${segment}`;
      let name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      // Special handling for common abbreviations
      const abbreviations: Record<string, string> = {
        itad: 'ITAD',
        dpdp: 'DPDP',
        epc: 'EPC',
        kspcb: 'KSPCB',
        nist: 'NIST',
        dod: 'DoD',
      };
      if (abbreviations[segment.toLowerCase()]) {
        name = abbreviations[segment.toLowerCase()];
      }
      result.push({ name, url: current });
    });
    return result;
  };

  const breadcrumbItems = items || generateFromPath(window.location.pathname);
  const isHomepage = breadcrumbItems.length === 1 && breadcrumbItems[0].url === '/';

  // Don't render on homepage if hideOnHomepage is true
  if (hideOnHomepage && isHomepage) return null;

  // Build BreadcrumbList schema (JSON-LD)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://ewastekochi.com${item.url}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`bg-zinc-50 dark:bg-zinc-900/80 py-3 border-b border-zinc-200 dark:border-zinc-800 sticky top-[65px] md:top-[81px] z-40 ${className}`}
      >
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center text-xs md:text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              const position = index + 1;
              return (
                <li
                  key={index}
                  className="flex items-center"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  {index > 0 && (
                    <svg className="w-4 h-4 mx-1 text-zinc-400 dark:text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {isLast ? (
                    <span
                      className="text-zinc-500 dark:text-zinc-400 font-medium"
                      aria-current="page"
                      itemProp="name"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <a
                      href={item.url}
                      className="text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.name}</span>
                    </a>
                  )}
                  <meta itemProp="position" content={String(position)} />
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;