var nav = document.getElementById('navbar'),
    body = document.body;

nav.addEventListener('click', function(e) {
    body.className = body.className? '' : 'with_nav';
    e.preventDefault();
});