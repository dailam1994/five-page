// Declaring global variables
let TopHomeLink;
let TopAboutLink;
let TopServicesLink;
let TopBlogLink;
let TopContactLink;

// Handling different pages
switch (document.getElementById('page-check').attributes.title.value) {
    case ('home'):
        TopHomeLink = 'index.html';
        TopAboutLink = 'pages/about.html';
        TopServicesLink = 'pages/services.html';
        TopBlogLink = 'pages/blog.html';
        TopContactLink = 'pages/contact.html';
        break;
    case ('about'):
        TopHomeLink = '../../index.html';
        TopAboutLink = 'about.html';
        TopServicesLink = 'services.html';
        TopBlogLink = 'blog.html';
        TopContactLink = 'contact.html';
        break;
    case ('services'):
        TopHomeLink = '../../index.html';
        TopAboutLink = 'about.html';
        TopServicesLink = 'services.html';
        TopBlogLink = 'blog.html';
        TopContactLink = 'contact.html';
        break;
    case ('blog'):
        TopHomeLink = '../../index.html';
        TopAboutLink = 'about.html';
        TopServicesLink = 'services.html';
        TopBlogLink = 'blog.html';
        TopContactLink = 'contact.html';
        break;
    case ('contact'):
        TopHomeLink = '../../index.html';
        TopAboutLink = 'about.html';
        TopServicesLink = 'services.html';
        TopBlogLink = 'blog.html';
        TopContactLink = 'contact.html';
        break;
    default:
        break;
}

// Writing to the document
document.write(`
    <p>07 3256 7101 | Amanda@abcOptical.com</p>
    <h1>ABC Optical</h1>
    <div id='hamburger-menu' onclick='showBurgerMenu()'>
        <p id=hm-top></p>
        <p></p>
        <p id='hm-bottom'></p>
    </div>
    <menu id='main-menu'>
        <li id='top-list'>
            <a href='${TopHomeLink}' accesskey='a'>Home</a>
        </li>
        <li>
            <a href='${TopAboutLink}' accesskey='s'>About</a>
        </li>
        <li>
            <a href='${TopServicesLink}' accesskey='d'>Services</a>
        </li>
        <li>
            <a href='${TopBlogLink}' accesskey='f'>Blog</a>
        </li>
        <li>
            <a href='${TopContactLink}' accesskey='g'>Contact</a>
        </li>
        <li id='exit' onclick='hideBurgerMenu()'>x</li>
    </menu>
`);