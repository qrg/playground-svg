import type { ReactNode } from 'react'

type LineLayerProps = {
  children: ReactNode
}

export const LineLayer = ({ children }: LineLayerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 768 512"
    style={{ backgroundColor: '#eee' }}
  >
    {children}
  </svg>
)
