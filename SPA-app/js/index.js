const routes = {
    "/": "/SPA-app/pages/home.html",
    "/about": "/SPA-app/pages/about.html",
    "/contact": "/SPA-app/pages/contact.html",
    404: "/SPA-app/pages/404.html",
}

function route(event) {
    event = event || window.event;

    event.preventDefault();

    window.history.pushState({}, "", event.target.href)

    handle();
}

function handle() {
    const { pathname } = window.location;
    const route = routes[pathname] || routes[404];

    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#app').innerHTML = html;
    });
    
    console.log(route);
}

handle();

window.onpopstate = () => handle();
window.route = () => route();