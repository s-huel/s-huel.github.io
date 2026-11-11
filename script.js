// Klap een post open of dicht
function togglePost(button) {
  const postCard = button.closest('.post-card');
  const postBody = postCard.querySelector('.post-body');

  if (postBody.classList.contains('hidden')) {
    postBody.classList.remove('hidden');
    button.textContent = 'Inklappen';
  } else {
    postBody.classList.add('hidden');
    button.textContent = 'Lees meer';
  }
}