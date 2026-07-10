// Loader
window.addEventListener('load',()=>{const l=document.getElementById('loader');if(l)setTimeout(()=>l.classList.add('out'),400)});

// Hero zoom
const heroImg=document.getElementById('heroImg');if(heroImg)setTimeout(()=>heroImg.classList.add('zoom'),100);

// Mobile menu
const hbg=document.getElementById('hbg'),mob=document.getElementById('mob'),mobClose=document.getElementById('mobClose');
if(hbg)hbg.addEventListener('click',()=>mob.classList.add('open'));
if(mobClose)mobClose.addEventListener('click',()=>mob.classList.remove('open'));
function closeMob(){if(mob)mob.classList.remove('open')}

// Reveal
const io=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('on')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv,.rvl,.rvr').forEach(el=>io.observe(el));

// Counter
let counted=false;
const sb=document.getElementById('statsBar');
if(sb){const cio=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!counted){counted=true;document.querySelectorAll('[data-t]').forEach(el=>{const t=+el.dataset.t,s=Math.max(1,Math.ceil(t/50));let c=0;const iv=setInterval(()=>{c+=s;if(c>=t){c=t;clearInterval(iv)}el.textContent=c},35)})}},{threshold:.5});cio.observe(sb)}

// Form
function submitForm(e){e.preventDefault();const b=e.target.querySelector('.btn-submit');if(!b)return;const o=b.textContent;b.textContent="Thank You — We'll Reply Within 24h";b.style.background='#2E7D32';setTimeout(()=>{b.textContent=o;b.style.background='';e.target.reset()},3000)}
