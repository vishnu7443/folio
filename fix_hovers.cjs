const fs = require('fs');
const path = require('path');
const dirs = ['src/components/sections', 'src/components/ui', 'src/components/layout'];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith('.tsx')) return;
    const p = path.join(dir, file);
    let c = fs.readFileSync(p, 'utf-8');
    
    let newC = c
      .replace(/hover:bg-white(?!\w)/g, 'hover:bg-black')
      .replace(/hover:text-white(?!\w)/g, 'hover:text-black')
      .replace(/group-hover:text-white(?!\w)/g, 'group-hover:text-black')
      .replace(/group-hover:bg-white(?!\w)/g, 'group-hover:bg-black')
      .replace(/text-white(?!\w)(?!\/)/g, 'text-black')
      .replace(/via-white(?!\w)/g, 'via-black');

    if (c !== newC) {
      fs.writeFileSync(p, newC);
    }
  });
});
