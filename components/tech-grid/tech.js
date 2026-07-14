document.querySelectorAll('.tech-grid-component').forEach((component) => {
  const filters = component.querySelectorAll('.tech-filter');
  const cards = component.querySelectorAll('.tech-card');
  filters.forEach((filter) => filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    filters.forEach((item) => item.classList.toggle('is-active', item === filter));
    cards.forEach((card) => card.classList.toggle('is-hidden', category !== 'all' && card.dataset.category !== category));
  }));
});
