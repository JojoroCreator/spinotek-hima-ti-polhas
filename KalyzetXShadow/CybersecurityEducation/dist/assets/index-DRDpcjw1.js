(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(){const a=document.getElementById("ddos-container");if(!a)return;a.innerHTML=`
        <div class="flex flex-col items-center w-full max-w-2xl mx-auto">
            <div class="relative w-32 h-32 mb-8 grid place-items-center">
                <div id="server-icon" class="w-20 h-20 bg-cyber-dark border-2 border-cyber-accent rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] z-10 grid place-items-center transition-all duration-300">
                    <svg class="w-10 h-10 text-cyber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                </div>
                <!-- Particles Container -->
                <div id="particles" class="absolute inset-0 pointer-events-none"></div>
            </div>

            <div class="w-full bg-slate-800 rounded-full h-4 mb-2 overflow-hidden border border-slate-700">
                <div id="load-bar" class="bg-cyber-accent h-full w-[0%] transition-all duration-300 ease-out"></div>
            </div>
            <div class="flex justify-between w-full text-xs font-mono mb-8">
                <span class="text-slate-400">SERVER LOAD</span>
                <span id="load-text" class="text-cyber-accent">0%</span>
            </div>

            <div class="flex gap-6">
                <button id="add-bot" class="px-6 py-2 bg-red-500/10 border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white transition-all rounded font-mono text-sm uppercase tracking-wider">
                    [+] ADD BOT
                </button>
                <button id="firewall" class="px-6 py-2 bg-cyber-green/10 border border-cyber-green/50 text-cyber-green hover:bg-cyber-green hover:text-black transition-all rounded font-mono text-sm uppercase tracking-wider opacity-50 cursor-not-allowed" disabled>
                    APPLY FIREWALL
                </button>
            </div>
            
            <div id="status-msg" class="mt-6 h-6 text-sm font-mono text-center"></div>
        </div>
    `;const n=document.getElementById("server-icon"),r=document.getElementById("particles"),s=document.getElementById("load-bar"),e=document.getElementById("load-text"),t=document.getElementById("add-bot"),o=document.getElementById("firewall"),i=document.getElementById("status-msg");let l=0,u=!1;t.addEventListener("click",()=>{u||(l+=10,l>100&&(l=100),p(),m(),l>=100&&c())}),o.addEventListener("click",()=>{u&&(i.innerHTML='<span class="text-cyber-green animate-pulse">DEPLOYING FIREWALL...</span>',o.disabled=!0,o.classList.add("opacity-50","cursor-not-allowed"),setTimeout(()=>{l=0,u=!1,n.classList.remove("bg-red-900/50","border-red-500","animate-pulse"),n.classList.add("bg-cyber-dark","border-cyber-accent"),r.innerHTML="",i.textContent="SYSTEM NORMALIZED",i.className="mt-6 h-6 text-sm font-mono text-center text-cyber-accent",t.disabled=!1,t.classList.remove("opacity-50","cursor-not-allowed"),p()},1500))});function p(){s.style.width=`${l}%`,e.textContent=`${l}%`,l<50?(s.className="bg-cyber-accent h-full transition-all duration-300 ease-out",e.className="text-cyber-accent"):l<90?(s.className="bg-cyber-gold h-full transition-all duration-300 ease-out",e.className="text-cyber-gold"):(s.className="bg-red-500 h-full transition-all duration-300 ease-out",e.className="text-red-500")}function m(){const d=document.createElement("div");d.className="absolute w-2 h-2 bg-red-500 rounded-full";const b=Math.random()*Math.PI*2,f=100,x=Math.cos(b)*f,v=Math.sin(b)*f;d.style.transform=`translate(${x}px, ${v}px)`,d.style.opacity="1",r.appendChild(d);const g=d.animate([{transform:`translate(${x}px, ${v}px)`,opacity:1},{transform:"translate(0, 0)",opacity:0}],{duration:500,easing:"ease-in"});g.onfinish=()=>d.remove()}function c(){u=!0,i.innerHTML='<span class="text-red-500 font-bold glitch" data-text="SYSTEM FAILURE">SYSTEM FAILURE // SERVER DOWN</span>',n.classList.remove("bg-cyber-dark","border-cyber-accent"),n.classList.add("bg-red-900/50","border-red-500","animate-pulse"),t.disabled=!0,t.classList.add("opacity-50","cursor-not-allowed"),o.disabled=!1,o.classList.remove("opacity-50","cursor-not-allowed"),o.classList.add("animate-pulse")}}function h(){const a=document.getElementById("phishing-container");if(!a)return;a.innerHTML=`
        <div class="bg-white rounded text-slate-900 font-sans max-w-xl mx-auto overflow-hidden shadow-2xl relative">
            <div class="bg-indigo-600 text-white p-3 flex justify-between items-center">
                <span class="font-bold">Urgent: Account Verification Required</span>
                <span class="text-xs opacity-75">Today, 10:23 AM</span>
            </div>
            <div class="p-6">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-full bg-slate-200 grid place-items-center font-bold text-slate-500">S</div>
                    <div>
                        <div class="font-bold text-sm">Support Team <span class="text-slate-400 font-normal">&lt;support@secure-bank-verify.com&gt;</span></div>
                        <div class="text-xs text-slate-400">To: You</div>
                    </div>
                </div>
                <p class="text-sm text-slate-700 mb-4">
                    Dear User,<br><br>
                    We detected unusual activity on your account. Please verify your identity immediately to prevent account suspension.
                </p>
                <div class="text-center py-4">
                    <a href="#" id="phish-link" class="inline-block bg-indigo-600 text-white px-6 py-2 rounded font-bold text-sm hover:bg-indigo-700 transition-colors">
                        Verify Account Now
                    </a>
                </div>
                <p class="text-xs text-slate-400 mt-4 border-t pt-4">© 2026 Secure Bank Inc.</p>
            </div>

            <!-- Overlay for Success/Fail -->
            <div id="phish-overlay" class="absolute inset-0 bg-black/90 backdrop-blur flex flex-col justify-center items-center text-center p-6 opacity-0 pointer-events-none transition-opacity duration-300">
                <div id="phish-icon" class="text-6xl mb-4"></div>
                <h3 id="phish-title" class="text-2xl font-bold mb-2"></h3>
                <p id="phish-desc" class="text-slate-300 text-sm mb-6"></p>
                <button id="phish-retry" class="px-4 py-2 border border-white/30 rounded hover:bg-white/10 transition-colors text-sm">TRY AGAIN</button>
            </div>
        </div>

        <div class="mt-8 text-center">
            <p class="text-sm font-mono text-indigo-300 mb-2">MISSION: IDENTIFY THE THREAT</p>
            <div class="inline-flex gap-4">
                <button id="mark-safe" class="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/30 rounded text-xs hover:bg-green-500/20 transition-colors">MARK AS SAFE</button>
                <button id="mark-phish" class="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded text-xs hover:bg-red-500/20 transition-colors">REPORT PHISHING</button>
            </div>
        </div>
        
        <!-- Tooltip -->
        <div id="url-tooltip" class="absolute hidden bg-black text-white text-xs px-2 py-1 rounded border border-white/20 pointer-events-none z-50 whitespace-nowrap">
            http://secure-bank-verify.com/login.php
        </div>
    `;const n=document.getElementById("phish-link"),r=document.getElementById("phish-overlay"),s=document.getElementById("phish-icon"),e=document.getElementById("phish-title"),t=document.getElementById("phish-desc"),o=document.getElementById("phish-retry"),i=document.getElementById("mark-safe"),l=document.getElementById("mark-phish"),u=document.getElementById("url-tooltip");n.addEventListener("mouseenter",c=>{u.style.display="block",p(c)}),n.addEventListener("mousemove",p),n.addEventListener("mouseleave",()=>{u.style.display="none"});function p(c){const d=a.getBoundingClientRect();u.style.left=c.clientX-d.left+10+"px",u.style.top=c.clientY-d.top+20+"px"}n.addEventListener("click",c=>{c.preventDefault(),m(!1,"DATA COMPROMISED!","You clicked a phishing link. The URL 'secure-bank-verify.com' is fake.")}),i.addEventListener("click",()=>{m(!1,"INCORRECT!","This email IS a phishing attempt. Look at the sender address and URL.")}),l.addEventListener("click",()=>{m(!0,"THREAT NEUTRALIZED","Correct! You identified the suspicious sender/link.")}),o.addEventListener("click",()=>{r.classList.add("opacity-0","pointer-events-none")});function m(c,d,b){r.classList.remove("opacity-0","pointer-events-none"),e.textContent=d,t.textContent=b,c?(s.textContent="🛡️",e.className="text-2xl font-bold mb-2 text-green-400"):(s.textContent="⚠️",e.className="text-2xl font-bold mb-2 text-red-500")}}function E(){const a=document.getElementById("sqli-container");if(!a)return;a.innerHTML=`
        <!-- Left Column: Login Form -->
        <div class="flex flex-col justify-center">
            <h3 class="text-xl font-display font-bold text-white mb-6">ADMIN LOGIN PORTAL</h3>
            <form id="sqli-form" class="space-y-4">
                <div>
                    <label class="block text-xs font-mono text-slate-400 mb-1">USERNAME</label>
                    <input type="text" id="username-input" class="w-full bg-black/30 border border-white/10 rounded p-2 text-white font-mono focus:border-cyber-gold focus:outline-none transition-colors" placeholder="admin" autocomplete="off">
                </div>
                <div>
                    <label class="block text-xs font-mono text-slate-400 mb-1">PASSWORD</label>
                    <input type="password" class="w-full bg-black/30 border border-white/10 rounded p-2 text-white font-mono focus:border-cyber-gold focus:outline-none transition-colors" placeholder="••••••" disabled>
                </div>
                <button type="submit" class="w-full bg-cyber-gold text-black font-bold py-2 rounded hover:bg-yellow-400 transition-colors uppercase tracking-widest text-sm">
                    Authenticate
                </button>
            </form>
            <div id="login-msg" class="mt-4 text-sm font-mono text-center min-h-[1.5em]"></div>
        </div>

        <!-- Right Column: Backend Visualization -->
        <div class="bg-black/80 rounded-lg p-4 font-mono text-sm border-l-4 border-cyber-gold relative overflow-hidden">
            <div class="absolute top-0 right-0 p-2 opacity-50 text-[10px]">BACKEND QUERY LOG</div>
            <div class="text-green-500 mb-2">$ connecting to database... OK</div>
            <div class="text-slate-400 mb-4">
                <span class="text-purple-400">SELECT</span> * <span class="text-purple-400">FROM</span> users 
                <br>
                <span class="text-purple-400">WHERE</span> username = '<span id="query-val" class="text-white"></span>';
            </div>
            <div id="query-result" class="text-slate-500 italic border-t border-white/10 pt-2">
                // Waiting for input...
            </div>
        </div>
    `;const n=document.getElementById("username-input"),r=document.getElementById("query-val"),s=document.getElementById("query-result"),e=document.getElementById("sqli-form"),t=document.getElementById("login-msg");n.addEventListener("input",o=>{const i=o.target.value;r.textContent=i,i.includes("'")?(r.classList.add("text-red-400"),r.classList.remove("text-white")):(r.classList.remove("text-red-400"),r.classList.add("text-white")),i.includes("' OR '1'='1")||i.includes("' OR 1=1")?(s.innerHTML='<span class="text-green-400">TRUE (Statement Always Valid)</span>',s.classList.add("animate-pulse")):(s.innerHTML='<span class="text-slate-500">// Processing...</span>',s.classList.remove("animate-pulse"))}),e.addEventListener("submit",o=>{o.preventDefault();const i=n.value;i.includes("' OR '1'='1")||i.includes("' OR 1=1")?(t.innerHTML='<span class="text-green-400">ACCESS GRANTED. WELCOME, ADMIN.</span>',s.innerHTML='<span class="text-green-400">>> Returned 1 Record (Admin)</span>',e.classList.add("opacity-50","pointer-events-none")):(t.innerHTML='<span class="text-red-500">ACCESS DENIED. Invalid Credentials.</span>',s.innerHTML='<span class="text-red-500">>> Returned 0 Records</span>',e.classList.add("animate-shake"),setTimeout(()=>e.classList.remove("animate-shake"),500))})}document.addEventListener("DOMContentLoaded",()=>{console.log("System Initialized...");const a=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.scrollY>50?(a.classList.add("bg-cyber-dark/90","backdrop-blur-md","shadow-lg"),a.classList.remove("bg-transparent","backdrop-blur-[2px]")):(a.classList.remove("bg-cyber-dark/90","backdrop-blur-md","shadow-lg"),a.classList.add("bg-transparent","backdrop-blur-[2px]"))}),y(),h(),E()});
