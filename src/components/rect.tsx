import { FC } from 'react'

export const Rect: FC = ({ children }) => (
  <g>
    <rect x="8" y="8" width="64" height="40" rx="4" ry="4">
      {children}
    </rect>
    <text x="16" y="32" stroke="none" fill="#aaa" fontSize="10px">
      SVG Text
    </text>
  </g>
)
