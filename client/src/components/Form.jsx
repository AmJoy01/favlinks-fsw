/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"


function Form(props){

   const [name, setName] = useState("")
   const [url, setUrl] = useState("")

   const handleNameChange = (e) =>{
    setName(e.target.value)
   }

   const handleURLChange = (e) =>{
    setUrl(e.target.value)
   }

   const submitForm = (e) =>{
    e.preventDefault()
    const newLinkData = {name:name, url:url}
    // props.onNewData(newLinkData)
    // setName("")
    // setUrl("")
    fetch('/api/links', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLinkData),
    })
    .then(response => response.json())
    .then(addedLink => {
        props.onNewData(addedLink)
        setName("")
        setUrl("")
    })
    .catch(error => console.error('Error adding link: ', error))
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="linkName">Name</label>
            <input 
            className="input"
            type="text" 
            id="linkName" 
            name="linkName"
            value={name}
            onChange={handleNameChange}
            />
            <br/>
            <br/>
            <label htmlFor="URL">URL</label>
            <input 
            className="input"
            type="text" 
            id="linkURL" 
            name="linkURL"
            value={url}
            onChange={handleURLChange}
            />
            <br/>
            <input className="button" type="submit" value="Submit"/>
        </form>
    )
}

export default Form