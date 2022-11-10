import { useState } from 'react';
import './App.css';
import Tree from './components/tree/Tree';
import TreeNodeModal from './components/treeModalBox/TreeNodeModal';

function App() {
  const baseData = [
    {
      key: "0",
      label: "Documents",
      children: [],
    },
    {
      key: "1",
      label: "Desktop",
      children: [],
    },
    {
      key: "2",
      label: "Downloads",
      children: [],
    },
  ]
  const [showModal, setShowModal] = useState(false)
  const [value, setValue] = useState('')
  const [data, setData] = useState(baseData)
  const [rerender, setRerender] = useState(false)

  const addNode = (d) => {
    d.push({
      key: `${data.length + 1}`,
      label: value,
      children: [],
    })
    setData(d)
    setValue('')
  }

  const removeNode = (d) => {
    if (d.parent) {
      let t = 0
      d.parent.children = d.parent.children.filter(el => el.key !== d.key)
      d.parent.children.map(el => (
        el.key = `${el.parent.key}-${++t}`
      ))
      setRerender(!rerender)
    } else {
      let p = [...data]
      p = p.filter(el => el.key !== d.key)
      for(let i  = 0; i < p.length; i++){
        p[i].key = `${i}`
      }
      setData(p)
    }
  }

  const flipModal = () => {
    setShowModal(!showModal)
  }

  const handleReset  = () => {
    setData(baseData)
  }

  return (
    <div className='bg'>
      <div className='box'>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Tree</h2>
        <Tree className='tree' data={data} removeNode={removeNode} />
        {showModal ? <TreeNodeModal value={value} setValue={setValue} flipModal={flipModal} node={data} addNode={addNode} /> : null}
        <div className='grow' />
        <div className='btns'>
          <button className='btn' onClick={flipModal}>Add Parent Node</button>
          <button className='btn' onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
