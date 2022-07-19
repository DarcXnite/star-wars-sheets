import React from 'react'
import Input from '../ui/Input'

export default function Talent({
  talent: { talentName, rank, xpCost, passive, summary },
  characterForm,
  setCharacterForm,
  talentIndex,
}) {
  const updateTalent = (e, idx) => {
    const updatedTalents = characterForm.talents.map((talent, i) => {
      if (idx === i) {
        return { ...talent, [e.target.name]: e.target.value }
      } else {
        return talent
      }
    })
    setCharacterForm({ ...characterForm, talents: updatedTalents })
  }

  const passiveCheck = (e, idx) => {
    const updatedTalents = characterForm.talents.map((talent, i) => {
      if (idx === i) {
        return { ...talent, [e.target.name]: !passive }
      } else {
        return talent
      }
    })
    setCharacterForm({ ...characterForm, talents: updatedTalents })
  }

  const removeTalent = () => {
    const updatedTalents = characterForm.talents.filter(
      (tal, i) => i !== talentIndex
    )
    setCharacterForm({ ...characterForm, talents: updatedTalents })
  }

  return (
    <React.Fragment>
      <div className='grid grid-cols-6 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-20 h-5'
          type='text'
          value={talentName}
          name='talentName'
          onChange={e => updateTalent(e, talentIndex)}
        />

        <Input
          className='w-20 h-5'
          type='number'
          value={rank}
          name='rank'
          onChange={e => updateTalent(e, talentIndex)}
          min='0'
        />

        <Input
          className='w-20 h-5'
          type='number'
          value={xpCost}
          name='xpCost'
          onChange={e => updateTalent(e, talentIndex)}
          min='0'
        />

        <Input
          className='w-20 h-5'
          type='checkbox'
          name='passive'
          checked={passive}
          onChange={e => passiveCheck(e, talentIndex)}
        />

        <Input
          className='w-20 h-5'
          type='text'
          value={summary}
          name='summary'
          onChange={e => updateTalent(e, talentIndex)}
        />
        <button onClick={removeTalent}>
          <span className='material-symbols-outlined'>delete</span>
        </button>
      </div>
    </React.Fragment>
  )
}
