const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'test_sitemap.xml'), 'test');
console.log('Write successful');
