import React from "react"

function CurriculumCard({ title = "DAY 1", lessons = ["asoidw"] }) {
  return (
    <div className="rounded-t-xl">
      <h1 className="bg-dark-2 text-light text-center text-xl py-2 lg:text-2xl">
        {title}
      </h1>

      <ul className="list-outside list-disc overflow-auto border-solid border-grey-2 border-2 border-t-0 rounded-b-md py-4 px-8 max-w-xs md:h-52 lg:max-w-sm">
        {lessons.map((les, i) => (
          <li key={i} className="font-medium">
            {les}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CurriculumCard
