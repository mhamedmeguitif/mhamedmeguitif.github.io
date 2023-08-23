import { GiBanana } from 'react-icons/gi'
import { RiShoppingBagLine, RiCarLine } from 'react-icons/ri'
import { IoFastFoodOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Mhamed Meguitif',
  description:
    'This is where you can learn about me and my work. I am a full stack developer and I love to build things.',
  author: 'Curtis Warcup',
  authorHeadline: 'Odoo Developer, Workflow Enthusiast, Coffee Lover ☕',
  authorAbout:
    "Welcome to my digital space! I'm passionate about crafting seamless solutions within the Odoo ecosystem. As an Odoo Developer, I specialize in turning intricate business needs into intuitive software. Let's innovate together",
  authorAboutExtended:
    "Hello, I'm M'hamed, an Odoo Developer based in the vibrant city of Oran, Algeria. Beyond coding, I'm an explorer who savors the flavors of Algerian cuisine and embraces life's simple joys. Join me on a journey of innovation and tradition as we navigate the world of Odoo together.",
  socials: {
    twitter: 'https://twitter.com/MMeguitif',
    github: 'https://github.com/mhamedmeguitif',
    linkedin: 'https://www.linkedin.com/in/mhamed-meguitif-2068b6196/',
    instagram: 'https://www.instagram.com/meguitifmhamed/',
    facebook: 'https://www.facebook.com/mhamed.meguitif',
  },
  email: 'm.meguitif@esi-sba.dz',
  phoneNumber: '+213796781675',
  contactTitle: 'Get in touch',
  contactSubtitle:
    "From brewing coffee to crafting innovative Odoo solutions, I'm always up for a stimulating conversation. Feel free to get in touch using the form below.",
  analytics: {
    plausibleDataDomain: 'https://cwarcup.com/', // e.g. tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: 'G-XXXXXXX', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // TODO: Add the name of the navbar items and the corresponding page. Used in the Header and Footer components.
  siteNavLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Experience',
      href: '/experience',
    },
    {
      name: 'Offerings',
      href: '/offerings',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
  ],
  siteRepo: 'https://github.com/Cwarcup/',
  offerings: [
    {
      title: 'Custom Odoo Development',
      description:
        'Welcome to a world of tailored solutions that transform your business ambitions into reality. With my deep expertise in Odoo development, I craft bespoke modules and applications that resonate with your unique requirements. From enhancing customer experiences to optimizing intricate workflows, my custom Odoo development services are designed to elevate your operations to the next level.',
      testimonial:
        '',
      testimonialAuthor: '',
      testimonialAuthorTitle: '',
      imgUrl:
        'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      imageAttribution: 'Photo by @dan__burton on Unsplash',
    },
    {
      title: 'Pizza Making',
      description:
        'This three-hour pizza class will offer our attendees the opportunity to craft homemade dough, prepare the pizza and cook a delicious meal to enjoy at the end of class. Attendees will get to take home extra dough, the secret recipe, and an ingredients list so they can independently recreate this pizza at home.',
      testimonial: '',
      testimonialAuthor: '',
      testimonialAuthorTitle: '',
      imgUrl:
        'https://images.unsplash.com/photo-1532460734809-e7f8475ca917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3237&q=80',
      imageAttribution: 'Photo by @juanmanunez on Unsplash',
    },
  ],
  testimonial: {
    comment:
      '“Success is the sum of small efforts, repeated day in and day out.”',
    author: 'Robert Collier',
    authorTitle: 'American author',
    imgUrl:
      'https://images.unsplash.com/photo-1610725954918-8f791efcda3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    imageAttribution: 'Photo by @johanemanuel on Unsplash',
  },
  featureSection: {
    title: 'Why Choose Me?',
    description:
      "I'm an Odoo Developer with a strong passion for crafting elegant solutions and a deep love for coffee. From coding to creating the perfect brew, I'm dedicated to excellence in all that I do.",
    //TODO also need to update the features array in the FeatureSection component
  },
  experience: {
    title: 'Things I’ve done trying to put my dent in the universe.',
    intro:
      "I have never delivered pizza before, but I have made it. I don't think you should hire me for my pizza skills, but I'm sure I'm a great developer. I've been coding for a long time, and my mom says I'm pretty good at it.",
    //TODO also need to update the experience array in the ExperienceSection component. This is because of the icons used.
    education: [
      {
        schoolName: 'University of British Columbia',
        degree: 'Bachelor of Kinesiology',
        description:
          'Kinesiology is the study of human movement. It is a multidisciplinary field that draws on knowledge from the biological, physical, and social sciences to understand how people move and function. Kinesiology is a broad field that includes the study of human movement, health, and wellness. It is a multidisciplinary field that draws on knowledge from the biological, physical, and social sciences to understand how people move and function. Kinesiology is a broad field that includes the study of human movement, health, and wellness.',
        startDate: '2013',
        endDate: '2017',
        typeofDegree: 'Bachelor Degree',
      },
      {
        schoolName: 'Lighthouse Labs',
        degree: 'Web Development',
        description:
          'Lighthouse Labs is a 12-week full-time web development bootcamp.  The program is designed to teach students the skills needed to become a junior web developer.',
        startDate: '2022',
        endDate: '2022',
        typeofDegree: 'Bootcamp',
      },
    ],
  },

}

export default siteMetadata
