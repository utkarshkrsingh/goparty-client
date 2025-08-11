import './App.css'
import Button from './Button'
import Footer from './Footer'

function App() {

    return (
        <>
            <div className='container'>
                <h1 className='heading'><span>Go</span>Party</h1>
                <Button title="Create Room" />
                <Button title="Join Room" />
            </div>
            <Footer />
        </>
    )
}

export default App
