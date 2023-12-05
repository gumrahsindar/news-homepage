import Blog from './components/Blog'
import Features from './components/Features'
import Navbar from './components/Navbar'

function App() {
  return (
    <div id='App' className='mx-auto max-w-[70rem] overflow-y-auto px-4 pb-20 pt-[1.75rem] md:pb-32 md:pt-[3.5rem]'>
      <header>
        <Navbar />
      </header>
      <main>
        <Features />
        <Blog />
      </main>
    </div>
  )
}

export default App
