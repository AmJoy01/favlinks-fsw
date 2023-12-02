/* eslint-disable no-unused-vars */
import Table from './Table'
import Form from './Form'
import { useState, useEffect } from 'react'
function LinkContainer(){

    const [linkData, setLinkData] = useState([])

useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem("linkData"))
    if(storedData)  setLinkData(storedData)
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    const handleRemove = (index) => {
        /*
                TODO - Create logic for setting the state to filter array and remove favLink at index
            */
           const updatedLinkData = [...linkData]
           updatedLinkData.splice(index, 1)
           setLinkData(updatedLinkData)
            localStorage.setItem("linkData", JSON.stringify(updatedLinkData))
      }
    
      const handleSubmit = (newData) => {
        /*
                TODO - Create logic to set state and add new favLink to favLinks array in state
            */
        const newLinkData = [...linkData, newData]
        setLinkData(newLinkData)   
        localStorage.setItem("linkData", JSON.stringify(newLinkData))
        
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