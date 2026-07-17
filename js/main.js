// Mobile menu
const hbg=document.getElementById('hbg'),mob=document.getElementById('mob'),mc=document.getElementById('mobClose');
if(hbg)hbg.addEventListener('click',()=>mob.classList.add('open'));
if(mc)mc.addEventListener('click',()=>mob.classList.remove('open'));
function closeMob(){if(mob)mob.classList.remove('open')}

// Scroll reveal
const io=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('on')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv,.rvl,.rvr').forEach(el=>io.observe(el));

// Counter
let counted=false;
const sb=document.getElementById('statsBar');
if(sb){const cio=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!counted){counted=true;document.querySelectorAll('[data-t]').forEach(el=>{const t=+el.dataset.t,s=Math.max(1,Math.ceil(t/50));let c=0;const iv=setInterval(()=>{c+=s;if(c>=t){c=t;clearInterval(iv)}el.textContent=c},35)})}},{threshold:.5});cio.observe(sb)}

// Hero zoom
const hb=document.getElementById('heroBg');if(hb)setTimeout(()=>hb.style.transform='scale(1)',100);

// Form submit
function submitForm(e){e.preventDefault();const b=e.target.querySelector('[type=submit]');if(!b)return;const o=b.textContent;b.textContent='Thank You — We\'ll Reply Within 24h';b.style.background='#2E7D32';setTimeout(()=>{b.textContent=o;b.style.background='';e.target.reset()},3000)}

// PDF download mock
function downloadCatalogue(){alert('Catalogue download coming soon. Please contact us directly for the latest product catalogue.')}
