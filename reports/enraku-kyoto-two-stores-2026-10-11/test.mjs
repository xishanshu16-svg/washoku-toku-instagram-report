import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {meta,stores,accounts,posts,nightOrder,day} from './data.mjs';
import {plans} from './plans.mjs';
import {coverage} from './coverage.mjs';
import {dashboardRuntime} from './shell.mjs';
const html=await readFile(new URL('./public/index.html',import.meta.url),'utf8');
assert.equal(accounts.length,10);assert.equal(new Set(accounts.map(a=>a.handle)).size,10);
assert.equal(stores.length,2);assert.equal(posts.length,14);
assert.equal(posts.filter(p=>p.views>=100000).length,8);
assert.equal(coverage.detailPages.length,20);assert.equal(new Set(coverage.detailPages).size,20);
assert.equal(coverage.accounts.reduce((n,a)=>n+a.profileCaptions,0),120);
assert.equal(coverage.accounts.reduce((n,a)=>n+a.reelGridItems,0),150);
assert.equal(coverage.fullVideoCount,0);
for(const p of posts){assert.ok(coverage.detailPages.includes(p.code));assert.equal(p.budget,null);assert.equal(p.fullVideoObserved,false);assert.ok(p.url.endsWith(p.code+'/'));}
assert.equal(posts.find(p=>p.code==='DdgS5okqr0T').comments,null);
for(const s of stores){
 assert.equal(s.examples.length,10);assert.equal(new Set(s.examples).size,10);
 assert.equal(s.examples.map(id=>posts.find(p=>p.code===id)).filter(p=>p.views>=100000).length,6);
 assert.equal(nightOrder[s.id].length,10);assert.equal(new Set(nightOrder[s.id]).size,10);
 const ratings=nightOrder[s.id].map(h=>accounts.find(a=>a.handle===h).fit[s.id].night);
 assert.equal(ratings.filter(r=>r===null).length,1);
 ratings.filter(r=>r!==null).forEach((r,i,all)=>{assert.ok(r>=1&&r<=5);if(i)assert.ok(r<=all[i-1]);});
 assert.ok(day[s.id].state.includes('保留'));assert.equal(plans.filter(p=>p.store===s.id).length,3);
}
assert.equal(stores[0].examples.filter(id=>stores[1].examples.includes(id)).length,6);
for(const a of accounts)for(const id of a.evidence)assert.ok(posts.some(p=>p.code===id));
for(const p of plans){for(const id of p.refs)assert.ok(posts.some(x=>x.code===id));assert.equal(p.shots.length,7);assert.ok(html.includes('id="shot-'+p.id+'"'));}
assert.equal((html.match(/<button[^>]*role="tab"/g)||[]).length,7);assert.equal((html.match(/<div[^>]*role="tabpanel"/g)||[]).length,7);
assert.equal((html.match(/data-example=/g)||[]).length,20);assert.equal((html.match(/data-day-account=/g)||[]).length,20);
assert.equal((html.match(/data-account=/g)||[]).length,20);
assert.ok(!html.includes('undefined'));assert.ok(!html.includes('NaN'));assert.ok(html.includes('コメント 取得不可'));
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'Duplicate IDs');
for(const [,hash] of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(hash)||['gion-night','yasaka-night'].includes(hash),'Missing anchor '+hash);
new Function(dashboardRuntime);

// 実DOMの操作は別途ブラウザー確認。ここではURL・キーボード・モーションの状態遷移を検証。
const tabIds=['overview','gion-day','gion-night','gion-examples','yasaka-day','yasaka-night','yasaka-examples'];
const tabs=tabIds.map(id=>({dataset:{tab:id},attrs:{},handlers:{},setAttribute(k,v){this.attrs[k]=v},addEventListener(k,f){this.handlers[k]=f},focus(){this.focused=true}}));
const panels=tabIds.map(id=>({id:'panel-'+id,hidden:false}));
const button={attrs:{},handlers:{},setAttribute(k,v){this.attrs[k]=v},addEventListener(k,f){this.handlers[k]=f}};
const classes=new Set();const body={classList:{add:c=>classes.add(c),toggle(c,b){if(b)classes.add(c);else classes.delete(c)}}};
const toolbar={scrollIntoView(){}};const events={};const media={matches:false,addEventListener(k,f){this.handler=f}};
const shoot={getAttribute:()=>null,closest(sel){if(sel==='details')return this;return panels[0]},scrollIntoView(){this.scrolled=true}};
const doc={hidden:false,body,querySelectorAll:s=>s==='[role="tab"]'?tabs:panels,querySelector:s=>s==='.motion-toggle'?button:toolbar,getElementById:id=>id==='shot-gion-oden'?shoot:null,addEventListener(k,f){this[k]=f}};
const location={hash:'#yasaka-examples'};
vm.runInNewContext(dashboardRuntime,{document:doc,location,history:{pushState(a,b,hash){location.hash=hash}},window:{addEventListener(k,f){events[k]=f}},matchMedia:()=>media,requestAnimationFrame:f=>f()});
assert.equal(panels.filter(p=>!p.hidden)[0].id,'panel-yasaka-examples');
tabs[1].handlers.click();assert.equal(location.hash,'#gion-day');
tabs[1].handlers.keydown({key:'End',preventDefault(){}});assert.equal(location.hash,'#yasaka-examples');assert.ok(tabs[6].focused);
location.hash='#shot-gion-oden';events.hashchange();assert.equal(panels.filter(p=>!p.hidden)[0].id,'panel-overview');assert.ok(shoot.open&&shoot.scrolled);
button.handlers.click();assert.ok(classes.has('motion-paused'));button.handlers.click();assert.ok(!classes.has('motion-paused'));
media.matches=true;media.handler();assert.ok(classes.has('motion-paused'));assert.ok(button.disabled);
doc.hidden=true;doc.visibilitychange();assert.ok(classes.has('motion-hidden'));
assert.equal(meta.priceFilter,null);assert.equal(meta.period,null);
console.log('PASS: 7 tabs / 10 accounts × 2 stores / 20 cards (14 unique, 8 over 100k) / 6 plans / null preservation / anchors / keyboard / reduced motion');
