const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.astro')) {
      results.push(file);
    }
  });
  return results;
}

const astroFiles = walk('src/pages');
astroFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  if (content.includes("from '../components/seo/Breadcrumbs';")) {
    content = content.replace(/from '\.\.\/components\/seo\/Breadcrumbs';/g, "from '../components/seo/Breadcrumbs.astro';");
    changed = true;
  }
  if (content.includes("from '../../components/seo/Breadcrumbs';")) {
    content = content.replace(/from '\.\.\/\.\.\/components\/seo\/Breadcrumbs';/g, "from '../../components/seo/Breadcrumbs.astro';");
    changed = true;
  }
  if (content.includes("from '../../../components/seo/Breadcrumbs';")) {
    content = content.replace(/from '\.\.\/\.\.\/\.\.\/components\/seo\/Breadcrumbs';/g, "from '../../../components/seo/Breadcrumbs.astro';");
    changed = true;
  }
  // Also fix Schema
  if (content.includes("from '../components/seo/Schema';")) {
    content = content.replace(/from '\.\.\/components\/seo\/Schema';/g, "from '../components/seo/Schema.astro';");
    changed = true;
  }
  if (content.includes("from '../../components/seo/Schema';")) {
    content = content.replace(/from '\.\.\/\.\.\/components\/seo\/Schema';/g, "from '../../components/seo/Schema.astro';");
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
});
