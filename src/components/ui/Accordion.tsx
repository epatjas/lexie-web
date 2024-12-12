'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import styles from './Accordion.module.css'

interface AccordionProps {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button 
        className={styles.trigger} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown size={20} className={styles.icon} />
      </button>
      <div className={styles.content}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </div>
  )
} 