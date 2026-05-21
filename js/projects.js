const articles = document.querySelectorAll('article');

const allTags = new Set();
articles.forEach(article => {
    const tags = article.getAttribute('data-tags').split(',');
    tags.forEach(tag => allTags.add(tag.trim()));
});

const filterContainer = document.getElementById('filters');
allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.classList.add('filter-btn');
    btn.textContent = tag;
    btn.setAttribute('data-tag', tag);
    btn.addEventListener('click', () => {
    btn.classList.toggle('active');
        filterProjects(tag);
    });
    filterContainer.appendChild(btn);
});

const activeTags = new Set();

const filterProjects = (tag) => {
    if (activeTags.has(tag)) {
        activeTags.delete(tag);
    } else {
        activeTags.add(tag);
    }
    const params = new URLSearchParams();
    if (activeTags.size > 0) {
        params.set('tags', [...activeTags].join(','));
    }
    history.pushState({}, '', activeTags.size > 0 ? `?${params}` : window.location.pathname);
    articles.forEach(article => {
        const articleTags = article.getAttribute('data-tags').split(',');
        const matches = activeTags.size === 0 || [...activeTags].every(t => articleTags.includes(t));
        article.style.display = matches ? 'block' : 'none';
    });
}
const params = new URLSearchParams(window.location.search);
const urlTags = params.get('tags');
if (urlTags) {
    urlTags.split(',').forEach(tag => filterProjects(tag));
}