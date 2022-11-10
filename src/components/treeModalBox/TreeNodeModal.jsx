import React from 'react'
import './TreeNodeModal.css'


const TreeNodeModal = ({ flipModal, value, setValue, addNode, node }) => { 
    const handleChange = (e) =>{
        setValue(e.target.value)
    }
    return (
        <div className='modalBg'>
            <div className='modalCon'>
                <h3>Enter Node</h3>
                <div>
                    <input onChange={handleChange} value={value}></input>
                    <button onClick={() => value && addNode(node)}>Add</button>
                </div>
                <button className='modalClose' onClick={flipModal}>X</button>
            </div>
        </div>
    )
}

export default TreeNodeModal