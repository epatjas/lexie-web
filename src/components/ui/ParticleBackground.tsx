'use client'
import { useEffect, useRef } from 'react'
import styles from './ParticleBackground.module.css'

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match window size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle settings
    const particles: Particle[] = []
    const particleCount = 100
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      // Calculate starting position in the middle section of the screen
      const startingY = (canvas.height * 0.2) + (Math.random() * canvas.height * 0.8) // Between 30% and 70% of screen height
      const startingX = (canvas.width * 0.1) + (Math.random() * canvas.width * 0.4) // Between 10% and 50% of screen width
      
      particles.push({
        x: startingX,
        y: startingY,
        size: Math.random() * 1.7 + 1,
        speedY: -Math.random() * 0.5 - 0.2,
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle) => {
        // Update particle position
        particle.y += particle.speedY

        // Reset particle if it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height * 0.7 // Reset to 70% of screen height
          particle.x = (canvas.width * 0.1) + (Math.random() * canvas.width * 0.4) // Reset X position between 10% and 50%
        }

        // Draw particle with soft edges
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
} 