import { AboutMeModalContent } from "../../types/AboutMeModalContent";

const listClass = 'flex flex-col gap-2.5'
const listItemClass = 'list-[square] bg-gray-900 rounded-xl p-2.5'

export const AboutModalContent: AboutMeModalContent[] = [
    {
        id: 1,
        title: 'React - Front-end Engineer | Product Engineering',
        description: `
        <ul class='${listClass}'>
            <li class='${listItemClass}'>
            Developed cart, checkout, and browse functionalities in collaboration with onshore and offshore teams as part of a new initiative to migrate and revamp Canadian Tire’s – and its subsidiaries – frontend legacy codebase architecture from jQuery to React, resulting in a streamlined codebase with shared components and functionalities across the parent site and its subsidiaries
            </li>
 
            <li class='${listItemClass}'>
            Implemented user transaction components, sign-in and registration functionalities, for Triangle (a subsidiary) as part of the initiative to revamp the frontend codebase architecture with React, thereby eliminating redundant code and improving code readability and reusability, resulting in better developer experience and money saved for the business during software development lifecycle(s)
            </li>
     
            <li class='${listItemClass}'>
            Implemented Single Sign On (SSO) functionality that allows the user to sign in with the same credentials across multiple banners such as Canadian Tire, Party City, Marks, Atmosphere, and Lequipeur
            </li>
       
            <li class='${listItemClass}'>
            Worked on Sales Alerts functionality on the Buybox for products in user’s Wishlist generating an increase in sales and customer conversions
            </li>
        </ul>`,
        tools: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'],
        jobHREF: 'https://www.canadiantire.ca/en.html',
        workplace: 'CTC',
        yearsActive: 'Oct/’20 - Present'
    },
    {
        id: 2,
        title: 'Android Mobile App Developer',
        description: `
        <ul class='${listClass}'>
            <li class='${listItemClass}'>
            Contributed to wayfinding feature to help users to navigate stores with precision and ease
            </li>

            <li class='${listItemClass}'>
            Developed a new home screen as per design specifications improving user experience and personalization
            </li>
        </ul>`,
        tools: ['Java', 'XML', 'Android Studio'],
        jobHREF: 'https://www.canadiantire.ca/en.html',
        workplace: 'CTC',
        yearsActive: 'Feb/’20 - Sept/’20'
    },
    {
        id: 3,
        title: 'DevOps Analyst | Cloud Operations & Automation',
        description: `
        <ul class='${listClass}'>
            <li class='${listItemClass}'>
            Created new relic dashboards based on specific rules to monitor and efficiently filter through superfluous logs while also tracking server utilization metrics
            </li>
       
            <li class='${listItemClass}'>
            Automated Operating System patching on servers keeping the machines updated with security fixes and critical bug fixes
            </li>
        </ul>`,
        tools: ['Python', 'Rundeck', 'Ansible', 'YAML'],
        jobHREF: 'https://www.canadiantire.ca/en.html',
        workplace: 'CTC',
        yearsActive: 'Jun/’19 - Jan/’20'
    }
]