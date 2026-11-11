document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-tag');
  const posts = document.querySelectorAll('.post-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active state from all filter buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Set active state on clicked button
      button.classList.add('active');

      const selectedFilter = button.getAttribute('data-filter');

      // Show/hide post cards based on data-tags attribute
      posts.forEach(post => {
        const postTags = post.getAttribute('data-tags') ? post.getAttribute('data-tags').split(' ') : [];

        if (selectedFilter === 'all' || postTags.includes(selectedFilter)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
});