
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroPara from "./../components/home/HomeHeroPara";


const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed '>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText/>
        <HomeHeroPara/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home