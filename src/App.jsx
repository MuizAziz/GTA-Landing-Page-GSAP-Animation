import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [showContent , setShowContent] = useState()

  useGSAP(() => {

    const tl = gsap.timeline()

    tl.to((".vi-mask-group") , {
    rotate:10,
    duration:2,
    ease:"Power4.easeInOut",
    transformOrigin:"50% 50%",
    })
    .to(".vi-mask-group" , {
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function () {
        if(this.progress() >= 0.9){
          document.querySelector(".svg").remove()
          setShowContent(true)
          this.kill()
        }
      }
    })
  })

  useGSAP(() => {

    if(!showContent) return;  

    gsap.to((".main") , {
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    })

    gsap.to((".sky") , {
      scale:1.2,
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut"
    })

    gsap.to((".bg") , {
      scale:1.2,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    })

    gsap.to((".character") , {
      scale:0.6,
      x:"-50%",
      bottom:"-45%",
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut"
    })

    // gsap.to((".text") , {
    //   scale:1,
    //   rotate:0,
    //   duration:2,
    //   delay:"-.8",
    //   ease:"Expo.easeInOut"
    // })

    const main = document.querySelector(".main")
    main?.addEventListener("mousemove" , function(e) {
      const xMove = (e.clientX / window.innerWidth - 0.5 ) * 40
      gsap.to(".imagesdiv .text" , {
        x:`${xMove*0.4}%`,
      })
      gsap.to(".imagesdiv .sky" , {
        x:xMove,
      })
      gsap.to(".imagesdiv .bg" , {
        x:xMove*1.7,
      })
    })

  } , [showContent])

  return (
    <>
    <div className="flex items-center justify-center svg fixed top-0 left-0 z-[2] w-full h-screen overflow-hidden bg-[#111]">

    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask id="viMask">
          <rect width="100%" height="100%" fill="black" />
          <g className="vi-mask-group">
            <text
            x="50%"
            y="50%"
            fontSize="250"
            textAnchor="middle"
            fill="white"
            dominantBaseline="middle"
            fontFamily="Arial Black"
            >
              IV
            </text>
          </g>
        </mask>
      </defs>
      <image
      href="./bg.png"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      mask="url(#viMask)"
      />
    </svg>
    </div>

 {/*Eksa mtlb ye div sirf tb chaly ga jb showContent true hoga .Its called conditional rendering*/}
    {showContent && <div className="main w-full rotate-[-10deg] scale-[1.7]"> 
      <div className="landing overflow-hidden relative w-full h-screen bg-black">
        <div className="navbar absolute top-0 left-0 w-full z-[10] py-8 px-8">
          <div className="logo flex gap-7">
            <div className="lines flex flex-col gap-1">
              <div className="line w-9  h-1 bg-white"></div>
              <div className="line w-7  h-1 bg-white"></div>
              <div className="line w-5  h-1 bg-white"></div>
            </div>
            <h3 className="text-3xl -mt-[11px] text-white">Rockstar</h3>
          </div>
        </div>

        <div className="imagesdiv overflow-hidden relative w-full h-screen">
          <img className="sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
          <img className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />
             <div className="text text-white absolute top-5 left-1/2 -translate-x-1/2 flex flex-col gap-3 ">
          <h3 className="text-[8rem] leading-none -ml-30">grand</h3>
          <h3 className="text-[8rem] leading-none -ml-0">theft</h3>
          <h3 className="text-[8rem] leading-none -ml-30">auto</h3>
        </div>
          <img className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]" src="./girlbg.png" alt="" />
        </div>

        <div className="btmbar text-white w-full absolute bottom-0 left-0 px-8 py-10 bg-gradient-to-t from-black to-transparent">
          <div className="flex gap-4 items-center">
            <i className="text-3xl cursor-pointer ri-arrow-down-long-line"></i>
            <h3 className="text-2xl">Scroll Down</h3>
          </div>
            <img className="h-[50px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" src="./ps5.png" alt="" />
        </div>


      </div>
      <div className="w-full h-screen flex px-10 items-center justify-center bg-black">
        <div className="cntnr w-full h-[80%] flex text-white">
          <div className="limg w-1/2 relative h-full">
            <img className="absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
          </div>

           <div className="rg w-[40%] py-10">
          <h1 className="text-7xl">Still Running,</h1>
          <h1 className="text-7xl">Not Hunting</h1>
          <p className="mt-10 text-xl font-[gilroy]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore beatae veniam esse nulla neque cupiditate similique reiciendis, laboriosam nostrum eaque quos vitae nesciunt.</p>
          <p className="mt-5 text-xl font-[gilroy]">Lorem Lorem ip. Eaque, iure.ipsum dolor sit amet, consectetur adipisicing elit. Quo sit perferendis voluptatum repudiandae.</p>
          <p className="mt-5 text-xl font-[gilroy]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio excepturi nihil, quaerat officiis hic totam!</p>
          <button className="bg-yellow-400 py-5 px-5 text-2xl mt-10 cursor-pointer text-black">Download Now</button>
        </div>
        </div>
       
       
      </div>
      </div>}

    </>
  )
}

export default App