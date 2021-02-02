import { FC } from 'react'

export const Artboard: FC = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}
