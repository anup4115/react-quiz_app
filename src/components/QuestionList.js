import React from 'react'

export default function QuestionList({question,options=[],handleClick,currentAnswer}) {
  return (
    <>
      <h1>{question}</h1>
    <div className='container'>
      <ul>
      {options.map((option,index)=>(
        <li key={index} onClick={()=>handleClick(option)} className={currentAnswer===option?'selected':''} >{option}</li>
      ))}
      </ul>
    </div>
    </>
  )
}

