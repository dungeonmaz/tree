import React from 'react'
import TreeNode from './TreeNode'

const Tree = ({ data, removeNode}) => {
    return (
        <ul>
            {data.map((node) => (
                <TreeNode node={node} removeNode={removeNode} key={node.key}/>
            ))}
        </ul>
    )
}

export default Tree