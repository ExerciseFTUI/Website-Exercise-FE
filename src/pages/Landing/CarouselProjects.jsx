import React from "react";

function CarouselProjects() {
  const imgs = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ]

  return (
    <div className="flex flex-row" style={{ transform: `translate3d(-${1 * 100}%, 0, 0)` }}>
      {imgs.map((img, i) => (
        <div key={i} className="hero min-w-[100vw] h-screen text-dark-2">
          <div className="hero-content p-0 bg-dark text-light text-center max-w-[90vw] flex-col lg:flex-row">
            <img alt="img" src={img} className="w-full max-w-sm max-h-56 rounded-lg object-cover" />
            <div className="p-4">
              <h1 className="text-3xl font-bold">Box Office News!</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn bg-light text-dark">Get Started</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CarouselProjects