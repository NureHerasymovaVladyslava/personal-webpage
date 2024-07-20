import React from 'react'
import { useInView } from 'react-intersection-observer'

export default function DelayedDisplayComponent(props) {
    const {children} = props
    const {ref, inView, entry} = useInView({
        triggerOnce: true,
        threshold: 0.3
    })
    return (
        <div ref={ref}
            className={`transition-opacity duration-1000 ${
            inView ? 'opacity-100 animate-fadeIn' : 'opacity-0'
          }`}>
            {children}
        </div>
    )
}
