/* eslint-disable react/display-name */
import React from 'react'
import { PropsWithChildren, forwardRef } from 'react'

type GridProps = PropsWithChildren

export const Grid = forwardRef<HTMLDivElement, GridProps>(({ children }, ref) => (
  <div className="c-fixed-table__grid" role="grid">
    <div className="c-fixed-table__grid-inner" ref={ref}>
      {children}
    </div>
  </div>
))
