


const HomeHeroText = () => {
  return (
    <div className='font-[font1] lg:pt-6 pt-55 text-center '>
        <div  className='lg:text-[8vw] text-[14vw] uppercase leading-[8vw] flex justify-center items-center'> L'étincelle</div>
        <div className='lg:text-[8vw] text-[14vw] uppercase leading-[8vw] flex justify-center items-start lg:mt-1 mt-5'>qui
            <div className='h-[6.5vw] w-[16vw] rounded-full overflow-hidden ' ><video className='h-full w-full object-cover rounded-full' autoPlay muted loop src='hero-video.mp4'/></div>
            génère</div>
        <div className='lg:text-[8vw] text-[14vw] uppercase leading-[8vw] flex justify-center items-center lg:mt-1 mt-5'>la créativité</div>
    </div>
  )
}

export default HomeHeroText

