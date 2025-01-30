import { BibleQuote, DataHolder, Footer, Header, Introduction, TopHeader } from '@/components'
import CustomCarousel from '@/components/CustomCarousel'
import Gallery from '@/components/Gallery'
import OurYoutubeContainer from '@/components/OurYoutube/OurYoutubeContainer'
import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents'

export default function Home() {
  return (
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
  )
}
