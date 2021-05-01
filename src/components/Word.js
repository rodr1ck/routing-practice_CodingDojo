import React from 'react'
import { useParams } from 'react-router'

const Word = () => {
    const params = useParams()
    console.log(params)

    return (
        <div
            style={{
                color: params.textColor || 'black',
                backgroundColor: params.backgroundColor || 'white',
                'text-align': 'center',
            }}
        >
            The word is {params.word}
        </div>
    )
}

export default Word
