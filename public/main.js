const input = document.getElementById('input');
const form = document.getElementById('form');
const final = document.getElementById('short');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const res = await fetch('/new', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ original: input.value }),
  });
  const { short } = await res.json();

  final.textContent = `/${short}`;
  final.href = `/${short}`;
});
