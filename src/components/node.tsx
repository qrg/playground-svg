import { FC } from 'react'

import { Coordinates } from '../types'
export type NodeSchema = {
  id: string
  content: string
  coords: Coordinates
}

export type NodeProps = NodeSchema

const Node: FC<NodeProps> = ({ coords, content, children }) => {
  const [x, y] = coords
  return (
    <div
      style={{
        position: 'absolute',
        minWidth: '8px',
        minHeight: '8px',
        padding: '4px 8px',
        backgroundColor: '#a5a4a8',
        borderRadius: '3px',
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {content}
      {children}
    </div>
  )
}

Node.defaultProps = {
  id: '',
  content: '',
  coords: [8, 8],
}

export { Node }
