import React from 'react'
import ReactTooltip from 'react-tooltip'

export default function Summary({
  link,
  toolTip,
  toolTipFunc,
  toolTipBool,
  id,
  name,
}) {
  return (
    <React.Fragment>
      <summary className='text-gray-800 text-xl font-bold flex items-center'>
        <span className='material-symbols-outlined text-4xl hover:cursor-pointer'>
          arrow_drop_down
        </span>
        <span>{name}</span>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          data-tip={toolTip}
          data-for={id}
          onMouseEnter={() => toolTipFunc(true)}
          onMouseLeave={() => toolTipFunc(false)}
          className='material-symbols-outlined ml-2'
        >
          help
        </a>
        <div className={`${!toolTipBool ? 'hidden' : ''}`}>
          <ReactTooltip id={id} />
        </div>
      </summary>
    </React.Fragment>
  )
}
