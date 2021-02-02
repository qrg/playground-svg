import { FC } from 'react'

import { Artboard } from './components/artboard'
import { NodeLayer } from './components/node-layer'
import { Node, NodeSchema } from './components/node'
import { LineLayer } from './components/line-layer'
import { Line } from './components/line'

type Link = {
  from: NodeSchema['id']
  to: NodeSchema['id']
}

type Schema = {
  nodes: NodeSchema[]
  links: Link[]
}

const schema: Schema = {
  nodes: [
    {
      id: '1',
      content: 'A',
      coords: [8, 8],
    },
    {
      id: '2',
      content: 'B',
      coords: [128, 64],
    },
  ],
  links: [
    {
      from: '1',
      to: '2',
    },
  ],
}
export const App: FC = () => {
  const { nodes, links } = schema
  console.log(nodes, links)
  return (
    <Artboard>
      <NodeLayer>
        {nodes.map((node) => (
          <Node {...node} key={node.id} />
        ))}
      </NodeLayer>
      <LineLayer>
        <Line />
      </LineLayer>
    </Artboard>
  )
}
