const otherTabs = document.querySelectorAll('.service-tab');
otherTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    
    otherTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.getAttribute('data-target');
    document.querySelectorAll('.other-services').forEach(block => {
      if (block.id === target) block.style.display = 'block';
      else block.style.display = 'none';
    });
  });
});
