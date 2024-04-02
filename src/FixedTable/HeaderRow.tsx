import React from 'react'
import { PropsWithChildren } from 'react'

type HeaderRowProps = PropsWithChildren

export const HeaderRow = ({ children }: HeaderRowProps) => (
  <div className="c-fixed-table__header-row" role="row">
    {children}
  </div>
)
