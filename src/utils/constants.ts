import { FeatureIcon1, FeatureIcon2, FeatureIcon3, FeatureIcon4 } from "@/components/Icons";

export const homeTabs = ['Domains', 'Hosting', 'Email', 'Marketing', 'More'];

export const baseURL = "https://6628e7a654afcabd073763d6.mockapi.io";

export const currecyOptions = [
    { value: 'N', label: 'N' },
    { value: '$', label: '$' },
    { value: 'K', label: 'K' },
    { value: '¢', label: '¢' },
]

export const navbarLinks = [
    { 
        id: 1,
        name: 'Domains',
        items: [
            { id: 1, text: 'h' }
        ] 
    },
    { 
        id: 2,
        name: 'Website and Hosting',
        items: [
            { id: 1, text: 'e' }
        ] 
    },
    { 
        id: 3,
        name: 'Marketing and Emails',
        items: [
            { id: 1, text: 'r' }
        ] 
    },
    { 
        id: 4,
        name: 'Business Tools',
        items: [
            { id: 1, text: 'e' }
        ] 
    },
    { 
        id: 5,
        name: 'Support',
        items: [
            { id: 1, text: 'w' }
        ] 
    },
]

export const productFeaturesItems = [
    { 
        id: 1,
        name: 'Email that works for you',
        text: 'Keep your inbox tidy with strong search tools, tough spam filters, and smooth connections to other Google apps like Calendar and Drive.',
        icon: FeatureIcon1
    },
    { 
        id: 2,
        name: 'Safe sharing',
        text: 'Work together on files easily, keep your documents secure with top-notch encryption, and reach them from anywhere, anytime.',
        icon: FeatureIcon2
    },
    { 
        id: 3,
        name: 'Easy planning',
        text: 'Keep track of your schedule with Google Calendar. Plan events, set reminders, and arrange meetings with colleagues and clients worldwide, all in one place.',
        icon: FeatureIcon3
    },
    { 
        id: 4,
        name: 'Seamless video conferencing',
        text: 'Connect with your team or clients face-to-face with Google Meet. Enjoy high-quality video calls, screen sharing, and the flexibility to join from any device.',
        icon: FeatureIcon4
    },
]

export const pricingOptions = [
    {
        id: 1,
        title: 'DC Google Workspace Business Starter',
        price: 14280,
        features: [
            { 
                id: 1, 
                text: 'Google Workspace Business Starter provides you with an all-in-one suite to collaborate, communicate, store and create with the following features;',
            },
            { 
                id: 2, 
                text: '- Minimum of 1 email account',
            },
            { 
                id: 3, 
                text: '- Maximum of 300 users',
            },
            { 
                id: 4, 
                text: '- 30GB Cloud Storage (Email & Google Drive)',
            },
            { 
                id: 5, 
                text: '- Business email through Gmail',
            },
            { 
                id: 6, 
                text: '- Video and voice conferencing',
            },
            { 
                id: 7, 
                text: '- Shared calendars',
            },
            { 
                id: 8, 
                text: '- Documents, spreadsheets, and presentations.',
            },
            { 
                id: 9, 
                text: '- 24/7 support',
            },
            { 
                id: 10, 
                text: '- Security and administration controls',
            },
            { 
                id: 11, 
                text: '- Access to other fantastic Google services such as Hangouts, Meet, Sites, Forms, Keep, Google Vault, YAMM, Blogger, and much more.',
            },
        ]
    },
    {
        id: 2,
        title: 'DC Google Workspace Business Standard',
        price: 28560,
        features: [
            { 
                id: 1, 
                text: 'Google Workspace Business Standard provides you with an Enhanced email & More storage with the following features',
            },
            { 
                id: 2, 
                text: 'Minimum of 1 email account',
            },
            { 
                id: 3, 
                text: '- Maximum of 300 users',
            },
            { 
                id: 4, 
                text: '- Includes all features of G-Suite Starter +',
            },
            { 
                id: 5, 
                text: '- 2TB Storage per user',
            },
            { 
                id: 6, 
                text: '- Smart search across G Suite with Cloud Search',
            },
            { 
                id: 7, 
                text: '- Archive and set retention policies for emails and chats with Google Vault',
            },
            { 
                id: 8, 
                text: '- eDiscovery for emails, chats, and files',
            },
            { 
                id: 9, 
                text: '- Audit reports to track user activity',
            },
        ]
    },
    {
        id: 3,
        title: 'DC Google Workspace Business Plus',
        price: 44880,
        features: [
            { 
                id: 1, 
                text: 'Google Workspace Business Plus provides you with an Enhanced security & More storage with the following features',
            },
            { 
                id: 2, 
                text: 'Minimum of 1 email account',
            },
            { 
                id: 3, 
                text: '- Maximum of 300 users',
            },
            { 
                id: 4, 
                text: '- Includes all features of G-Suite Starter +',
            },
            { 
                id: 5, 
                text: '- 5TB Storage per user',
            },
            { 
                id: 6, 
                text: '- Smart search across G Suite with Cloud Search',
            },
            { 
                id: 7, 
                text: '- Archive and set retention policies for emails and chats with Google Vault',
            },
            { 
                id: 8, 
                text: '- eDiscovery for emails, chats, and files',
            },
            { 
                id: 9, 
                text: '- Audit reports to track user activity',
            },
        ]
    },
]

export const faqOptions = [
    {
        id: 1,
        question: 'Can I use my existing domain with Google Workspace?',
        answer: 'Yes, you can use your existing domain with Google Workspace. Our setup allows you to have professional email addresses (you@yourcompany.com) using a domain you have previously purchased.'
    },
    {
        id: 2,
        question: 'Is Google Workspace secure for business use?',
        answer: 'Certainly. With features like strong admin controls, safe file sharing, and advanced spam prevention, Google Workspace places a high priority on security. Your data is kept safe in an encrypted and secure environment.'
    },
    {
        id: 3,
        question: 'How can Google Workspace improve team collaboration?',
        answer: 'Google Workspace enhances team collaboration through real-time document editing, collaborative file sharing, and efficient communication tools. Your team can work together seamlessly, regardless of location.'
    },
]

export const languageOptions = [
    { label: 'EN', value: 'english' },
    { label: 'YR', value: 'yoruba' },
    { label: 'IG', value: 'igbo' },
    { label: 'HA', value: 'hausa' },
]