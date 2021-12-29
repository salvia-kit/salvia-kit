import React from 'react';

export interface ChildrenType {
  children: React.ReactNode;
}

export interface IIconProps {
  className?: string;
}

export interface DocType {
  techno?: 'react' | 'next';
  snippet?: 'short' | 'long';
  styleDir?: 'dashboard' | 'sidenav';
  mainComp?: boolean;
}
