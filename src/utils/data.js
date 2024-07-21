export const TECHNOLOGIES = [
    {
        section_name: 'Languages',
        items: [
            {
                name: 'JavaScript',
                link: '../js_logo.svg'
            },
            {
                name: 'C#',
                link: '../csharp_logo.svg'
            },
            {
                name: 'Java',
                link: '../java_logo.svg'
            }
        ]
    },
    {
        section_name: 'Frontend',
        items: [
            {
                name: 'HTML',
                link: '../html_logo.svg'
            },
            {
                name: 'CSS',
                link: '../css_logo.svg'
            },
            {
                name: 'React',
                link: '../react_logo.svg'
            },
            {
                name: 'JavaScript',
                link: '../js_logo.svg'
            },
            {
                name: 'Tailwind CSS',
                link: '../tailwind_CSS_logo.svg'
            }
        ]
    },
    {
        section_name: 'Backend',
        items: [
            {
                name: '.NET Core',
                link: '../net_core_logo.svg'
            },
            {
                name: 'ASP.NET Core MVC',
                link: '../mvc_logo.svg'
            },
            {
                name: 'Entity Framework Core',
                link: '../ef_logo.svg'
            },
            {
                name: 'MSSQL Server',
                link: '../sql_logo.svg'
            }
        ]
    },
    {
        section_name: 'Tools',
        items: [
            {
                name: 'Visual Studio',
                link: '../visual_studio_logo.svg'
            },
            {
                name: 'VS Code',
                link: '../vs_code_logo.svg'
            },
            {
                name: 'Android Studio',
                link: '../android_studio_logo.svg'
            },
            {
                name: 'Git',
                link: '../git_logo.svg'
            }
        ]
    }
]

export const PROJECTS = [
    {
        name: 'Masterpiece Market',
        type: 'Educational Project, Small Team, Remote',
        timeframe: 'Feb 2024 - May 2024',
        images: [
            '../projects/pr-2_p-1.png',
            '../projects/pr-2_p-2.png',
            '../projects/pr-2_p-3.png'
        ],
        role: 'Full Stack Developer',
        comment: `During my second year of university and as part 
        of my curriculum, I took part in the development and 
        deployment of web and mobile applications for online 
        auction organization. The development team consisted of 
        six people.`,
        technologies: [
            {
                part_name: 'Web',
                main: [
                    'ASP.NET Core MVC',
                    'Entity Framework Core',
                    'C#',
                    'HTML',
                    'JavaScript',
                    'CSS'
                ],
                aditional: [
                    'OAuth 2.0',
                    'SignalR'
                ]
            },
            {
                part_name: 'Mobile',
                main: [
                    'Android Studio',
                    'Java'
                ],
                aditional: [
                    'Retrofit',
                    'Glide',
                    'Play Services Auth'
                ]
            }
        ],
        about: `Masterpiece Market is an online platform for artists, 
        art enthusiasts, and collectors, where sharing and exchanging 
        art is implemented in a simple and understandable way.`,
        features: [
            {
                part_name: 'Web',
                f_list: [
                    'Authorization and Authentication with internal and/or Google accounts',
                    'Account management',
                    'Artwork publication and management',
                    'Adding artworks to "Favorites"',
                    'Artworks discussion in comments',
                    'Subscription to favourite artists',
                    'Personalized gallery',
                    'Private chats'
                ]
            },
            {
                part_name: 'Mobile',
                f_list: [
                    'Authorisation and Autentication with internal and/or Google accounts',
                    'Account management',
                    'Starting an auction for one of the artworks in user\'s possession',
                    'Placing bids',
                    'Passing ownership rights of an artwork to the winner of the respective auction',
                    'Notifications about auctions that involve favourite auctions and artist among user\'s subscriptions'
                ]
            }
        ],
        status: 'Disabled (originally deployed with Azure App Services)'
    },
    {
        name: 'UkrLearn',
        type: 'Educational Project, One-Person Team, Remote',
        timeframe: 'Oct 2023 - Dec 2023',
        images: [
            '../projects/pr-3_p-1.png',
            '../projects/pr-3_p-2.png',
            '../projects/pr-3_p-3.png',
            '../projects/pr-3_p-4.png',
            '../projects/pr-3_p-5.png'
        ],
        role: 'Full Stack Developer',
        comment: `During my second year of university and as part 
        of my curriculum, I developed a social-media-like web 
        application for Ukrainian Higher Education Institutes`,
        technologies: [
            {
                part_name: 'Web',
                main: [
                    'ASP.NET Core MVC',
                    'Entity Framework Core',
                    'C#',
                    'HTML',
                    'JavaScript',
                    'CSS'
                ],
                aditional: [
                    'OAuth 2.0',
                    'SignalR'
                ]
            }
        ],
        about: `UkrLearn is an online platform for Ukrainian Higher 
        Education Institutes that provides students and universities 
        with easy and understandable means of communication, making both 
        the enrollment and education processes much easier 
        and less stressful.`,
        features: [
            {
                part_name: 'Web',
                f_list: [
                    'Authorization and Authentication with internal and/or Google accounts',
                    'Account management',
                    'Internal notifications',
                    'Moderating of universities (publication and management of posts, management of information about the university)',
                    'Discussion of posts via comments',
                    'Marking posts with likes',
                    'Saving posts for easy access later',
                    'Built-in career orientation test with recommendations',
                    'Subscription to universities and post categories',
                    'Email notifications about new posts based on user\'s subscriptions',
                    'Statistics'
                ]
            }
        ],
        status: 'Inactive (wasn\'t deployed)'
    },
    {
        name: 'Course System',
        type: 'Educational Project, Small Team, Remote',
        timeframe: 'Jul 2023 - Aug 2023',
        images: [
            '../projects/pr-1_p-1.png',
            '../projects/pr-1_p-2.png',
            '../projects/pr-1_p-3.png'
        ],
        role: 'Full Stack Developer',
        comment: `Learning .Net outside of university, I took part in the development 
        of a web application for distributed learning. The development team consisted of four people, 
        and the teamwork organization was conducted using Agile methodology.`,
        technologies: [
            {
                part_name: 'Web',
                main: [
                    'ASP.NET Core MVC',
                    'Entity Framework Core',
                    'C#',
                    'HTML',
                    'JavaScript',
                    'CSS'
                ],
                aditional: [
                    'OAuth 2.0',
                    'SignalR'
                ]
            }
        ],
        about: `Course System is an online platform for 
        distributed learning. It provides students and teachers 
        with easy and understandable means of communication and 
        work organization.`,
        features: [
            {
                part_name: 'Web',
                f_list: [
                    'Authorization and Authentication with internal and/or Google accounts',
                    'Account management',
                    'Inviting students to group (for teachers)',
                    'Creating groups inside courses (for teachers)',
                    'Adding and managing assignments (for teachers)',
                    'Uploading additional materials for general, course, group, and assignment-wide use (for teachers)',
                    'Internal notifications about new assignment submissions sent by students (for teachers)',
                    'Marking and commenting on students\' assignment submissions (for teachers)',
                    'Uploading assignment solutions in text or file forms (for students)',
                    'Internal notifications about assignment status changes (for students)',
                    'Discussion of assignments via chat',
                    'Account management'
                ]
            }
        ],
        status: 'Inactive (wasn\'t deployed)'
    }
]