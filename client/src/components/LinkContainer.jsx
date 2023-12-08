/* eslint-disable no-unused-vars */
import Table from './Table'
import Form from './Form'
import { useState, useEffect } from 'react'
import { response } from 'express'
function LinkContainer(){

    const [linkData, setLinkData] = useState([])

useEffect(()=>{
    fetch('api/links').then(response => response.json()).then(data => setLinkData(data)).catch(error => console.error('Error fetching data: ', error))
    // const storedData = JSON.parse(localStorage.getItem("linkData"))
    // if(storedData)  setLinkData(storedData)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    const handleRemove = (index) => {
        /*
                TODO - Create logic for setting the state to filter array and remove favLink at index
            */
        //    const updatedLinkData = [...linkData]
        //    updatedLinkData.splice(index, 1)
        //    setLinkData(updatedLinkData)
        //     localStorage.setItem("linkData", JSON.stringify(updatedLinkData))
        const updatedLinkData = [...linkData]
        const removedLink = updatedLinkData.splice(index, 1)[0]

        fetch(`/api/links/${removedLink.id}`, {
            method: 'DELETE',
        }).then(response => {
            if(response.ok){
                localStorage.setItem("linkData", JSON.stringify(updatedLinkData))
                setLinkData(updatedLinkData)
            }else{
                throw new Error('Failed to delete link')
            }
        }).catch(error => console.error('Eroor deleting link:', error))
    }
    
      const handleSubmit = (newData) => {
        /*
                TODO - Create logic to set state and add new favLink to favLinks array in state
            */
        // const newLinkData = [...linkData, newData]
        // setLinkData(newLinkData)   
        // localStorage.setItem("linkData", JSON.stringify(newLinkData))
        fetch('/api/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData)
        })
        .then(response => response.json())
        .then(addedLink => {
            const newLinkData = [...linkData, addedLink]
            localStorage.setItem("linkData", JSON.stringify(newLinkData))
            setLinkData(newLinkData)
        })
        .catch(error => console.error('Error adding link:', error))
      }

    return(
        <div>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table!</p>
            <Table linkData={linkData} removeLink={handleRemove}/>
            <h1>Add New</h1>
            <Form onNewData={handleSubmit}/>
        </div>
    )
}

export default LinkContainer