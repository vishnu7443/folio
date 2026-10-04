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
      // Replace hardcoded white opacities with black opacities (for backgrounds, borders, rings, shadows)
      .replace(/bg-white\//g, 'bg-black/')
      .replace(/border-white\//g, 'border-black/')
      .replace(/text-white\//g, 'text-black/')
      .replace(/ring-white\//g, 'ring-black/')
      .replace(/via-white\//g, 'via-black/')
      .replace(/from-white\//g, 'from-black/')
      .replace(/to-white\//g, 'to-black/')
      
      // pure white text/bg (unless it's semantic like hover:bg-primary text-background, which auto-inverts)
      .replace(/text-white(?![\/\w])/g, 'text-black')
      
      // rgb/rgba replacements for box-shadow and gradients
      .replace(/rgba\(255,\s*255,\s*255,/g, 'rgba(0,0,0,')
      .replace(/rgba\(0,\s*0,\s*0,/g, 'rgba(100,100,100,') // make dark shadows lighter for light mode
      
      // devicons/simpleicons white to black
      .replace(/\/ffffff/g, '/000000')
      
      // specific footer bg to light
      .replace(/bg-\[#060814\]/g, 'bg-[#fafafa]')
      .replace(/bg-\[#04060d\]/g, 'bg-[#f0f0f0]');

    if (c !== newC) {
      fs.writeFileSync(p, newC);
    }
  });
});
