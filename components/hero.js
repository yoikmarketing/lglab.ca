import { useState, useEffect } from "react"
import Tilt from "react-parallax-tilt"

export default function Hero({ title, image }) {
  const [width, setWidth] = useState(0)
  const breakpoint = 1024

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      window.removeEventListener("resize", handleResizeWindow)
    }
  }, [])

  if (width >= breakpoint) {
    return (
      <div className="flex-grow flex justify-center items-center p-10">
        <Tilt
          perspective={1000}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          trackOnWindow={true}
          className="flex flex-col justify-center items-center bg-gray-50 border-4 border-gray-200 text-gray-50 space-y-4 text-center px-20"
          style={{
            transformStyle: "preserve-3d",
            width: "70vw",
            height: "70vh",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            className="text-7xl font-semibold"
            style={{
              transform: "translateZ(20px)",
            }}
          >
            {title || "The Gunaratnam Lab"}
          </h1>
          <h3
            className="uppercase text-lg"
            style={{
              transform: "translateZ(15px)",
            }}
          >
            {"Western University"}
            <br />
            {"London Health Sciences Centre"}
          </h3>
        </Tilt>
      </div>
    )
  }

  return (
    <div className="flex-grow flex justify-center items-center p-10">
      <div
        className="flex flex-col justify-center items-center bg-green-500 text-gray-50 space-y-4 text-center px-20"
        style={{
          width: "100%",
          height: "70vh",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl text-gray-50 font-semibold">
          {title || "The Gunaratnam Lab"}
        </h1>
        <h3 className="uppercase">
          {"Western University"}
          <br />
          {"London Health Sciences Centre"}
        </h3>
      </div>
    </div>
  )
}
