const para = [
  'You selected 1 out of 5',
  'You selected 2 out of 5',
  'You selected 3 out of 5',
  'You selected 4 out of 5',
  'You selected 5 out of 5',
]

document.querySelector('#submit').addEventListener('click', () => {
  const thepara = para[Math.floor(Math.random() * para.length)];

  document.getElementById('display').innerHTML = `<p>${thepara}</p>`;
})