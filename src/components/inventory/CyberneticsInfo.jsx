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
      <Cybernetic
        key={_id}
        cybernetics={cybernetics}
        cybernetic={cybernetic}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        cyberneticIdx={idx}
      />
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
      <div className='text-center text-white text-xl font-extrabold grid grid-cols-5 bg-gray-800 rounded-md'>
        <span>Implant</span>
        <span>Active</span>
        <span>Summary</span>
        <span>Rarity</span>
      </div>
      {allCybernetics}
      <button onClick={addCybernetic}>
        <span className='material-symbols-outlined'>add</span>
      </button>
    </div>
  )
}
