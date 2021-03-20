import Vue from 'vue'
import screenfull from 'screenfull'

const sf = screenfull

export default Vue.extend({
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  methods: {
    change() {
      if (sf.isEnabled) {
        this.isFullscreen = sf.isFullscreen
      }
    },
    click() {
      if (!sf.isEnabled) {
        this.$message({
          message: '浏览器不支持全屏',
          type: 'warning'
        })
        return false
      }
      sf.toggle()
    }
  },
  mounted() {
    if (sf.isEnabled) {
      sf.on('change', this.change)
    }
  },
  beforeDestroy() {
    if (sf.isEnabled) {
      sf.off('change', this.change)
    }
  },
  render() {
    return (
      <div id="screenfull">
        <svg-icon
          name={this.isFullscreen ? 'exit-fullscreen' : 'fullscreen'}
          onClick={this.click}
        />
      </div>
    )
  }
})
