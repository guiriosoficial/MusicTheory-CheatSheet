import { useState } from 'react'
import { ChromaticScale, Scales, ScalesStructures, CircleOfFifths, EnharmonicNotes, Distances } from '../dictionaries'

import './App.css'

function App() {
  const [key, setKey] = useState(ChromaticScale[0])
  const [type, setType] = useState(Scales.Jonian)
  const [result, setResult] = useState([])

  const notes = ChromaticScale.map((note, i) => <option key={i} value={note}>{note}</option>)
  const scales = Object.keys(Scales).map((scale, i) => <option key={i} value={Scales[scale]}>{Scales[scale]}</option>)


  function reorderChromatic (k) {
    const index = ChromaticScale.indexOf(k);
    return ChromaticScale.slice(index).concat(ChromaticScale.slice(0, index));
  }

  function getRelative (k) {

  }

  function flatsToSharps (k) {

  }

  function generateScale (k, t) {
    let s = []
    const chromatic = reorderChromatic(k);
    console.log(ScalesStructures[t]);
    
    ScalesStructures[t]?.intervals.forEach((interval) => {
      return s.push(chromatic[interval]);
    });

    const c = ScalesStructures[t].type === 'major' ? k : chromatic[Distances.TST]

    if (CircleOfFifths[c].sharps) {
      s = s.map((note) => EnharmonicNotes[note] || note)
    }
  
    setResult(s);
  }

  return (
    <>
      <div>
        <select value={key} onChange={(e) => setKey(e.target.value)}>
          {notes}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {scales}
        </select>
      </div>
      <button onClick={() => generateScale(key, type)}>generate</button>
      {/* Scale: {generateScale(key, scale).join(' ')} */}
      Scale: {result.join(' ')}
    </>
  )
}

export default App
