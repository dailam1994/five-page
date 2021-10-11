// Declaring global variables
let BottomHomeLink;
let BottomAboutLink;
let BottomServicesLink;
let BottomBlogLink;
let BottomContactLink;

// Handling different pages
switch (document.getElementById('page-check').attributes.title.value) {
    case ('home'):
        BottomHomeLink = 'index.html';
        BottomAboutLink = 'pages/about.html';
        BottomServicesLink = 'pages/services.html';
        BottomBlogLink = 'pages/blog.html';
        BottomContactLink = 'pages/contact.html';
        break;
    case ('about'):
        BottomHomeLink = '../index.html';
        BottomAboutLink = 'about.html';
        BottomServicesLink = 'services.html';
        BottomBlogLink = 'blog.html';
        BottomContactLink = 'contact.html';
        break;

    case ('services'):
        BottomHomeLink = '../index.html';
        BottomAboutLink = 'about.html';
        BottomServicesLink = 'services.html';
        BottomBlogLink = 'blog.html';
        BottomContactLink = 'contact.html';
        break;
    case ('blog'):
        BottomHomeLink = '../index.html';
        BottomAboutLink = 'about.html';
        BottomServicesLink = 'services.html';
        BottomBlogLink = 'blog.html';
        BottomContactLink = 'contact.html';
        break;
    case ('contact'):
        BottomHomeLink = '../index.html';
        BottomAboutLink = 'about.html';
        BottomServicesLink = 'services.html';
        BottomBlogLink = 'blog.html';
        BottomContactLink = 'contact.html';
        break;
    default:
        break;
}

// Writing to the document
document.write(`
    <div id='links'>
    <div id='rel-links'>
        <a href='${BottomHomeLink}'>Home</a>
        <a href='${BottomAboutLink}'>About</a>
        <a href='${BottomServicesLink}'>Services</a>
        <a href='${BottomBlogLink}'>Blog</a>
        <a href='${BottomContactLink}'>Contact</a>
    </div>
    <div id='ext-links'>
        <h3>Social Media</h3>
        <a href='https://www.instagram.com/'>Instagram</a>
        <a href='https://www.facebook.com/'>Facebook</a>
        <a href='https://www.twitter.com/'>Twitter</a>
        <a href='https://www.linkedin.com/'>Linkedin</a>
    </div>
    <div id='subscribe'>
        <h3>Subscribe</h3>
        <input type='email'
            id='email'
            placeholder="Enter an email" required />
        <input type='submit'
            value='submit' 
            onclick='onSubmit()' />
    </div>
    </div>
    <p>ABC Optical, 2021 | Terry Lam | All Rights Reserved</p>
`);