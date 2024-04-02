import React from 'react'
import { PropsWithChildren } from 'react'

type HeadProps = PropsWithChildren

export const Head = ({ children }: HeadProps) => (
  <div className="c-fixed-table__head" role="rowgroup">
    {children}
  </div>
)
