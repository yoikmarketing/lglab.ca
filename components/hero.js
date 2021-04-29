import { useState, useEffect } from "react"
import Tilt from "react-parallax-tilt"

export default function Hero({ title, image }) {

  const [width, setWidth] = useState(0)
  const breakpoint = 768

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
          perspective={3000}
          trackOnWindow={true}
          className="flex justify-center items-center bg-gray-50 border-4 border-gray-200"
          style={{
            transformStyle: "preserve-3d",
            width: "70vw",
            height: "70vh",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <h1
            className="text-7xl text-gray-50 font-semibold"
            style={{
              transform: "translateZ(30px)"
            }}
          >{title || "The LG Lab"}</h1>
        </Tilt>
      </div>
    )
  } 

  return (
    <div className="flex-grow flex justify-center items-center p-10">
      <div className="flex justify-center items-center bg-green-500" style={{
        width: "100%",
        height: "70vh"
      }}>
        <h1>Booga</h1>
      </div>
    </div>
  )
}
