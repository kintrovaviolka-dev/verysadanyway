// Čisté funkce: hodnotitel krátkých odpovědí nikdy nehodnotí dávky v kazuistikách.
export const normalizeRecall = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[.,;:!?]+$/,'').replace(/[-–—]/g,' ').replace(/\s+/g,' ');
export function shuffle(items, random = Math.random) {
  const result = [...items];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}
function oneTypo(a,b) {
  if(Math.abs(a.length-b.length)>1)return false;
  if(a.length===b.length){const d=[];for(let i=0;i<a.length;i++)if(a[i]!==b[i])d.push(i);return d.length===1 || (d.length===2 && d[1]===d[0]+1 && a[d[0]]===b[d[1]] && a[d[1]]===b[d[0]]);}
  const [short,long]=a.length<b.length?[a,b]:[b,a];
  let i=0;while(i<short.length&&short[i]===long[i])i++;
  return short.slice(i)===long.slice(i+1);
}
const confusables = new Set(['hypokalemie','hyperkalemie','hypokalcemie','hyperkalcemie','hypotenze','hypertenze','hypoxie','hyperoxie','hypokapnie','hyperkapnie','acidoza','alkaloza','adrenalin','noradrenalin','epinefrin','norepinefrin','spinalni','epiduralni'].map(normalizeRecall));
export function matchShort(input,item) {
  const value=normalizeRecall(input), accepted=item.accepted.map(normalizeRecall);
  if(!value)return {correct:false,kind:'empty'};
  if(accepted.includes(value))return {correct:true,kind:'exact'};
  if(item.strict || /\d/.test(value) || confusables.has(value))return {correct:false,kind:'unknown'};
  const match=accepted.find(a=>a.length>=5&&value.length>=5&&!/\d/.test(a)&&a.split(' ').length===value.split(' ').length&&oneTypo(a,value));
  return match ? {correct:true,kind:'typo',matched:match} : {correct:false,kind:'unknown'};
}
export function makeDeck(bank,{type='mixed',topic='',group='',limit=10}={},random=Math.random){
  const pool=bank.filter(q=>(type==='mixed'||q.type===type)&&(!topic||q.topics.includes(topic))&&(!group||q.topics.some(t=>t.startsWith(group))));
  return shuffle(pool,random).slice(0,limit).map(q=>({...q,...(q.type==='choice'?{options:shuffle(q.options,random)}:{})}));
}
