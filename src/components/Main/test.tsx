import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //render the component
    const { container } = render(<Main />)
    //search for the element and verify its existence
    expect(
      screen.getByRole('heading', { name: /react boilerplate/i })
    ).toBeInTheDocument()

    //generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
