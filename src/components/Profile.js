import React from 'react'

function Profile({email, tel, name}) {
    return (
        <div style={{
            flex: '1 0 200px'
        }}>
            <h3>{name}</h3>
            <p>Tel: <a href={`tel:${tel}`}>{tel}</a></p>
            <p>email: <a href={`mailto:${email}?Subject=Enquiry%20from%20website`}>{email}</a></p>
        </div>
    )
}

export default Profile
