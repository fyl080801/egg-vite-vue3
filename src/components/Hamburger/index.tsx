import Vue from 'vue'
import './index.scss'

export default Vue.extend({
  name: 'Hamburger',
  props: {
    isActive: { type: Boolean, default: false }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  },
  render() {
    return (
      <div class={[{ 'is-active': this.isActive }, 'nav-hamburger']} onClick={this.toggleClick}>
        <svg-icon name="hamburger" width="20" height="20" />
      </div>
    )
  }
})
