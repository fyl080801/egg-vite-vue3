import Vue from 'vue'
import { isExternal } from '@/utils/validate'

export default Vue.extend({
  name: 'SidebarItemLink',
  props: {
    to: { type: String, required: true }
  },
  methods: {
    isExternal(value: string) {
      return isExternal(value)
    }
  },
  render() {
    return (
      <div>
        {this.isExternal(this.to) ? (
          <a href={this.to} target="_blank" rel="noopener">
            {this.$slots.default}
          </a>
        ) : (
          <router-link to={this.to}>{this.$slots.default}</router-link>
        )}
      </div>
    )
  }
})
