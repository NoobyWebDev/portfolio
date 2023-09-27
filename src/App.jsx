import { Menu } from "./Menu"
import { Hero } from "./Hero"
import "./index.css"

function App() {
  return (
    <>
      <main className='bg-neutral-900 min-h-screen w-screen font-mono'>
        <section className='min-h-screen px-10'>
          <Menu />
          <Hero />
        </section>
      </main>
    </>
  )
}

export default App
