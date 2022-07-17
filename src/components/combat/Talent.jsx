import React from 'react'

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
      <label htmlFor='talentName'>Talent</label>
      <input
        type='text'
        value={talentName}
        name='talentName'
        onChange={e => updateTalent(e, talentIndex)}
      />

      <label htmlFor='rank'>Rank</label>
      <input
        type='number'
        value={rank}
        name='rank'
        onChange={e => updateTalent(e, talentIndex)}
        min='0'
      />

      <label htmlFor='xpCost'>Talent</label>
      <input
        type='number'
        value={xpCost}
        name='xpCost'
        onChange={e => updateTalent(e, talentIndex)}
        min='0'
      />

      <label htmlFor='passive'>Passive?</label>
      <input
        type='checkbox'
        name='passive'
        checked={passive}
        onChange={e => passiveCheck(e, talentIndex)}
      />

      <label htmlFor='summary'>Summary</label>
      <input
        type='text'
        value={summary}
        name='summary'
        onChange={e => updateTalent(e, talentIndex)}
      />
      <button onClick={removeTalent}>Remove Talent</button>
    </React.Fragment>
  )
}
