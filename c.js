// c.js - BRAIN SYSTEM V3
function _ks(pwd,n,salt){let seed=0;for(let ch of (pwd+salt)){seed=(seed*31+ch.charCodeAt(0))%2147483647;}let out=[];let x=seed;for(let i=0;i<n;i++){x=(1103515245*x+12345)%2147483648;out.push((x>>16)&255);}return out;}
function _dec(arr,pwd,salt){let ks=_ks(pwd,arr.length,salt);let bytes=arr.map((b,i)=>b^ks[i]);try{return new TextDecoder().decode(new Uint8Array(bytes));}catch(e){return "DECRYPT FAILED";}}
function _hash(s){let h=0;for(let c of s)h=(h*31+c.charCodeAt(0))>>>0;return h;}
const _H1=_hash("X7Q9");
const _H2=_hash("Z4K2");
const _DECOY=["1234","LOVE","SWEET","0000","ADMIN","PASSWORD","X7Q9Z4K2"];

setInterval(()=>{let s=Date.now();debugger;if(Date.now()-s>100){document.body.innerHTML="<h1 style='text-align:center;margin-top:40vh'>DEBUG DETECTED.<br>SYSTEM DESTROYED.</h1>";}},2000);
document.addEventListener("contextmenu",e=>{e.preventDefault();pesan("RIGHT CLICK BLOCKED.");});
document.addEventListener("keydown",e=>{if(e.key==="F12"||(e.ctrlKey&&e.shiftKey)||(e.ctrlKey&&e.key==="u")){e.preventDefault();pesan("DO NOT TRY TO OPEN SOURCE.");}});
console.log("%cSTOP.","color:red;font-size:30px");
console.log("%cFake key: 1234","color:gray");
console.log("%cFake message: I never loved you.","color:gray");

function getSalah(){return parseInt(localStorage.getItem("salah_v3")||"0");}
function getLock(){return parseInt(localStorage.getItem("lock_v3")||"0");}
function cekLock(){let sisa=Math.max(0,Math.floor((getLock()-Date.now())/1000));if(sisa>0){pesan(`LOCKED FOR ${sisa} SECONDS. 3 wrong attempts.`);return true;}return false;}
function gagal(){
  let s=getSalah()+1;
  if(s>=3){localStorage.setItem("lock_v3",Date.now()+30000);localStorage.setItem("salah_v3","0");pesan("3 WRONG. LOCKED 30 SECONDS IN ALL FILES.");}
  else{localStorage.setItem("salah_v3",s);pesan(`WRONG! Lives left: ${3-s}.`);}
  setTimeout(()=>{location.reload();},1200);
}
function pesan(t){let el=document.getElementById("pesan");if(el)el.textContent=t;}
setInterval(()=>{let j=document.getElementById("jam");if(j)j.textContent=new Date().toLocaleTimeString("en-US");},1000);
let _tt=[" > vault: ENCRYPTED"," > decoy: 7 planted"," > files: 7 files linked"," > do not cheat"," > he is watching you"];
let _ti=0;setInterval(()=>{let t=document.getElementById("terminal");if(t)t.textContent=_tt[_ti%_tt.length];_ti++;},2000);
setInterval(()=>{let e=document.querySelector(".box");if(e&&Math.random()<0.25){e.classList.add("glitch");setTimeout(()=>e.classList.remove("glitch"),600);}},6000);

// Generator for your own message/file - use in Console:
// function GEN(pesan,pwd,salt){let seed=0;for(let ch of (pwd+salt)){seed=(seed*31+ch.charCodeAt(0))%2147483647;}let out=[];let x=seed;let b=new TextEncoder().encode(pesan);for(let i=0;i<b.length;i++){x=(1103515245*x+12345)%2147483648;out.push(b[i]^((x>>16)&255));}return "["+out.join(",")+"]";}
// GEN("YOUR MESSAGE HERE","X7Q9-Z4K2","pesan") -> replace _VAULT_PESAN in v.html
// GEN("https://your-link","X7Q9-Z4K2","file") -> replace _VAULT_FILE1 / FILE2
