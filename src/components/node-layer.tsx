import type { ReactNode } from 'react'

type NodeLayerProps = {
  children: ReactNode
}

export const NodeLayer = ({ children }: NodeLayerProps) => (
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
