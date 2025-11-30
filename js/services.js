const tabs = document.querySelectorAll('.service-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-target');
        document.querySelectorAll('.services-block').forEach(block => {
          if (block.id === target) block.style.display = '';
          else block.style.display = 'none';
        });
      });
    });