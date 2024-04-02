import React from 'react'
import { PropsWithChildren } from 'react'

type HoverContentProps = PropsWithChildren

export const HoverContent = ({ children }: HoverContentProps) => (
  <div className="c-fixed-table__hover-content">{children}</div>
)
