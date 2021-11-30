export { default as SignIn } from '../../components/session/SignIn.vue'
export { default as Box } from '../../components/Box.vue'
export { default as Card } from '../../components/Card.vue'
export { default as CardTestHover } from '../../components/CardTestHover.vue'
export { default as DashboardSidebar } from '../../components/DashboardSidebar.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as GoToBtn } from '../../components/GoToBtn.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Location } from '../../components/Location.vue'
export { default as NavbarList } from '../../components/NavbarList.vue'
export { default as ShoppingCart } from '../../components/ShoppingCart.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
