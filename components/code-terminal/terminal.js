const terminalReplies = {
  help: 'Commands: help, skills, about, contact, clear',
  skills: 'Languages: JavaScript, Python, C++\nTools: Git, Docker, Figma\nDatabases: MySQL, MongoDB',
  about: 'A curious developer who turns ideas into friendly, useful web experiences.',
  contact: 'hello@example.com · github.com/your-handle'
};

document.querySelectorAll('.terminal-component').forEach((terminal, index) => {
  const log = terminal.querySelector('.terminal-log');
  const form = terminal.querySelector('.terminal-input');
  const input = terminal.querySelector('input');
  const label = terminal.querySelector('label');
  if (index) { log.removeAttribute('id'); input.removeAttribute('id'); }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const command = input.value.trim().toLowerCase();
    if (!command) return;
    const line = document.createElement('p'); line.textContent = `${label.textContent} ${command}`; log.append(line);
    if (command === 'clear') { log.replaceChildren(); input.value = ''; return; }
    const reply = document.createElement('p'); reply.textContent = terminalReplies[command] || `Command not found: ${command}. Type help for options.`; log.append(reply);
    input.value = ''; log.scrollTop = log.scrollHeight;
  });
});
