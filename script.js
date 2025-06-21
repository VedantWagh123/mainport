
    const roles = ["Web Designer", "Frontend Developer", "Creative Coder"];
    let index = 0;
    let charIndex = 0;
    const typingTarget = document.querySelector('.typing-role');

    function typeEffect() {
      if (charIndex < roles[index].length) {
        typingTarget.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(eraseEffect, 1500);
      }
    }

    function eraseEffect() {
      if (charIndex > 0) {
        typingTarget.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 60);
      } else {
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 200);
      }
    }

    document.addEventListener("DOMContentLoaded", typeEffect);

    
//  navbar


  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
  }