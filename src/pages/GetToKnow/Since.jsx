import compass from "../../assets/get-to-know/compass.png"
import vision from "../../assets/get-to-know/vision_2.jpg"
import hero from "../../assets/get-to-know/since-bg.jpg"

const Since = () => {
  return (
    <div id="get-to-know-intro" className="">
      <div
        id="get-to-know-since"
        className="relative lg:py-10 py-32 overflow-hidden bg-dark bg-opacity-90"
      >
        <img
          alt="Since's background img"
          src={hero}
          className="absolute top-0 left-0  -z-10 h-full w-full object-cover object-center"
        />
        <div className="site-wrapper lg:h-screen w-container max-w-5xl flex-center flex-col gap-12 lg:items-start">
          <h1 className="text-5xl lg:text-6xl">Since the very beginning...</h1>

          <div className="text-lg text-justify space-y-6 tracking-wider md:text-xl md:w-full md:mt-3">
            <p>
              Exercise has always been a place well known for developing
              electrical engineering department students in terms of hard skill
              and soft skill by pushing themselves further and <b>encourage</b>{" "}
              each other to become a better engineer.
            </p>
            <p>
              Exercise also provides a place for students to <b>learn</b> how
              professional companies work to achieve a target on a similar
              project category developed by this organization. Lastly, Exercise
              will keep the spirit by creating a space where UI electrical
              engineering students can properly <b>implement</b> and <b>hone</b>{" "}
              their core competence in this collaborative and educative
              environment..
            </p>
          </div>
        </div>
      </div>

      <div id="get-to-know-vision" className="py-24 h-screen flex">
        <div className="site-wrapper w-container flex-center flex-col gap-12 md:flex-row lg:gap-16 xl:gap-24">
          <div className="flex items-center lg:gap-6">
            <img src={vision} className="w-48 md:w-80" />

            <div className="md:hidden">
              <p className="text-4xl font-light">Our</p>
              <p className="text-5xl font-bold">Vision</p>
            </div>
          </div>

          <div className="w-fit max-w-lg md:space-y-6">
            <div className="hidden md:block">
              <p className="text-5xl font-bold">Our Vision</p>
            </div>

            <p className="font-extralight text-justify leading-6 tracking-wider text-lg md:text-xl lg:text-2xl">
              Creating EXERCISE 2023 to be a career catalyst and a platform to
              inspire and help members apply knowledge and develop relevant
              skills in an adaptive and progressive environment.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-light py-16">
        <div className="site-wrapper w-container flex-center flex-col gap-12 max-w-2xl">
          <h1 className="font-bold text-dark-2 text-4xl md:text-5xl lg:text-6xl">
            Our Goals
          </h1>

          <ul className="list-disc tracking-wider space-y-6 font-light text-dark-2 text-justify text-base md:text-lg lg:text-xl">
            <li>
              Providing a collaborative, supportive and inclusive professional
              environment in which to work together, exchange ideas and learn
              and teach from one another
            </li>
            <li>
              Providing a place for students of the electrical engineering
              department to have the opportunity to work on real projects with
              clients to improve skills and knowledge in the electrical
              engineering department
            </li>
            <li>
              Providing a place for students of the Department of Electrical
              Engineering to improve critical thinking skills, problem solving
              and managing projects{" "}
            </li>
            <li>
              Encouraging the academic and professional success of Electrical
              Engineering Department students through training and developing
              skills that are relevant to student needs
            </li>
            <li>
              Increase EXERCISE 2023 exposure through relevant and effective
              branding, by increasing collaboration with various parties.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Since