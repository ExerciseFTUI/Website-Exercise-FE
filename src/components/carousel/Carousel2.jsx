import React, { useEffect, useState } from "react"

function Carousel2({ imgs, ...props }) {
    let [pos, setPos] = useState(0)

    useEffect(() => {
        setTimeout(
            () => setPos((pos + 1) % imgs.length),
            props.duration || 3000
        )
    }, [pos])

    return (
        <div
            id="carousel2"
            className="flex flex-row ease-in-out duration-500 w-max h-screen max-h-screen lg:h-auto overflow-hidden"
            style={{ transform: `translate3d(-${pos * 50}%, 0, 0)` }}
        >
            {imgs.map((img, index) => (
                <img
                    key={index}
                    alt={index + 1}
                    src={img}
                    className="w-screen object-cover object-center"
                />
            ))}
        </div>
    )
}

export default Carousel2
