import Image from 'next/image'
import Head from 'next/head'
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { RiLinksLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'
import logoInsidjam from '@/images/logos/insidjam.png'
import logoSogesi from '@/images/logos/sogesi.png'

// TODO: If you want to include the logo of the company, I suggesting importing the svg from Remix-Design's repo: https://github.com/Remix-Design/RemixIcon/tree/master/icons/Logos

// TODO: Add your own work experience here
const experiences = [
  {
    title: 'Technical',
    company: 'Odoo Developer',
    date: 'Jan 2023 - Present',
    description: [
      'Design and implementation of ODOO custom apps.',
      'Analyze the Scope document.',
      'Create a low level requirement document in discussion with different teams.',
      'Follow best practices in Software development to ensure the readability and maintainability of the code.',
      'Create a custom module in ODOO to meet the specific domain requirement.',
    ],
    location: 'Boumerdès , Algeria',
    link: { url: 'https://www.insidjam.com/', label: 'insidjam' },
    logo: logoInsidjam,
  },
  {
    title: 'Technical Odoo Developer',
    company: 'Odoo Developer',
    date: 'Sep 2022 - Dec 2022',
    description: [
      'Design and implementation of ODOO custom apps.',
      'Re-use the features available in ODOO to fulfill the Scope objectives.',
      'Follow source code checking process to maintain the code in Git Version Control.',
      'Propose several enhancements for the existing module and apps.',
      'Successfully acting like scrum master.'
    ],
    location: 'Vancouver, BC',
    link: { url: 'https://www.apple.com/ca/', label: 'Sogesi' },
    logo: logoSogesi,
  },
]

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    try {
      const cvFilePath = 'cv_2023.pdf'; // Adjust the path if needed
      const response = await fetch(cvFilePath);
      const blob = await response.blob();

      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'cv_2023.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
    }

    setIsDownloading(false);
  };
  return (
    <>
      <Head>
        <title>Experience - {siteMetadata.author}</title>
        <meta
          name={`Work experience of ${siteMetadata.author}`}
          content={siteMetadata.experience.title}
        />
      </Head>
      <SimpleLayout
        title={siteMetadata.experience.title}
        intro={siteMetadata.experience.intro}
      >
        <button
        onClick={handleDownload}
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:text-slate-800"
        disabled={isDownloading}
      >
       {isDownloading ? 'Downloading...' : 'Download CV'}
      </button>
      {/* Loading icon */}
      {isDownloading && <span className="ml-2 animate-spin">&#8987;</span>}
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
          Work Experience
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <Card key={index}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-primaryText-800 dark:ring-0">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  className="w-8 h-8"
                  unoptimized
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={experience.link.url}>
                  {experience.title} at {experience.company}
                </Card.Link>
              </h2>
              <Card.Description>
                {experience.description.map((item, index) => (
                  <li className="ml-4 list-disc" key={`description-${index}`}>
                    {item}
                  </li>
                ))}
              </Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <RiLinksLine className="flex-none w-6 h-6" />
                <span className="ml-2">{experience.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
        <div className="relative max-w-lg mx-auto mt-24 lg:max-w-7xl">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
              Education
            </h2>
          </div>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {siteMetadata.experience.education.map((item, index) => (
              <Card key={`education-${index}`}>
                <p className="text-sm text-primaryText-600 dark:text-primaryText-400">
                  {item.startDate} - {item.endDate}
                </p>
                <div className="block mt-2">
                  <p className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {item.degree}
                  </p>
                  <p className="text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {item.schoolName}
                  </p>
                  <p className="mt-3 text-base text-primaryText-600 dark:text-primaryText-400">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
