import assert from 'node:assert/strict';
import fs from 'node:fs';
import {prFit,dayOrder,nightOrder,dashboardScript} from './dashboard.mjs';
const html=fs.readFileSync(new URL('./public/index.html',import.meta.url),'utf8');
const report=JSON.parse(fs.readFileSync(new URL('./data/report.json',import.meta.url),'utf8'));
const posts=report.reports.flatMap(r=>r.posts);
assert.equal(prFit.length,15);
assert.equal(new Set(prFit.map(x=>x.username)).size,15);
for(const [mode,order] of [['day',dayOrder],['night',nightOrder]]){
 assert.equal(new Set(order).size,15);
 const ratings=order.map(h=>prFit.find(r=>r.username===h)[mode]);
 ratings.forEach((rating,i)=>{assert.ok(rating>=1&&rating<=5);if(i)assert.ok(rating<=ratings[i-1]);});
}
for(const r of prFit)for(const code of [r.dayCode,r.nightCode])if(code)assert.ok(posts.some(p=>p.shortcode===code),'Missing evidence '+code);
assert.equal((html.match(/<button[^>]*role="tab"/g)||[]).length,4);
assert.equal((html.match(/<div[^>]*role="tabpanel"/g)||[]).length,4);
assert.equal((html.match(/class="card fit-card"/g)||[]).length,30);
assert.equal((html.match(/<details class="plan"/g)||[]).length,4);
for(const id of ['summary','success','concepts','shoots','day-ranking','night-ranking','cases'])assert.ok(html.includes(`id="${id}"`));
assert.ok(html.includes('prefers-reduced-motion'));
assert.ok(html.includes('motion-toggle'));
assert.ok(!html.includes('undefined'));
new Function(dashboardScript.replace(/^<script>\s*/,'').replace(/<\/script>$/,''));
console.log('PASS: 4 tabs, 30 ranked cards, 4 shooting plans, all evidence links, valid script');
