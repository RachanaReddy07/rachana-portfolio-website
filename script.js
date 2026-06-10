const input = document.getElementById('photo-input');
const preview = document.getElementById('photo-preview');
const placeholder = document.getElementById('placeholder-text');

input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    preview.src = ev.target.result;
    preview.style.display = 'block';
    placeholder.style.display = 'none';
  };
  reader.readAsDataURL(file);
});
