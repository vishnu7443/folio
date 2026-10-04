const fs=require('fs');
const path=require('path');
const dirs = ['src/components/sections', 'src/components/ui', 'src/components/layout'];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file=>{
    if(!file.endsWith('.tsx')) return;
    const p=path.join(dir,file);
    let c=fs.readFileSync(p,'utf-8');
    let newC = c
      .replace(/bg-blue-400/g,'bg-neutral-300')
      .replace(/bg-purple-400/g,'bg-neutral-400')
      .replace(/bg-blue-500\/10/g,'bg-white/5')
      .replace(/'#0a84ff'/g,"'#ffffff'")
      .replace(/'#5e5ce6'/g,"'#e5e5e5'")
      .replace(/'#34d399'/g,"'#d4d4d4'")
      .replace(/'#38bdf8'/g,"'#a3a3a3'")
      .replace(/rgba\(10,132,255,0\.8\)/g,'rgba(255,255,255,0.4)')
      .replace(/rgba\(10,132,255,0\.9\)/g,'rgba(255,255,255,0.6)')
      .replace(/rgba\(37,99,235,0\.8\)/g,'rgba(255,255,255,0.4)');
    if (c !== newC) fs.writeFileSync(p,newC);
  });
});
