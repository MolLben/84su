const profile = {
  name: 'costa',
  hostname: 'root',
  role: 'Freelance Developer',
  love: 'Coding for fun',
  email: 'csakiny@gmail.com',
  discord: {
    link: 'https://discord.com/users/1426289285551755284',
    username: '84su',
  },
  telegram: {
    link: 'https://t.me/costaffxx/',
    username: 'costaffxx',
  },
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust'],
    frontend: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Astro'],
    backend: ['Node.js', 'MongoDB', 'PostgreSQL', 'Redis'],
    tools: ['Git', 'Docker', 'VS Code', 'AWS'],
  },
};

function promptText() {
  return `${profile.name}@<span class="host">${profile.hostname}</span>:<span class="path">~</span>$`;
}

function infoHtml() {
  return `
    <div class="info-block">
      <img alt="profile" src="assets/profile.svg" width="150" height="212">
      <div><span class="accent">${profile.name}</span>@<span class="accent">${profile.hostname}</span></div>
      <div class="muted">---------------------</div>
      <div><span class="accent">Role</span>: ${profile.role}</div>
      <div><span class="accent">Love</span>: ${profile.love}</div>
      <div><span class="accent">Discord</span>: <a href="${profile.discord.link}" target="_blank" class="link">${profile.discord.username}</a></div>
      <div><span class="accent">Telegram</span>: <a href="${profile.telegram.link}" target="_blank" class="link">${profile.telegram.username}</a></div>
      <div><span class="accent">Email</span>: <a href="mailto:${profile.email}" class="link">${profile.email}</a></div>
      <div class="info-clear"></div>
    </div>
  `;
}

function skillsHtml() {
  return `
    <div class="skills-block">
      <div class="accent">Tech Stack:</div>
      <div class="muted">---------------------</div>
      <div><span class="accent">Languages</span>: <span style="color:#fff">${profile.skills.languages.join(', ')}</span></div>
      <div><span class="accent">Frontend </span>: <span style="color:#fff">${profile.skills.frontend.join(', ')}</span></div>
      <div><span class="accent">Backend  </span>: <span style="color:#fff">${profile.skills.backend.join(', ')}</span></div>
      <div><span class="accent">Tools    </span>: <span style="color:#fff">${profile.skills.tools.join(', ')}</span></div>
    </div>
  `;
}

function helpHtml() {
  return `
    <div class="help-block" style="margin:8px 0;max-width:24rem">
      <div class="help-title">Available commands:</div>
      <div class="help-grid">
        <div><span class="accent">info</span></div><div>Display profile info</div>
        <div><span class="accent">skills</span></div><div>Display tech stack</div>
        <div><span class="accent">clear</span></div><div>Clear terminal</div>
      </div>
    </div>
  `;
}
