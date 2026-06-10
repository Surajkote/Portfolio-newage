import SceneCanvas from './SceneCanvas'
import Overlay from './Overlay'
import './index.css'

export default function App() {
  return (
    <>
      {/* Fixed 3D background */}
      <SceneCanvas />

      {/* Scrollable HTML content layered on top */}
      <Overlay />
    </>
  )
}
