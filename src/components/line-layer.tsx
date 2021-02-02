import { FC } from 'react'

export const LineLayer: FC = ({ children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 768 512"
      style={{ backgroundColor: '#eee' }}
    >
      {children}
    </svg>
  )
}
