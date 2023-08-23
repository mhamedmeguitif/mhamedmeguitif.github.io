import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What is Odoo, and what does it offer?',
    answer:
      "Odoo is an open-source business management software suite that provides a wide range of integrated applications for various business needs. It covers functionalities such as sales, CRM, inventory management, manufacturing, human resources, accounting, and more. Odoo's modular structure allows businesses to choose the specific applications they need and seamlessly integrate them to create a comprehensive business management solution.",
  },
  {
    question: 'Can I customize Odoo to fit my business requirements?',
    answer:
      'Professional pizzaiolos are experts in stretchy and throwing dough, and the more you practice, you will be able to. But there is no shame in using a rolling pin as you learn about the best way to stretch your dough..',
  },
  {
    question: 'Is Odoo suitable for small businesses as well?',
    answer:
      "Absolutely, Odoo caters to businesses of all sizes, including small businesses. It offers a scalable solution, allowing small businesses to start with the essential modules they require and gradually expand their usage as they grow. Odoo's cost-effectiveness, flexibility, and comprehensive feature set make it a popular choice for small and medium-sized enterprises looking for an integrated and efficient business management system.",
  },
  {
    question: 'How much does Odoo cost?',
    answer:
      ' Odoo offers both a community edition and an enterprise edition. The community edition is open-source and free to use, while the enterprise edition comes with additional features and support and is available at a subscription cost. The pricing for the enterprise edition varies based on the number of users and the specific modules you need. You can contact Odoo sales for detailed pricing information.',
  },
]

const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
            Can’t find the answer you’re looking for? Reach out to{' '}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="font-medium text-accent-600 hover:text-accent-500"
            >
              me
            </a>
            .
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-12">
            {faqs.map((faq) => (
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transitions={{ duration: 3, type: 'tween' }}
                key={faq.question}
              >
                <div>
                  <dt className="text-lg font-medium leading-6 text-primaryText-800 dark:text-primaryText-100">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-primaryText-600 dark:text-primaryText-400 ">
                    {faq.answer}
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Faq
