export const  renderWithRouter=(
    ui,
    {
      route = '/',
      history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
  ) =>{
    const Wrapper = ({ children }) => (
      <Router history={history}>{children}</Router>
    )
    return {
      ...render(ui, { wrapper: Wrapper }),
      // adding `history` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      history,
    }
  }