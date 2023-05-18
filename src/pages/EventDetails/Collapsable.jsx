import React, { useRef, useState } from "react"

function Collapsable({
  title = "Lorem Ipsum Dolor Si Amet",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac arcu ornare, tincidunt neque non, ultrices magna. Quisque in purus eu ex vestibulum posuere. Mauris nisl ipsum, vehicula quis hendrerit ac, lobortis ac odio. Suspendisse suscipit ex sed finibus tincidunt. Phasellus magna urna, egestas eu sem eget, sollicitudin vulputate magna. Duis in lorem dapibus, auctor justo eget, cursus augue. Sed ut lacus in enim volutpat tristique.",
}) {
  const [isExpand, setIsExpand] = useState(false)

  const descRef = useRef()

  const expand = () => setIsExpand(!isExpand)
  return (
    <div className="">
      <div
        className="cursor-pointer border-dark-2 border-solid border-b-2 flex items-center justify-between p-2"
        onClick={expand}
      >
        <p className="font-semibold">{title}</p>
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
        {desc}
      </div>
    </div>
  )
}

export default Collapsable
