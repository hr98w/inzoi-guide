import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import HomepageFeatures from './Features'
import LatestNews from '../LatestNews'

import { Button } from '../ui/button'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header
      className='px-2 py-20 text-center'
      style={{
        backgroundImage: `url('/img/banner.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className='container'>
        <Heading as='h1' className='mb-4 text-2xl font-bold md:text-3xl lg:text-5xl text-white drop-shadow-lg'>
          {siteConfig.title}
        </Heading>

        <p className='mb-4 text-lg md:text-xl lg:text-2xl text-white drop-shadow-lg'>
          <span className='mb-1 block'>{siteConfig.tagline}</span>

          {/* <Link
            href='https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template'
            className='text-blue-700 dark:text-green-700'
          >
            Please read README.md for more about project information
          </Link> */}
        </p>

        <Button asChild>
          <Link to='/docs/intro'>Play inZOI</Link>
        </Button>
      </div>
    </header>
  )
}

export default function Home({ homePageBlogMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`Your Ultimate Resource for inZOI Gaming`}
      description='Discover comprehensive guides, mods, tutorials, and resources for inZOI. Join our community for the latest tips, strategies, and custom content.'
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <LatestNews recentPosts={recentPosts} homePageBlogMetadata={homePageBlogMetadata} />
      </main>
    </Layout>
  )
}
