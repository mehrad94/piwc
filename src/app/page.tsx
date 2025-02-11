import { BibleQuote, DataHolder, Footer, Header, Introduction, TopHeader } from '@/components'
import CustomCarousel from '@/components/CustomCarousel'
import Gallery from '@/components/Gallery'
import OurYoutubeContainer from '@/components/OurYoutube/OurYoutubeContainer'
import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents'
import Head from 'next/head'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{'کلیسا فارسی زبان آرورا'}</title>
        <meta>{'کلیسای فارسی زبان در ارورا  تورنتو'}</meta>
      </Head>
      <div>
        <TopHeader />
        <Header />
        <CustomCarousel />
        <DataHolder />
        <Introduction />
        <Gallery />
        <BibleQuote />
        <UpcomingEvents />
        <OurYoutubeContainer />
        <Footer />
      </div>
    </Fragment>
  )
}
