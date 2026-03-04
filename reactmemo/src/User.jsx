
import React from 'react'

function User({name}) {
    console.log("user")
  return (
    <div>
        <h1>{name}</h1>

    </div>
  )
}

export default React.memo(User)
