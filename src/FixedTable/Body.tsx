import React from 'react'
import { PropsWithChildren } from 'react'

export type BodyProps = PropsWithChildren

export const Body = ({ children }: BodyProps) => (
  <div className="c-fixed-table__body" role="rowgroup">
    {children}
  </div>
)
