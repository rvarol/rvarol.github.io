import React from 'react';

export type ProjectItem = {
  label: string,
  title: string,
  description: string,
  keywords: string[],
  image_url: string,
}

export type NavbarProps = {
  tabChangeHandler: React.Dispatch<React.SetStateAction<string>>
}

export type SidebarProps = {
  tabChangeHandler: React.Dispatch<React.SetStateAction<string>>
}

export type FeaturedPublication = {
  title: string,
  authors: string[],
  journal: string,
  date: string,
  abstract: string,
  image_url: string,
  doi: string,
  link: string,
  citation: string,
  journal_link: string,
  listed: boolean
}

export type FeaturedPublicationPanelProps = {
  publication: FeaturedPublication
}

export type ClipboardButtonProps = {
  label: string,
  textToCopy: string
}