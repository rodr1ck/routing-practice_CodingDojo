import * as React from 'react'

export const Post = ({ match }) => {
    return isNaN(match.params.id) ? (
        <div style={{'text-align': 'center'}}>The word is {match.params.id}</div>
    ) : (
        <div style={{'text-align': 'center'}}>The number is {match.params.id}</div>
    )
}
