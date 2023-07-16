import { HexaParticles } from "../hexagon"

import workout from "../../assets/coming-soon/workout.png"

function ComingSoon() {
  return (
    <div className="site-wrapper w-container overflow-hidden h-screen lg:h-[100vh] w-screen pt-20 flex-center flex-col-reverse gap-12 lg:flex-row">
      <img
        alt="exercise illustration"
        src={workout}
        className="w-60 md:w-80 lg:w-96"
      />

      <div className="text-light text-center space-y-6 lg:text-start">
        <h1 className="text-6xl md:text-7xl bg-light px-2 py-1 text-dark rounded-md w-fit">
          COMING SOON!
        </h1>
        <p className="font-extralight max-w-2xl text-lg md:text-xl lg:text-2xl">
          We still exercising this page so that it can be strong enough when you
          want to use it.
        </p>
      </div>

      <HexaParticles background="#0D2734" color="#FAFAFA" />
    </div>
  )
}

export default ComingSoon
