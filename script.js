let articles = document.querySelectorAll('main div article');
let navLists = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    articles.forEach(article => {
        let top = window.scrollY;
        let offset = article.offsetTop - 60;
        let height = article.offsetHeight;
        let id = article.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLists.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav ul li a[href='#${id}']`).classList.add('active');
        }
    });
};