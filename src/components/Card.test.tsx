import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('应该正确渲染标题和描述', () => {
    render(<Card title="测试标题" description="测试描述" />)
    expect(screen.getByText('测试标题')).toBeInTheDocument()
    expect(screen.getByText('测试描述')).toBeInTheDocument()
  })

  it('应该应用正确的样式类', () => {
    const { container } = render(
      <Card title="标题" description="描述" />
    )
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('bg-white', 'rounded-lg', 'shadow-md')
  })
})

