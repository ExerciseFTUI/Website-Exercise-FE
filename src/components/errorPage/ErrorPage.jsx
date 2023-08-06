import { HexaParticles } from "../hexagon"

import workout from "../../assets/coming-soon/workout.png"
import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="site-wrapper w-container overflow-hidden h-screen lg:h-[100vh] w-screen flex-center flex-col-reverse gap-12 lg:flex-row">
      <img
        alt="exercise illustration"
        src={workout}
        className="w-60 md:w-80 lg:w-96"
      />

      <div className="text-light text-center space-y-6 lg:text-start">
        <h1 className="text-6xl md:text-7xl bg-light px-2 py-1 text-dark rounded-md w-fit">
          404 Not Found
        </h1>
        <p className="font-extralight max-w-2xl text-lg md:text-xl lg:text-2xl">
          Oops! It seems like you lost your way when exploring this gym. Rest
          assured! I provide you a door that you can enter so you're going in to
          the right place!
        </p>

        <Link to="/home" className="btn-light text-dark text-lg rounded-md">
          Entrance Door
        </Link>
      </div>

      <HexaParticles background="#0D2734" color="#FAFAFA" />
    </div>
  )
}

export default ErrorPage
