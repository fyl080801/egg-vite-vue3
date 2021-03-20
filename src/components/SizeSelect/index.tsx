import Vue from 'vue'
import { AppModule } from '@/store/modules/app'

export default Vue.extend({
  name: 'SizeSelect',
  data() {
    return {
      sizeOptions: [
        { label: '巨大', value: 'default' },
        { label: '适中', value: 'medium' },
        { label: '小', value: 'small' },
        { label: '极小', value: 'mini' }
      ]
    }
  },
  computed: {
    size() {
      return AppModule.size
    }
  },
  methods: {
    handleSetSize(size: string) {
      ;(this as any).$ELEMENT.size = size
      AppModule.SetSize(size)
      this.refreshView()
      this.$message({
        message: '切换成功',
        type: 'success'
      })
    },
    refreshView() {
      // In order to make the cached page re-rendered
      // TagsViewModule.delAllCachedViews()
      const { fullPath } = this.$route
      this.$nextTick(() => {
        this.$router.replace({
          path: '/redirect' + fullPath
        })
      })
    }
  },
  render() {
    return (
      <el-dropdown id="size-select" trigger="click" onCommand={this.handleSetSize}>
        <div>
          <svg-icon class="size-icon" name="size" />
        </div>
        <el-dropdown-menu slot="dropdown">
          {this.sizeOptions.map(item => (
            <el-dropdown-item
              key={item.value}
              disabled={this.size === item.value}
              command={item.value}
            >
              {item.label}
            </el-dropdown-item>
          ))}
        </el-dropdown-menu>
      </el-dropdown>
    )
  }
})
