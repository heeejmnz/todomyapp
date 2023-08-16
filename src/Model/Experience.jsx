import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState, useMemo, useRef } from "react"
import { CircularProgress } from "@mui/material"
import MyModel from "./MyModel"
import Lights from "./Lights"
import { MATCH_MEDIA } from '../Helpers/vars'

const Experience = () => {
  const [transition, setTransition] = useState(false)
  const [rot, setRot] = useState(500)
  const canvas = useRef()

  useEffect(() => {
    setTimeout(() => {
      setRot(1)
    }, 1000)
    setTimeout(() => {
      setTransition(true);
    }, 500)
  }, [transition, rot])

  const lights = useMemo(() => <Lights />, [])
  const myModel = useMemo(() => <MyModel />, [])
  const matches = MATCH_MEDIA.matches ? [0, 5, 40] : [0, 15, 40]

  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center h-[40vh] lg:h-[100%]">
      {transition ? (
        <Canvas ref={canvas} camera={{ fov: 10, position:matches }}>
          {lights}
          <Suspense fallback={null}>{myModel}</Suspense>
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={rot}
          />
        </Canvas>
      ) : (
        <div className="relative -top-10">
          <CircularProgress />
        </div>
      )}
    </div>
  )
}

export default Experience
