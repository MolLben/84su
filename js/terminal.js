const input = document.getElementById('cmd-input');
const display = document.getElementById('cmd-display');
const output = document.getElementById('output');
const content = document.getElementById('terminal-content');

document.getElementById('terminal-title').innerHTML = `${profile.name}@${profile.hostname}:~`;
document.getElementById('prompt-text').innerHTML = promptText();

const history = [];
let historyIndex = -1;

const commands = {
  help: helpHtml,
  info: infoHtml,
  skills: skillsHtml,
  clear: () => '',
};

function printPrompt(cmd) {
  output.innerHTML += `<div class="output-line">${promptText()} ${cmd}</div>`;
}

function scrollToBottom() {
  setTimeout(() => {
    content.scrollTop = content.scrollHeight;
  }, 10);
}

document.addEventListener('keydown', () => input.focus());
content.addEventListener('click', () => input.focus());

input.addEventListener('input', () => {
  display.innerText = input.value;
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const raw = input.value.trim();
    const cmd = raw.toLowerCase();

    input.value = '';
    display.innerText = '';

    if (raw) {
      history.push(raw);
      historyIndex = history.length;
      printPrompt(raw);

      if (cmd === 'clear') {
        output.innerHTML = '';
      } else if (commands[cmd]) {
        output.innerHTML += commands[cmd]();
      } else {
        output.innerHTML += `<div class="error">zsh: command not found: ${raw}</div>`;
      }
    } else {
      printPrompt('');
    }

    scrollToBottom();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
      display.innerText = input.value;
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
      display.innerText = input.value;
    } else {
      historyIndex = history.length;
      input.value = '';
      display.innerText = '';
    }
  }
});

setTimeout(() => {
  printPrompt('info');
  output.innerHTML += infoHtml();
  scrollToBottom();
}, 50);

const terminal = document.getElementById('terminal');
const header = document.getElementById('terminal-header');

let dragging = false;
let startX = 0;
let startY = 0;
let startLeft = 0;
let startTop = 0;

function onDragStart(e) {
  const target = e.target;
  if (!header.contains(target)) return;

  dragging = true;
  const point = e.touches ? e.touches[0] : e;
  startX = point.clientX;
  startY = point.clientY;

  const rect = terminal.getBoundingClientRect();
  startLeft = rect.left;
  startTop = rect.top;

  terminal.style.left = `${startLeft}px`;
  terminal.style.top = `${startTop}px`;
}

function onDragMove(e) {
  if (!dragging) return;
  e.preventDefault();

  const point = e.touches ? e.touches[0] : e;
  let left = startLeft + (point.clientX - startX);
  let top = startTop + (point.clientY - startY);

  const minTop = 28;
  const maxLeft = window.innerWidth - terminal.offsetWidth;
  const maxTop = window.innerHeight - terminal.offsetHeight;

  left = Math.max(0, Math.min(left, maxLeft));
  top = Math.max(minTop, Math.min(top, maxTop));

  terminal.style.left = `${left}px`;
  terminal.style.top = `${top}px`;
}

function onDragEnd() {
  dragging = false;
}

header.addEventListener('mousedown', onDragStart);
document.addEventListener('mousemove', onDragMove);
document.addEventListener('mouseup', onDragEnd);
header.addEventListener('touchstart', onDragStart, { passive: false });
document.addEventListener('touchmove', onDragMove, { passive: false });
document.addEventListener('touchend', onDragEnd);
