import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeSwitcher from '../ThemeSwitcher'
import i18n from '../../i18n'

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

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    localStorage.clear()
    document.body.dataset.theme = ''
    setupMatchMedia(false)
  })

  it('toggles between light and dark themes', async () => {
    render(<ThemeSwitcher />)
    const button = screen.getByRole('button', { name: new RegExp(i18n.t('theme.toggle'), 'i') })
    expect(button).toHaveTextContent(i18n.t('theme.dark'))
    await userEvent.click(button)
    await waitFor(() => expect(button).toHaveTextContent(i18n.t('theme.light')))
    expect(document.body.dataset.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
