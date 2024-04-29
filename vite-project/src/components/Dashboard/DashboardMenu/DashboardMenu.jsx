import '../DashboardMenu/DashboardMenu.css'
import Profile from '../../../assets/default-profile.jpg'


function DashMenu() {
    return(
        <>
            <div className='mainMenu'>
                {/* user profile */}
                <div className='userInfo'>
                    <div>
                        <img src={Profile} alt='User default photo' className='userPic'/>
                    </div>
                    <div className='userData'>
                        <div>
                            <h2 className='username'>User Name</h2>
                        </div>
                        <div>
                            <p className='email'>example@email.com</p>
                        </div>
                    </div>
                </div>
            

                {/* menu */}
                <div className='menuItems'>
                    <div >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className='option'>Today's challenges</p>
                    </div>
                    <div>
                        <p className='option'>Weekly Tasks</p>
                    </div>
                    <div>
                        <p className='option'>Monthly Tasks</p>
                    </div>
                    <div >
                        <p className='option'>+ add special day</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashMenu;