import React, { useState, useEffect } from 'react'

export default function Text() {
    const [text, setText] = useState("");
    useEffect(() => {
        console.log("Mounting")
        return () => {
            console.log("unmounting")
        }
    }, [])

    const handleChange = (e) => {
        setText(e.target.value);
        console.log("updating")
    }
    return (
        <div>
            <input onChange={handleChange} value={text} />
            <h1>{text}</h1>
        </div>
    )
}
