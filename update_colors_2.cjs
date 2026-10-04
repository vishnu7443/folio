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
      .replace(/rgba\(10,132,255,([0-9.]+)\)/g, 'rgba(255,255,255,$1)')
      .replace(/rgba\(37,99,235,([0-9.]+)\)/g, 'rgba(255,255,255,$1)')
      .replace(/rgba\(94,92,230,([0-9.]+)\)/g, 'rgba(255,255,255,$1)')
      .replace(/rgba\(59,130,246,([0-9.]+)\)/g, 'rgba(255,255,255,$1)')
      .replace(/rgba\(199,210,254,([0-9.]+)\)/g, 'rgba(255,255,255,$1)')
      .replace(/rgba\(147,197,253,([0-9.]+)\)/g, 'rgba(255,255,255,$1)');
    if (c !== newC) fs.writeFileSync(p,newC);
  });
});
