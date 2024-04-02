import React from 'react'
import { PropsWithChildren } from 'react'

type MessageProps = PropsWithChildren

export const Message = ({ children }: MessageProps) => <span className="c-fixed-table__message">{children}</span>
