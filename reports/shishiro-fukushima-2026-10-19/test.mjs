import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {meta,store,accounts,posts,supportPosts,orders,axes,coverage} from './data.mjs';
import {plans} from './plans.mjs';
import {dashboardRuntime} from './shell.mjs';
const html=await readFile(new URL('./public/index.html',import.meta.url),'utf8');
const all=[...posts,...supportPosts];
assert.equal(accounts.length,4);assert.equal(new Set(accounts.map(a=>a.handle)).size,4);
assert.equal(posts.length,10);assert.equal(new Set(posts.map(p=>p.code)).size,10);
assert.equal(posts.filter(p=>p.meal==='昼').length,2);assert.equal(posts.filter(p=>p.views>=100000).length,8);
assert.equal(coverage.detailIds.length,14);assert.equal(new Set(coverage.detailIds).size,14);
assert.equal(Object.values(coverage.profileCounts).reduce((a,b)=>a+b,0),48);
assert.equal(Object.values(coverage.reelCounts).reduce((a,b)=>a+b,0),60);
assert.equal(coverage.fullVideoCount,0);
for(const p of all){assert.ok(coverage.detailIds.includes(p.code));assert.equal(p.fullVideoObserved,false);assert.ok(p.url.endsWith('/'+p.code+'/'));}
for(const [mode,order] of Object.entries(orders)){
 assert.equal(new Set(order).size,4);const ratings=order.map(h=>accounts.find(a=>a.handle===h)[mode].score);
 const valid=ratings.filter(v=>v!==null);valid.forEach((v,i)=>{assert.ok(v>=1&&v<=5);if(i)assert.ok(v<=valid[i-1]);});
 assert.equal(ratings.filter(v=>v===null).length,mode==='day'?2:0);
}
for(const a of accounts){for(const id of a.evidence)assert.ok(all.some(p=>p.code===id));for(const mode of ['day','night']){assert.equal(a[mode].axes.length,4);assert.ok(a[mode].rankReason.length>30);assert.ok(a[mode].ask);}}
assert.equal(axes.length,4);assert.equal(plans.length,4);assert.equal(plans.filter(p=>p.meal==='day').length,1);
for(const p of plans){assert.equal(p.shots.length,7);for(const id of p.refs)assert.ok(all.some(x=>x.code===id));assert.ok(html.includes('id="shot-'+p.id+'"'));}
assert.equal(supportPosts.find(p=>p.code==='DegmE-fyEMk').comments,null);
assert.ok(!html.includes('undefined'));assert.ok(!html.includes('NaN'));
assert.equal((html.match(/<button[^>]*role="tab"/g)||[]).length,4);assert.equal((html.match(/<div[^>]*role="tabpanel"/g)||[]).length,4);
assert.equal((html.match(/data-example=/g)||[]).length,10);assert.equal((html.match(/data-fit=/g)||[]).length,8);assert.equal((html.match(/data-axis/g)||[]).length,32);
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);
for(const [,hash] of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(hash),'Missing anchor '+hash);
assert.equal(store.phone,'06-6940-7727');assert.equal(meta.period,null);assert.equal(meta.priceFilter,null);
new Function(dashboardRuntime);
const tabIds=['overview','day','night','examples'];
const tabs=tabIds.map(id=>({dataset:{tab:id},attrs:{},handlers:{},setAttribute(k,v){this.attrs[k]=v},addEventListener(k,f){this.handlers[k]=f},focus(){this.focused=true}}));
const panels=tabIds.map(id=>({id:'panel-'+id,hidden:false}));const events={},classes=new Set();
const button={attrs:{},handlers:{},setAttribute(k,v){this.attrs[k]=v},addEventListener(k,f){this.handlers[k]=f}};
const media={matches:false,addEventListener(k,f){this.handler=f}};
const target={getAttribute:()=>null,closest(s){return s==='details'?this:panels[0]},scrollIntoView(){this.scrolled=true}};
const doc={hidden:false,body:{classList:{add:c=>classes.add(c),toggle(c,b){if(b)classes.add(c);else classes.delete(c)}}},querySelectorAll:s=>s==='[role="tab"]'?tabs:panels,querySelector:s=>s==='.motion-toggle'?button:{scrollIntoView(){}},getElementById:id=>id==='shot-lunch-main'?target:null,addEventListener(k,f){this[k]=f}};
const location={hash:'#night'};
vm.runInNewContext(dashboardRuntime,{document:doc,location,history:{pushState(a,b,h){location.hash=h}},window:{addEventListener(k,f){events[k]=f}},matchMedia:()=>media,requestAnimationFrame:f=>f()});
assert.equal(panels.filter(p=>!p.hidden)[0].id,'panel-night');tabs[1].handlers.click();assert.equal(location.hash,'#day');
tabs[1].handlers.keydown({key:'End',preventDefault(){}});assert.equal(location.hash,'#examples');assert.ok(tabs[3].focused);
location.hash='#shot-lunch-main';events.hashchange();assert.ok(target.open&&target.scrolled);assert.equal(panels.filter(p=>!p.hidden)[0].id,'panel-overview');
button.handlers.click();assert.ok(classes.has('motion-paused'));button.handlers.click();assert.ok(!classes.has('motion-paused'));media.matches=true;media.handler();assert.ok(button.disabled&&classes.has('motion-paused'));
doc.hidden=true;doc.visibilitychange();assert.ok(classes.has('motion-hidden'));
console.log('PASS: 4 tabs / 4 accounts × day-night / 32 rationale axes / 10 unique cases (2 day, 8 night; 8 over 100k) / 4 plans / null preservation / anchors / keyboard / motion');
