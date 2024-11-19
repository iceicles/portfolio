import { AboutMeCard } from "../../../types/AboutMeCard"


export const AboutMeCards: AboutMeCard[] = [
    {
        id: 1,
        isCurrent: true,
        title: 'Front-end Engineer',
        href: 'https://www.canadiantire.ca/en.html',
        description: 'Description',
        workplace: 'Canadian Tire',
        yearsActive: 'Oct 2020 - Present',
    },
    {
        id: 2,
        title: 'Android Developer',
        href: 'https://www.canadiantire.ca/en.html',
        description: 'Description',
        workplace: 'Canadian Tire',
        yearsActive: 'Feb 2020 - Sept 2020',
        isTools: true,
        tools: ['Java', 'MVC/FLUX', 'Android Studio', 'XML']
    },
    {
        id: 3,
        title: 'DevOps Engineer',
        href: 'https://www.canadiantire.ca/en.html',
        description: 'Description',
        workplace: 'Canadian Tire',
        yearsActive: 'Jun 2019 - Jan 2020',
    },
  
]