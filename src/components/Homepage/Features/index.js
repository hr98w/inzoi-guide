import clsx from 'clsx'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    title: 'Download Game',
    Svg: require('@site/static/img/svg/download.svg').default,
    description: 'Get the latest version of the game client and start your adventure',
    link: '/download'
  },
  {
    title: 'MOD Creation',
    Svg: require('@site/static/img/svg/download.svg').default,
    description: 'Learn how to create and install MODs to enhance your gaming experience',
    link: '/mods'
  },
  {
    title: 'Game Resources',
    Svg: require('@site/static/img/svg/download.svg').default,
    description: 'Browse detailed information about items, equipment, maps and more',
    link: '/resources'
  },
  {
    title: 'Beginner Guide',
    Svg: require('@site/static/img/svg/download.svg').default,
    description: 'Tutorials and game mechanics for new players',
    link: '/guide'
  },
  {
    title: 'Strategy Guide',
    Svg: require('@site/static/img/svg/download.svg').default,
    description: 'Advanced tips and strategies shared by experienced players',
    link: '/strategy'
  },
  {
    title: 'FAQ',
    Svg: require('@site/static/img/svg/question.svg').default,
    description: 'Find answers to common questions and technical support',
    link: '/faq'
  }
]

function Feature({ Svg, title, description, link }) {
  return (
    <Link 
      to={link}
      className="no-underline hover:no-underline"
    >
      <div className={clsx('col flex flex-col items-center p-6 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-50 rounded-lg cursor-pointer')}>
        <div className='text--center'>
          <Svg className='mx-auto h-32 w-32' role='img' />
        </div>
        <div className='text--center mt-4'>
          <Heading as='h3' className='mb-2 text-xl font-bold text-gray-800'>
            {title}
          </Heading>
          <p className='mx-auto max-w-sm text-gray-600'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10'>
      <div className='container max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
