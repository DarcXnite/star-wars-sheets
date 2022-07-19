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
      <summary className='text-gray-800 text-xl font-bold'>
        {/* <span className='material-symbols-outlined text-4xl hover:cursor-pointer'>
          arrow_drop_down
        </span> */}
        <div className='inline-flex items-center justify-center'>
          <span className='inline'>{name}</span>
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            data-tip={toolTip}
            data-for={id}
            onMouseEnter={() => toolTipFunc(true)}
            onMouseLeave={() => toolTipFunc(false)}
            className='material-symbols-outlined ml-2 inline'
          >
            help
          </a>
        </div>
        <div className={`${!toolTipBool ? 'hidden' : ''}`}>
          <ReactTooltip id={id} />
        </div>
      </summary>
    </React.Fragment>
  )
}
