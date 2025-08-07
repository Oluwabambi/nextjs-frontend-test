import { DomainImg, HostingImg, MarketingImg, PerformanceImg, YouthImg } from "@/assets";
import { WhyIcon1, WhyIcon2, WhyIcon3, WhyIcon4, WhyIcon5, WhyIcon6 } from "@/components/Icons";

export const tabsData = [
    {
        id: 1,
        title: 'Find the perfect domain name',
        description: 'Buy or transfer your domain at the best price',
        key: 'Domains',
        buttons: [
            {
                id: 1,
                text: 'Buy a domain name',
                type: 'primary'
            },
            {
                id: 2,
                text: 'Transfer to us',
                type: 'secondary'
            }
        ],
        image: DomainImg
    },
    {
        id: 2,
        title: 'Explore hosting options',
        description: 'Looking for speed, simplicity, space, or super-power hosting, we’ve got you covered. Choose from our shared and cloud hosting(VPS, dedicated hosting).',
        key: 'Hosting',
        image: HostingImg,
        buttons: [
            {
                id: 1,
                text: 'Learn More',
                type: 'primary'
            },
        ],
    },
    {
        id: 3,
        title: 'Establish your professional identity with a custom email',
        description: 'Boost your credibility and sharpen your professional image with a custom email @yourdomain',
        key: 'Email',
        image: YouthImg,
        buttons: [
            {
                id: 1,
                text: 'Get Started',
                type: 'primary'
            },
            {
                id: 2,
                text: 'Learn More',
                type: 'secondary'
            }
        ],
    },
    {
        id: 4,
        title: 'Marketing tool for all businesses',
        description: 'Engage your customers, grow your brands, and manage your business with our marketing tool.',
        key: 'Marketing',
        image: MarketingImg,
        buttons: [
            {
                id: 1,
                text: 'Get Started',
                type: 'primary'
            },
        ],
    },
    {
        id: 5,
        title: 'Boost performance with more tools from GO54',
        description: 'What is better than 5 tools? More tools. Discover more ways to scale your business online.',
        key: 'More',
        image: PerformanceImg,
        buttons: [
            {
                id: 1,
                text: 'Explore more tools',
                type: 'primary'
            },
        ],
    },
]

export const whySectionData = [
    {
        id: 1,
        title: 'Intuitive Interface',
        text: "Our platform, designed with the user in mind is simple. Manage your domains and hosting effortlessly, even if you’re a beginner.",
        icon: WhyIcon1
    },
    {
        id: 2,
        title: 'No.1 web hosting company in West Africa',
        text: "We are West Africa's largest and most popular web hosting provider, supporting businesses, and entrepreneurs for the past 14 years and counting.",
        icon: WhyIcon2
    },
    {
        id: 3,
        title: 'All-in-one business solution',
        text: "We're your dedicated partner in achieving online success. With our comprehensive, business solution, we simplify the digital world for you.",
        icon: WhyIcon3
    },
    {
        id: 4,
        title: 'Reliability',
        text: "Trust is the foundation of our services. Experience unparalleled uptime and top-notch security for your online assets.",
        icon: WhyIcon4
    },
    {
        id: 5,
        title: 'Affordability',
        text: "We believe in providing cost-effective solutions. Enjoy competitive prices without compromising quality.",
        icon: WhyIcon5
    },
    {
        id: 6,
        title: '24/7 Customer support',
        text: "Need assistance? Our customer support, available around the clock, is as reliable as Godaddy.com's renowned support team.",
        icon: WhyIcon6
    },
]

export const slides = []