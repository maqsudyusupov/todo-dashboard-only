import '../Navbar/Navbar.css'
import Photo from '../../assets/default-profile.jpg'
function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="title">
                    <h1>
                        🎯 Daily Tasks
                    </h1>
                </div>                    
                <div className='profile'>
                    <img className='photo' src={Photo} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;