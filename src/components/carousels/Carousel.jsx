import React from "react"

// Modified from DaisyUI Carousel
function Carousel() {
  const imgs = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ]

  return (
    <div className="carousel w-full h-[90vh] overflow-hidden">
      {imgs.map((img, i) => (
        <div key={i} id={"slide" + i} className="carousel-item relative w-full">
          <img src={img} className="w-full" />

          <div className="absolute flex justify-between left-5 right-5 top-[35%]">
            <a
              href={"#slide" + (i == 0 ? imgs.length - 1 : i - 1)}
              className="btn btn-circle"
            >
              ❮
            </a>

            <a
              href={"#slide" + (i == imgs.length - 1 ? 0 : i + 1)}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel
