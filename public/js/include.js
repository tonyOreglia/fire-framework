document.querySelectorAll('[include-html]').forEach(el => {
    fetch(el.getAttribute('include-html'))
      .then(res => res.text())
      .then(html => el.innerHTML = html);
  });