import { cloneElement, isValidElement, type CSSProperties, type ReactElement } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealableProps = {
  className?: string
  style?: CSSProperties
}

export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactElement<RevealableProps>
  delay?: number
}) {
  const { ref, visible } = useReveal<HTMLElement>()

  if (!isValidElement(children)) return children

  return cloneElement(children, {
    ref,
    className: [children.props.className, 'reveal', visible && 'reveal--visible']
      .filter(Boolean)
      .join(' '),
    style: { ...children.props.style, transitionDelay: visible ? `${delay}ms` : undefined },
  } as RevealableProps & { ref: typeof ref })
}
