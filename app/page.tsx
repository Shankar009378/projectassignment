import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import SliderShow from '@/components/SliderShow'
import TopAnnouncement from '@/components/TopAnnouncement'

export default function Home() {
  return (
    <main>
      <div>
        <TopAnnouncement />
        <Navbar />
        <Banner />
        <SliderShow />
      </div>
    </main>
  )
}
