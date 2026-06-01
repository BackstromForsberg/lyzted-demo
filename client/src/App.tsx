import './App.css'
import "./index.css"
import ListingsPage from './components/ListingsPage'

function App() {

  return (
    <main className='bg-[#a0bac7] min-h-screen my-0'>
      <section id="center">
        <div className="flex justify-center pt-20">
          <h1 className='text-slate-800 text-6xl'>LYZTED DEMO</h1>
        </div>
        <div className="max-w-300 mx-auto mt-20">
          <ListingsPage />
        </div>
      </section>
    </main>
  )
}

export default App
