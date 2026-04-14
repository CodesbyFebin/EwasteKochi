// ═══════════════════════════════════════════════════════════════════
// BLOGS DATA — Massive Authority Catalog (10,000+ Posts)
// ═══════════════════════════════════════════════════════════════════

import part1 from './blogPosts_part1.json';
import part2 from './blogPosts_part2.json';
import part3 from './blogPosts_part3.json';
import part4 from './blogPosts_part4.json';
import part5 from './blogPosts_part5.json';
import part6 from './blogPosts_part6.json';
import part7 from './blogPosts_part7.json';
import part8 from './blogPosts_part8.json';
import part9 from './blogPosts_part9.json';
import part10 from './blogPosts_part10.json';

export const blogs = [
  ...(part1 as any[]), ...(part2 as any[]), ...(part3 as any[]), ...(part4 as any[]), ...(part5 as any[]),
  ...(part6 as any[]), ...(part7 as any[]), ...(part8 as any[]), ...(part9 as any[]), ...(part10 as any[])
];

export const blogCategories = [
  { id: 'itad', name: 'Corporate ITAD Strategies' },
  { id: 'compliance', name: 'E-Waste Laws & Compliance' },
  { id: 'data', name: 'Data Destruction 101' },
  { id: 'kochi', name: 'Kochi Local Disposal Guides' },
  { id: 'recycling-tech', name: 'Electronic Recycling Technology' },
  { id: 'lifecycle', name: 'Sustainable IT Lifecycle' },
  { id: 'battery', name: 'Battery Recycling Safety' },
  { id: 'dpdp', name: 'DPDP Act 2023 for IT' },
  { id: 'precious', name: 'Precious Metal Recovery (Urban Mining)' },
  { id: 'resale', name: 'Device Buyback & Resale Tips' },
  { id: 'hazardous', name: 'Hazardous Waste Management' },
  { id: 'circular', name: 'Circular Economy in Kerala' },
  { id: 'datacenter', name: 'Data Center Decommissioning' },
  { id: 'sme', name: 'Small Business E-Waste Solutions' },
  { id: 'environment', name: 'Environmental Impact Tracking' },
  { id: 'printer', name: 'Toner & Printer Stewardship' },
  { id: 'networking', name: 'Networking Gear Retirement' },
  { id: 'mobile', name: 'Mobile & Tablet Recycling' },
  { id: 'green-it', name: 'Future of Green Computing' },
  { id: 'epr', name: 'EPR Fulfillment for Manufacturers' },
];

export const getPillarBlogs = (catId: string) => blogs.filter((b: any) => b.category === catId);
export const getBlogBySlug = (slug: string) => blogs.find((b: any) => b.slug === slug);
export const getRecentBlogs = (count = 10) => blogs.slice(0, count);