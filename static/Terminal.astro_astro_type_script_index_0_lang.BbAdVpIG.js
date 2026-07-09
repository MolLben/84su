const t={name:"hieuxyz",role:"Freelance Developer",love:"Coding for fun",discord:{link:"https://discord.com/users/hieuxyz",username:"hieuxyz"},github:{link:"https://github.com/hieuxyz00",username:"hieuxyz00"},email:"khongbt446@gmail.com",skills:{languages:["JavaScript","TypeScript","Python","C/C++","C#","Go","Rust","Java","Kotlin","ASM","Lua","SQL"],frontend:["React","Vue.js","Next.js","Tailwind CSS","Astro","Svelte"],backend:["Node.js","MongoDB","MySQL","PostgreSQL","Redis"],tools:["Git","Docker","VS Code","AWS","Figma"]}},s=document.getElementById("cmd-input"),r=document.getElementById("cmd-display"),p=document.getElementById("output"),u=document.getElementById("terminal-content");let d=[],l=-1;const L=`
        <div class="my-2">
            <img alt="pfp" src="/assets/profile.png" width="150" height="212" fetchpriority="high" class="float-left w-[120px] sm:w-[150px] h-[170px] sm:h-[212px] object-cover rounded-[10%] mr-4 mb-2 border border-gray-600 shadow-md">
            <div><span class="text-[#7fa4ea] font-bold">${t.name}</span>@<span class="text-[#7fa4ea] font-bold">fun</span></div>
            <div class="text-gray-500">---------------------</div>
            <div><span class="text-[#7fa4ea]">Role</span>: ${t.role}</div>
            <div><span class="text-[#7fa4ea]">Love</span>: ${t.love}</div>
            <div><span class="text-[#7fa4ea]">Discord</span>: <a href="${t.discord.link}" target="_blank" class="hover:underline text-white">${t.discord.username}</a></div>
            <div><span class="text-[#7fa4ea]">Github</span>: <a href="${t.github.link}" target="_blank" class="hover:underline text-white">${t.github.username}</a></div>
            <div><span class="text-[#7fa4ea]">Email</span>: <a href="mailto:${t.email}" class="hover:underline text-white">${t.email}</a></div>
            <div style="padding-bottom:10px; clear: both;"></div>
        </div>
    `,H=`
        <div class="my-2 leading-relaxed">
            <div class="text-[#7fa4ea] font-bold">Tech Stack:</div>
            <div class="text-gray-500">---------------------</div>
            <div><span class="text-[#7fa4ea]">Languages</span>: <span class="text-white">${t.skills.languages.join(", ")}</span></div>
            <div><span class="text-[#7fa4ea]">Frontend </span>: <span class="text-white">${t.skills.frontend.join(", ")}</span></div>
            <div><span class="text-[#7fa4ea]">Backend  </span>: <span class="text-white">${t.skills.backend.join(", ")}</span></div>
            <div><span class="text-[#7fa4ea]">Tools    </span>: <span class="text-white">${t.skills.tools.join(", ")}</span></div>
        </div>
    `,k={help:()=>`
            <div class="my-2 max-w-sm">
                <div class="text-yellow-400 mb-1">Available commands:</div>
                <div class="grid grid-cols-[80px_1fr] gap-x-2">
                    <div><span class="text-[#7fa4ea]">info</span></div><div class="text-gray-300">Display profile info</div>
                    <div><span class="text-[#7fa4ea]">skills</span></div><div class="text-gray-300">Display tech stack</div>
                    <div><span class="text-[#7fa4ea]">clear</span></div><div class="text-gray-300">Clear terminal</div>
                </div>
            </div>
        `,info:()=>L,skills:()=>H,clear:()=>""};function m(e){p.innerHTML+=`<div><span class="text-white">hieuxyz@<span class="text-[#b8d5ef]">fun</span>:<span class="text-blue-500">~</span>$</span> ${e}</div>`}document.addEventListener("keydown",()=>s.focus());u.addEventListener("click",()=>s.focus());s.addEventListener("input",()=>{r.innerText=s.value});s.addEventListener("keydown",e=>{if(e.key==="Enter"){const n=s.value.trim(),o=n.toLowerCase();s.value="",r.innerText="",n?(d.push(n),l=d.length,m(n),o==="clear"?p.innerHTML="":k[o]?p.innerHTML+=k[o]():p.innerHTML+=`<div class="text-red-400 mb-2 mt-1">zsh: command not found: ${n}</div>`):m(""),setTimeout(()=>{u.scrollTop=u.scrollHeight},10)}else e.key==="ArrowUp"?(e.preventDefault(),l>0&&(l--,s.value=d[l],r.innerText=s.value)):e.key==="ArrowDown"&&(e.preventDefault(),l<d.length-1?(l++,s.value=d[l],r.innerText=s.value):(l=d.length,s.value="",r.innerText=""))});setTimeout(()=>{m("info"),p.innerHTML+=L,u.scrollTop=u.scrollHeight},50);const a=document.getElementById("terminal"),v=document.getElementById("terminal-header");let x=!1,b,T,f,h;function $(e){if(e.target!==v&&!v.contains(e.target))return;x=!0;const n=e.type.includes("mouse")?e.clientX:e.touches[0].clientX,o=e.type.includes("mouse")?e.clientY:e.touches[0].clientY;b=n,T=o;const i=a.getBoundingClientRect();f=i.left,h=i.top,a.style.left=`${f}px`,a.style.top=`${h}px`,a.style.bottom="auto",a.style.right="auto"}function E(e){if(!x)return;e.preventDefault();const n=e.type.includes("mouse")?e.clientX:e.touches[0].clientX,o=e.type.includes("mouse")?e.clientY:e.touches[0].clientY;let i=f+(n-b),c=h+(o-T);const g=28,y=window.innerWidth-a.offsetWidth,w=window.innerHeight-a.offsetHeight;i<0&&(i=0),i>y&&(i=y),c<g&&(c=g),c>w&&(c=w),a.style.left=`${i}px`,a.style.top=`${c}px`}function D(){x=!1}v.addEventListener("mousedown",$);document.addEventListener("mousemove",E);document.addEventListener("mouseup",D);v.addEventListener("touchstart",$,{passive:!1});document.addEventListener("touchmove",E,{passive:!1});document.addEventListener("touchend",D);
