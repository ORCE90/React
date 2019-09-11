import React from 'react'
import './style.css'

const User = () => {
    return (
        <React.Fragment>   {/*sluzhi za vrapuvanje - ovoj element*/}
        <div id="greeting" className="text"> Hello Koco! </div>
        <div> This is your first app </div>
        </React.Fragment>
    )
}

export default User