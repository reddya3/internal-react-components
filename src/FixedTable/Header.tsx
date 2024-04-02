import React from 'react'
import { PropsWithChildren } from 'react'

type HeaderProps = PropsWithChildren

export const Header = ({ children }: HeaderProps) => <div className="c-fixed-table__header">{children}</div>
