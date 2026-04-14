// src/data/megaContent.ts
import part1 from './megaContent_part1.json';
import part2 from './megaContent_part2.json';
import part3 from './megaContent_part3.json';
import part4 from './megaContent_part4.json';
import part5 from './megaContent_part5.json';
import part6 from './megaContent_part6.json';
import part7 from './megaContent_part7.json';
import part8 from './megaContent_part8.json';
import part9 from './megaContent_part9.json';
import part10 from './megaContent_part10.json';
import part11 from './megaContent_part11.json';
import part12 from './megaContent_part12.json';
import serviceMega from './megaContent_services.json';

export const megaContent = {
  ...part1, ...part2, ...part3, ...part4, ...part5,
  ...part6, ...part7, ...part8, ...part9, ...part10,
  ...part11, ...part12, ...serviceMega
};

export const getContentBySlug = (slug: string) => megaContent[slug] || null;
