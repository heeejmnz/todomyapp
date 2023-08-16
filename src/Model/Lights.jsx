import { useMemo } from "react";

const Lights = () => {
  const ambientLight = useMemo(() => <ambientLight intensity={0.1} position={[1, 1, 1]} />, [])
  const spotLight = useMemo(() => <spotLight intensity={5} position={[1, 1, 1]} />, [])

  return (
    <>
      {ambientLight}
      {spotLight}
    </>
  )
}

export default Lights;

