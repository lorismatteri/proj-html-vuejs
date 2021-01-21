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
        ],
        infos: [
            //Card in sezione About
            {
                icon: 'fas fa-award',
                title: 'Tradition',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'fas fa-lock',
                title: 'Tradition',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'far fa-edit',
                title: 'Tradition',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                icon: 'fas fa-graduation-cap',
                title: 'Tradition',
                overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
        ],
        tags: [
            //Lista per nav in section Projects
            {
                name: 'ALL'
            },
            {
                name: 'INSTITUTIONAL'
            },
            {
                name: 'SOCIAL'
            },
            {
                name: 'EVENTS'
            },
            {
                name: 'INNOVATION'
            },
            {
                name: 'EVIRONMENT'
            },
            {
                name: 'TECHNOLOGY'
            }
        ],
        projects: [
            {
                image: './assets/img/project-1.jpg',
                title: 'Academic professional program in social media'
            },
            {
                image: './assets/img/project-2.jpg',
                title: "President's speech at the annual meeting"
            },
            {
                image: './assets/img/project-3.jpg',
                title: 'International business trip in Shanghai'
            },
            {
                image: './assets/img/project-4.jpg',
                title: 'Technology workshop with education theme'
            },
            {
                image: './assets/img/project-5.jpg',
                title: 'Donation of clothes and food to the partner NGO'
            },
            {
                image: './assets/img/project-6.jpg',
                title: 'Confraternization of the procurement team'
            },
        ],
        results: [
            //Card in section results
            {
                number: '128',
                text: 'Certifications'
            },
            {
                number: '230',
                text: 'Employees'
            },
            {
                number: '517',
                text: 'Customers'
            },
            {
                number: '94',
                text: 'Countries Served'
            },
        ],
        logos: [
            //Lista loghi in section results
            {
                img: './assets/img/logo-4.png'
            },
            {
                img: './assets/img/logo-5.png'
            },
            {
                img: './assets/img/logo-1.png'
            },
            {
                img: './assets/img/logo-2.png'
            },
            {
                img: './assets/img/logo-3.png'
            },
            {
                img: './assets/img/logo-4.png'
            },
        ],
        contacts: [
            {
                icon: 'fas fa-phone-alt',
                text: '+1 (305) 1234-5678'
            },
            {
                icon: 'fas fa-envelope',
                text: 'hello@example.com',
            },
            {
                icon: 'fas fa-map-marker-alt',
                text: 'Main Avenue, 987',
            },
        ],
        links: [
            //Card con vari link nel footer
            {
                title: 'About',
                items: [
                    {
                        text:'The Company'
                    },
                    {
                        text:'Institutional'
                    },
                    {
                        text:'Social & Events'
                    },
                    {
                        text:'Innovation'
                    },
                    {
                        text: 'Environment'
                    },
                    {
                        text:'Technology'
                    }
                ]
            },
            {
                title: 'Services',
                items: [
                    {
                        text:'Audit & Assurance'
                    },
                    {
                        text:'Financial Advisory'
                    },
                    {
                        text:'Analytics M&A'
                    },
                    {
                        text:'Middle Marketing'
                    },
                    {
                        text:'Legal Consulting'
                    },
                    {
                        text:'Regulatory Risk'

                    }
                ]
            },
            {
                title: 'Support',
                items: [
                    {
                        text:'Responsibility'
                    },
                    {
                        text:'Terms of Use'
                    },
                    {
                        text:'About Cookies'
                    },
                    {
                        text:'Privacy Policy'
                    },
                    {
                        text:'Accessibility'
                    },
                    {
                        text:'Information'
                    }
                ]
            },

        ]
    },
    methods: {
        inviaMess: function() {
            const div = $('#message');
            console.log(div);
            $(div).css('opacity', '1');
        }
    },
    mounted(){
        let over = $('.overlay');
        console.log(over);
        $(over).hover(function () {
                // over
                $('.overlay h3').css('bottom', '30%');
                $('.overlay i').css('display', 'block');
                $('.overlay p').css('display', 'block')
            }, function () {
                // out
                $('.overlay h3').css('bottom', '15%');
                $('.overlay i').css('display', 'none');
                $('.overlay p').css('display', 'none')
            }
        );
    }
})





