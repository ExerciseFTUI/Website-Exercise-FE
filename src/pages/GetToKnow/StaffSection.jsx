const personModel = {
  img: "",
  name: "",
  position: "",
}

const staffModel = {
  img: "",
  name: "",
}

function StaffSection({
  head = personModel,
  vice = personModel,
  div = "",
  desc = "",
  staffs = [staffModel],
}) {
  return (
    <section
      id={div.replace(/[ ]/g, "-").toLowerCase()}
      className="pt-24 w-full"
    >
      <div className="flex-center flex-col gap-8 md:flex-row">
        <div className="flex gap-3">
          <div className="flex flex-col text-end gap-16">
            <img
              alt={head.name + "'s Photo"}
              src={head.img}
              className="bg-grey-1 object-cover object-top h-60 w-44 md:h-64 lg:w-56 lg:h-80"
            />

            <div className="relative flex flex-col justify-center before:absolute before:-right-4 before:h-[1.5px] before:w-4 before:bg-grey-1 md:text-lg md:before:h-0.5">
              <h1>{vice.name}</h1>
              <p className="italic font-extralight">{vice.position}</p>
            </div>
          </div>

          <div className="flex flex-col-reverse text-start gap-16">
            <img
              alt={vice.name + "'s Photo"}
              src={vice.img}
              className="bg-grey-1 object-cover object-top h-60 w-44 md:h-64 lg:w-56 lg:h-80"
            />

            <div className="relative flex flex-col justify-center before:absolute before:-left-4 before:h-[1.5px] before:w-4 before:bg-grey-1 md:text-lg md:before:h-0.5">
              <h1>{head.name}</h1>
              <p className="italic font-extralight">{head.position}</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6 max-w-3xl md:max-w-xs md:text-start lg:max-w-sm">
          <p className="font-extrabold text-4xl lg:text-5xl">{div}</p>

          <p className="text-justify lg:text-lg">{desc}</p>
        </div>
      </div>

      <div className="mt-12 w-full">
        <p className="text-xl md:text-2xl">Staffs</p>

        <div
          id="staffs-carousel"
          className="overflow-x-auto flex gap-4 pt-4 pb-8"
        >
          {staffs.map(({ img, name }, i) => (
            <div key={i} className="flex items-center flex-col w-44 lg:w-52">
              <img
                alt={name + "'s Photo"}
                src={img}
                className="bg-grey-1 object-cover object-top w-44 h-60 lg:w-52 lg:h-72"
              />

              <div className="text-center mt-4 lg:text-lg">
                <h1>{name}</h1>
                <p className="font-extralight mt-1">
                  Staff of {div.toLowerCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[0.5px] bg-grey-1 mt-20" />
    </section>
  )
}

export default StaffSection
