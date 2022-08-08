import React, { useEffect } from "react";
import { Footer , Blog , Possibility , Features , WhatGPT3 , Header } from "./Containers/index";
import { Cta , Brand , Navbar } from './Components/index'


function App() {
  
  useEffect(() => {
    // Take elements whose offset parent is body
    const filteredElements = Array.from(document.querySelectorAll('body *')).filter(element => element.offsetParent === document.body)

    // If element's offsetTop greater than window height this means that this element is below than actual view . 
    // So I'm adding scrollerHides class which is hides the element
    filteredElements.forEach(element => {
      if(element.offsetTop > window.innerHeight) {
        element.classList.add('scrollerHides')
        element.classList.remove('scrollerShows')
      }
    })

    // When window is scrolled I'll add scrollerShows and remove scrollerHides to the elements which is enters to the view 
    window.addEventListener('scroll' , () => {
      filteredElements.forEach(element => {
        if(element?.offsetTop < window.innerHeight + window.scrollY) {
          element.classList.remove('scrollerHides')
          element.classList.add('scrollerShows')
        } else {
          element.classList.add('scrollerHides')
          element.classList.remove('scrollerShows')
        }
      })
    })
  } , [])

  
  return (
    <div className="">
      <div className="flex gradient-bg flex-col" >
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
