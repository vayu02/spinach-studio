import Header from './components/Header'
import Problems from './components/Problems'
import Tagline from './components/Tagline'

function App() {
    return (
        <main>
            <section className="bg-black">
                <Header />
                <Tagline />
            </section>
            <Problems />
        </main>
    )
}

export default App
