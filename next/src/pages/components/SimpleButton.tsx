import React from 'react'

type SimpleButtonProps = {
  text: string
  onclick?: () => void
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  return <button onClick={props.onclick}>{props.text}</button>
}

export default SimpleButton
