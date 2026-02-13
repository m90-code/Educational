
    const header = document.querySelector('header');
    const nav = document.querySelector('nav ul');

    header.addEventListener('mouseenter', () => {
      nav.style.display = 'flex';
    });

    header.addEventListener('mouseleave', () => {
      nav.style.display = 'none';
    });
  