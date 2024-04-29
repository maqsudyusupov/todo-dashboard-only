import '../DashTasks/DashTasks.css'

function DashTasks() {
    return(
        <>
        <div className='taskSection'>
            <div className='time'>
                <p className='timeIndicator'>Today 24.04.2024</p>
            </div>
            <div className='contain'>
                <div className='block'>
                    <div className='list'>
                        <p className='groupName'>To do</p>
                        <span className="material-symbols-outlined">more_vert</span>
                    </div>
                    <div className='tasks'>
                        <p className='demoTask'>
                            Need to go to market
                        </p>
                    </div>
                    <p className='testAddTask'>+ add task</p>
                </div>
                <div className='block'>
                    <div className='list'>
                        <p className='groupName'>In process</p>
                        <span className="material-symbols-outlined">more_vert</span>
                    </div>
                </div>
                <div className='block'>
                    <div className='list'>
                        <p className='groupName'>Done</p>
                        <span className="material-symbols-outlined">more_vert</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DashTasks;