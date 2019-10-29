const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.getElementsByTagName('a');
nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

let head1 = document.querySelector('.cta-text h1');
head1.textContent = siteContent.cta["h1"];

let aweButt = document.querySelector('.cta-text button');
aweButt.textContent = siteContent["cta"]["button"];

let codeCircle = document.getElementById("cta-img");
codeCircle.setAttribute('src', siteContent["cta"]["img-src"])

let featHead = document.querySelector('.text-content h4');
featHead.textContent = siteContent["main-content"]["features-h4"];

let featText = document.querySelector('.text-content p');
featText.textContent = siteContent["main-content"]["features-content"];

let aboutHead = document.querySelector('.top-content div:last-child h4');
aboutHead.textContent = siteContent["main-content"]["about-h4"];

let aboutText = document.querySelector('.top-content div:last-child p');
aboutText.textContent = siteContent["main-content"]["about-content"];

let codeBanner = document.getElementById('middle-img');
codeBanner.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let servicesHead = document.querySelector('.bottom-content :first-child h4 ');
servicesHead.textContent = siteContent["main-content"]["services-h4"];

let servicesText = document.querySelector('.bottom-content :first-child p');
servicesText.textContent = siteContent["main-content"]["services-content"];

let productHead = document.querySelector('.bottom-content :nth-child(2) h4');
productHead.textContent = siteContent["main-content"]["product-h4"];

let productText = document.querySelector('.bottom-content :nth-child(2) p');
productText.textContent = siteContent["main-content"]["product-content"];

let visionHead = document.querySelector('.bottom-content :last-child h4');
visionHead.textContent = siteContent["main-content"]["vision-h4"];

let visionText = document.querySelector('.bottom-content :last-child p');
visionText.textContent = siteContent["main-content"]["vision-content"];

let contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelector('.contact :nth-child(2)');
address.textContent = siteContent["contact"]["address"];

let phone = document.querySelector('.contact :nth-child(3)');
phone.textContent =siteContent["contact"]["phone"];

let email = document.querySelector('.contact :nth-child(4)');
email.textContent = siteContent["contact"]["email"];

let footyFerda = document.querySelector('footer p');
footyFerda.textContent = siteContent["footer"]["copyright"];
