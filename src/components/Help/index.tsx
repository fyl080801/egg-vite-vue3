import Vue from 'vue'
import './index.scss'
import { SettingsModule } from '@/store/modules/settings'

export default Vue.extend({
  name: 'Help',
  render() {
    return (
      <div id="help" class="nav-help">
        {SettingsModule.help ? (
          <a href={SettingsModule.help} target="_blank">
            <span>帮助文档</span>
            <svg-icon name="question-circle" width="20" height="20"></svg-icon>
          </a>
        ) : null}
      </div>
    )
  }
})
