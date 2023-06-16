import type { ReactNode } from 'react'

type ArtboardProps = {
  children: ReactNode
}

export const Artboard = ({ children }: ArtboardProps) => (
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
