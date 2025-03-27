import clsx from 'clsx'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    title: 'Download Game',
    Svg: require('@site/static/img/svg/download.svg').default,
    description: 'Download and install inZOI game client, system requirements and troubleshooting guides',
    link: '/docs/get-start/download'
  },
  {
    title: 'Character',
    Svg: require('@site/static/img/svg/character.svg').default,
    description: 'Comprehensive guide to character creation, traits, values, skills and life stages',
    link: '/docs/category/character'
  },
  {
    title: 'Ambitions',
    Svg: require('@site/static/img/svg/award.svg').default,
    description: 'Explore various life goals and achievement paths for your Zoi characters',
    link: '/docs/category/ambitions'
  },
  {
    title: 'Jobs & Careers',
    Svg: require('@site/static/img/svg/bag.svg').default,
    description: 'Detailed information about available jobs, career paths and progression systems',
    link: '/docs/category/jobs-and-careers'
  },
  {
    title: 'Cities',
    Svg: require('@site/static/img/svg/building.svg').default,
    description: 'Explore the unique features and opportunities in Dowon, Bliss Bay and Kucingku',
    link: '/docs/category/cities'
  },
  {
    title: 'FAQ',
    Svg: require('@site/static/img/svg/question.svg').default,
    description: 'Common questions about gameplay, technical issues and game mechanics',
    link: '/docs/category/inzoi-download-faqs'
  }
]

function Feature({ Svg, title, description, link }) {
  return (
    <Link 
      to={link}
      className="no-underline hover:no-underline"
    >
      <div className={clsx('col flex flex-col items-center p-6 transition-all duration-300 hover:transform hover:scale-105 hover:bg-sky-50/50 backdrop-blur-sm rounded-xl cursor-pointer border border-sky-100/20 shadow-sm')}>
        <div className='text--center'>
          <Svg className='mx-auto h-32 w-32 text-sky-600' role='img' />
        </div>
        <div className='text--center mt-4'>
          <Heading as='h3' className='mb-2 text-xl font-bold text-sky-900'>
            {title}
          </Heading>
          <p className='mx-auto max-w-sm text-sky-700/80'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-20 bg-gradient-to-b from-sky-50/50 to-transparent'>
      <div className='container max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
