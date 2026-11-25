// News Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const newsArticles = document.querySelectorAll('.news-full');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter articles
      newsArticles.forEach(article => {
        if (filterValue === 'all') {
          article.style.display = 'block';
          // Add animation
          article.style.animation = 'fadeIn 0.5s ease-in';
        } else {
          const category = article.getAttribute('data-category');
          if (category === filterValue) {
            article.style.display = 'block';
            article.style.animation = 'fadeIn 0.5s ease-in';
          } else {
            article.style.display = 'none';
          }
        }
      });
    });
  });

  // Add fade-in animation
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // Set "all" as active by default
  if (filterButtons.length > 0) {
    filterButtons[0].classList.add('active');
  }
});
