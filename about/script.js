 window.addEventListener('DOMContentLoaded', () => {
  const skillIcons = document.querySelectorAll('.skill-icon');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  skillIcons.forEach((icon, index) => {
    observer.observe(icon);
    icon.style.transitionDelay = `${index * 0.15}s`; // staggered animation
  });
});


// exprinece

  function showTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }


  
  // swich wise flex
  
  
  function showTab(tabId) {
    // Hide all tab-content divs
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabId).classList.add('active');
  }

  // Set fixed height based on the tallest tab
  window.addEventListener('load', () => {
    const contents = document.querySelectorAll('.tab-content');
    let maxHeight = 0;

    contents.forEach(content => {
      content.style.display = 'block';
      const height = content.offsetHeight;
      if (height > maxHeight) maxHeight = height;
      content.style.display = ''; // reset
    });

    document.querySelector('.tab-contents').style.minHeight = maxHeight + 'px';
  });
 

  // exprinece animation code
  const scrollElements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // for one-time animation
      }
    });
  }, { threshold: 0.2 });

  scrollElements.forEach(el => observer.observe(el));




  window.addEventListener('DOMContentLoaded', () => {
  const scrollElements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // remove if repeat effect chahiye
      }
    });
  }, {
    threshold: 0.2
  });

  scrollElements.forEach(el => observer.observe(el));
});


// type writer for kill section 



  