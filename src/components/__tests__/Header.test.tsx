import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../Header'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

function setupMatchMedia(matches = false) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
}

describe('Header navigation', () => {
  beforeEach(() => {
    localStorage.clear()
    document.body.dataset.theme = ''
    setupMatchMedia(false)
    ;(usePathname as jest.Mock).mockReturnValue('/portfolio')
  })

  it('opens and closes the menu', async () => {
    render(<Header />)
    const button = screen.getByLabelText('Toggle navigation menu')
    const nav = screen.getByRole('navigation')

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(nav.className).not.toMatch('open')

    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(nav.className).toMatch('open')

    const link = screen.getByRole('link', { name: /home/i })
    await userEvent.click(link)

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(nav.className).not.toMatch('open')
  })

  it('highlights the active link', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/portfolio/about')
    render(<Header />)
    const aboutLink = screen.getByRole('link', { name: /work experience/i })
    expect(aboutLink.className).toMatch('active')
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink.className).not.toMatch('active')
  })
})
