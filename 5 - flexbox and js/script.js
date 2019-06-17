const panels = document.querySelectorAll('.panel')
panels.forEach(el => el.addEventListener('click', () => el.classList.toggle('open')))