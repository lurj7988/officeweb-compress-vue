const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  node: state => state.compress.node,
  loading: state => state.compress.loading
}
export default getters
