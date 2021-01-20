let app = new Vue ({
    el: '#app',
    data: {
        logo: './assets/img/logo.png',
        socials: [
            //per creare lista a destra nella prima nav dell'header
            {
                icon: 'fas fa-phone-alt',
                text: '+1 (305) 1234-5678',
            },
            {
                icon: 'fas fa-envelope',
                text: 'hello@example.com',
            },
            {
                icon: 'fab fa-facebook-f',
                text: '',
            },
            {
                icon: 'fab fa-twitter',
                text: '',
            },
            {
                icon: 'fab fa-linkedin-in',
                text: '',
            },         
        ],
        navLinks: [
            //Lista link nav principale che portano a sezioni specifiche
            {
                text: 'HOME',
                href: '#'
            },
            {
                text: 'SERVICES',
                href: '#services'
            },
            {
                text: 'ABOUT',
                href: '#about'
            },
            {
                text: 'PROJECTS',
                href: '#projects'
            },
            {
                text: 'RESULTS',
                href: '#results'
            }
        ],
        services: [
            //Card Sezione Services
            {
                icon: 'fas fa-network-wired',
                title: 'Audit & Assurance',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'fas fa-briefcase',
                title: 'Financial Advisory',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'far fa-chart-bar',
                title: 'Analytics and M&A',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'fas fa-plane',
                title: 'Middle Marketing',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'fas fa-globe-europe',
                title: 'Legal Consulting',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'fas fa-archive',
                title: 'Regulatory Risk',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
        ]
    },
    methods: {

    }
})





