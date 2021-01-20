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
        ]
    },
    methods: {

    }
})





