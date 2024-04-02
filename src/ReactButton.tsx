import React from 'react';
import { Button } from '@els/els-react--button';

// Define the props expected by the Button component
export interface ButtonProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode; // Explicitly include children here
}

// Define the Button component
const ReactButton: React.FC<ButtonProps> = ({ type = "button", children, onClick, ...buttonProps }) => (
  <Button type={type} onClick={onClick} {...buttonProps}>
    {children}
  </Button>
);

export default ReactButton;