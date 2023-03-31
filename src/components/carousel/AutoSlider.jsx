import React, { useEffect, useState } from "react"

function AutoSlider({ imgs, ...props }) {
  let [pos, setPos] = useState(0)

  useEffect(() => {
    setTimeout(() => setPos((pos + 1) % imgs.length), props.duration || 3000)
  }, [pos])

  return (
    <div
      id="autoslider"
      className="flex flex-row ease-in-out duration-500 h-screen max-h-screen lg:h-auto"
      style={{ transform: `translate3d(-${pos * 100}%, 0, 0)` }}
    >
      {imgs.map((img, index) => (
        <img
          key={index}
          alt={index + 1}
          src={img}
          className="block w-screen object-cover object-center"
        />
      ))}
    </div>
  )
}

export default AutoSlider
