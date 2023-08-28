import {About,Contact,Experience,Feedbacks,Hero,Navbar,StarsCanvas,Tech,Works} from './components'

export const LenguagePageOfEN = () => {
  return (
    <div className='relative z-0 bg-primry'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
    </div>
  )
}