import { GiBanana } from 'react-icons/gi'
import { RiShoppingBagLine, RiCarLine } from 'react-icons/ri'
import { IoFastFoodOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Mhamed Meguitif',
  description:
    'This is where you can learn about me and my work. I am a full stack developer and I love to build things.',
  author: 'Mhamed Meguitif',
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
    }
  ],
  siteRepo: 'https://github.com/mhamedmeguitif/mhamedmeguitif.github.io',
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
      title: 'Dedicated Support',
      description:
        "My support is more than just technical troubleshooting; it's a commitment to your success. From addressing queries to providing timely updates, I'm your ally in navigating the intricacies of the Odoo ecosystem. As your business evolves, I'm by your side, ensuring that your systems evolve seamlessly with you. \n\nLet's embark on this journey together, where your growth is my priority. Choose dedicated support that empowers you to harness the full potential of Odoo, not just today, but for years to come.",
      testimonial: '',
      testimonialAuthor: '',
      testimonialAuthorTitle: '',
      imgUrl:
        'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      imageAttribution: 'Photo by @Sigmund on Unsplash',
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
      "While I've never brewed coffee professionally, I've perfected the art for my own cup. Don't hire me for barista skills, but as an adept Odoo developer. With extensive coding experience and a nod of approval from my mom, I'm poised to excel in the world of development.",
    //TODO also need to update the experience array in the ExperienceSection component. This is because of the icons used.
    education: [
      {
        schoolName: 'Higher School in Computer Science of Sidi Bel Abbès 08-MAY-1945',
        degree: "Master's degree",
        description:
          "Having pursued my studies in Computer Science at the esteemed Higher School in Computer Science of Sidi Bel Abbès 08-MAY-1945, I successfully attained my master's degree in 2022. Computer Science is a dynamic realm encompassing various disciplines such as programming, algorithms, and data structures. It's a field that constantly evolves and plays a pivotal role in shaping the modern world. With a strong foundation from my alma mater, I am poised to navigate the complexities of the tech landscape and contribute meaningfully to innovative endeavors.",
        startDate: '2017',
        endDate: '2022',
        typeofDegree: 'Bachelor Degree',
      },
      {
        schoolName: 'Higher School in Computer Science of Sidi Bel Abbès 08-MAY-1945',
        degree: "Computer Systems Engineer",
        description:
        "Computer systems engineering is the art and science of designing, implementing, and managing complex computing systems. As a graduate of the Higher School in Computer Science of Sidi Bel Abbès 08-MAY-1945 in 2022, I've honed my skills in this multidisciplinary domain. Drawing from principles in computer science, electronics, and engineering, computer systems engineers create efficient and innovative solutions. With a deep understanding of hardware and software integration, I'm prepared to contribute to the seamless functioning of modern technology, just as kinesiology encompasses diverse sciences to comprehend human movement and well-being.",
        startDate: '2017',
        endDate: '2022',
        typeofDegree: 'Bachelor Degree',
      },
    ],
  },

}

export default siteMetadata
