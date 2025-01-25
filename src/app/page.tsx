import { BibleQuote, DataHolder, Footer, Header, Introduction, TopHeader } from '@/components'
import CustomCarousel from '@/components/CustomCarousel'
import Gallery from '@/components/Gallery'

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
      <Footer />
    </div>
  )
}
