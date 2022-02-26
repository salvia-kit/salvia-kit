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
  version?: number;
  mainComp?: boolean;
}

export interface DocVueNuxtType {
  techno?: 'vue' | 'nuxt';
  section?: boolean;
  version?: number;
}

export interface SvelteDocType {
  snippet: 'short' | 'long';
  version?: number;
}
