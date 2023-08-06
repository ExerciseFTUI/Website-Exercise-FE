import React, { useRef, useState } from "react"

function Collapsable({question, answer}) {
  const [isExpand, setIsExpand] = useState(false)

  const descRef = useRef()

  const expand = () => setIsExpand(!isExpand)
  return (
    <div className="">
      <div
        className="cursor-pointer border-dark-2 border-solid border-b-2 flex items-center justify-between p-2"
        onClick={expand}
      >
        <p className="font-semibold">{question}</p>
        <p className="font-extrabold">{isExpand ? "-" : "+"}</p>
      </div>

      <div
        ref={descRef}
        className="overflow-hidden border-solid border-dark-2 text-justify ease-in-out duration-150 px-2"
        style={
          isExpand
            ? {
                height: `calc(${descRef.current.scrollHeight}px + 4rem)`,
                marginTop: "0.5rem",
                borderBottomWidth: "2px",
              }
            : { height: "0px", padding: "0px", borderWidth: "0px" }
        }
      >
        {answer}
      </div>
    </div>
  )
}

export default Collapsable