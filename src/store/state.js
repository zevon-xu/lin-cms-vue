
import stageConfig from '@/config/stage' // 引入舞台配置

export default {
  logined: false, // 是否登录
  user: null, // 当前用户
  tabs: [], // 浏览历史
  defaultActive: '',

  // 推送消息
  readedMessages: [],
  unreadMessages: [],
  auths: [], // 每个用户的所有权限

  // 舞台配置
  stageConfig,
  // 当前页信息
  currentRoute: {
    config: null,
    treePath: [],
  },
}
