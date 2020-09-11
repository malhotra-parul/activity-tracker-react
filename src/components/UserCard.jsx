import React from 'react'

const UserCard = ({ name, tz, activity}) => {
    return (
        <div >
            <h3>{name}</h3>
            <h6>{tz}</h6>
        </div>
    )
}

export default UserCard
