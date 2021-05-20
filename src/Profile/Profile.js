import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({fullName, Bio, Profession, children, handleName}) => {
    return(
        <div>
            {children}
            <h1 >{fullName}</h1>
            <h3>{Profession}</h3>
            <p>{Bio}</p>
            <br/>
            <button onClick={()=>handleName('Nasr')}>Click me!</button>
        </div>
    )
}
Profile.prototype={
    fullName :PropTypes.string,
    profession:PropTypes.string,
    Bio:PropTypes.string,
}
export default Profile