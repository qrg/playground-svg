import { FC } from 'react'

export const NodeLayer: FC = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
    }}
  >
    {children}
  </div>
)
