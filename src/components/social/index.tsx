import { ReactNode } from 'react'
import './social.modules.css'


interface SocialProps {
  url: string;
  children: ReactNode;
}


export default function Social({url, children}: SocialProps) {
  return (
    <a
      className="C-social_link"
      href={url}
      rel="noopener noreferrer"
      target='_blank'
      >
        {children}
    </a>
  )
}