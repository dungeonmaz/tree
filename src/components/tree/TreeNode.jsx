import React, { useState } from 'react'
import TreeNodeModal from '../treeModalBox/TreeNodeModal'
import Tree from './Tree'

const TreeNode = ({ node, removeNode }) => {
    const [showChildren, setShowChildren] = useState(false)
    const [update, setUpdate] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [value, setValue] = useState('')
    const [nodeVal, setNodeVal] = useState(node.label)
    const [showButtons, setShowButtons] = useState(false)

    const flipModal = () => {
        setShowModal(!showModal)
    }

    const handleDelete = () => {
        removeNode(node)
    }

    const addNode = () => {
        node.children.push({
            key: `${node.key}-${node.children.length + 1}`,
            label: value,
            parent: node,
            children: [],
        })
        setValue('')
        setShowChildren(true)
    }

    const handleUpdate = () => {
        setUpdate(!update)
    }

    const handleChange = (e) => {
        setNodeVal(e.target.value)
        node.label = e.target.value
    }


    return (
        <div>
            {showModal ? <TreeNodeModal value={value} setValue={setValue} flipModal={flipModal} node={node} addNode={addNode} /> : null}
            <div style={{ borderLeft: 'gray solid 2px' }}>
                <div style={{ display: 'flex', alignItems: 'stretch', margin: '5px' }}>
                    {update ?
                        <input value={nodeVal} onChange={handleChange} /> :
                        <div onClick={() => { setShowChildren(!showChildren) }}>{node.label}</div>}
                    <button style={{ marginLeft: '5px' }} onClick={() => setShowButtons(!showButtons)}>{showButtons ? "<" : ">"}</button>
                    {showButtons ? <>
                        <button onClick={handleUpdate} >R</button>
                        <button onClick={flipModal} >+</button>
                        <button onClick={handleDelete} >X</button>
                    </> : null}
                    
                </div>
                <div>
                    {showChildren ? <Tree data={node.children} removeNode={removeNode} /> : null}
                </div>

            </div>
        </div>
    )
}

export default TreeNode