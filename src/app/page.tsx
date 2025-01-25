import { Header, TopHeader } from '@/components'
import CustomCarousel from '@/components/Carousel'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <CustomCarousel />
      <Gallery />
    </div>
  )
}
