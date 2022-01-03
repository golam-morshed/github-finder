import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="mx-w-lg">
                    <h1 className="text-8xl text-bold mb-5">Oops !</h1>
                    <p className="text-2xl mb-10">404 - Not Found</p>
                    <Link to="/" className='btn btn-primary btn-lg'>
                        < FaHome className="mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Notfound
