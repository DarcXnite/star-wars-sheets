import { v4 as uuidv4 } from 'uuid'
import Cybernetic from './inventoryComponents/Cybernetic'

export default function CyberneticsInfo({
  setCharacterForm,
  characterForm: { cybernetics },
  characterForm,
}) {
  const allCybernetics = cybernetics.map((cybernetic, idx) => {
    const { _id } = cybernetic
    return (
      <details>
        <summary>Cybernetics</summary>
        <Cybernetic
          key={_id}
          cybernetics={cybernetics}
          cybernetic={cybernetic}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          cyberneticIdx={idx}
        />
      </details>
    )
  })

  const initialCyberneticsForm = {
    implantName: '',
    active: false,
    summary: '',
    rarity: 0,
  }

  const addCybernetic = () => {
    cybernetics.push(initialCyberneticsForm)
    setCharacterForm({ ...characterForm, cybernetics })
  }

  return (
    <div>
      <h2>Cybernetics</h2>
      {allCybernetics}
      <button onClick={addCybernetic}>
        <span className='material-symbols-outlined'>add</span>
      </button>
    </div>
  )
}
