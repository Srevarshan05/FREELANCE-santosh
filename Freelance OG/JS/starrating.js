// Star rating hover effect
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    stars.forEach((s, i) => {
      s.style.color = i <= index ? '#ffb400' : '#ccc';
    });
  });
  star.addEventListener('mouseout', () => {
    stars.forEach((s) => {
      if (!s.previousElementSibling.checked) {
        s.style.color = '#ccc';
      }
    });
  });
});
