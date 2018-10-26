const getters = {
  USER_TOKEN: state => state.login_info.token,
  USER_MENU: state => {
    return state.authorize.user_menu_list;
  },
  ACTIVED_PAGE: state => {
    return state.tabs.active_tab;
  },
  SIDEBAR_COLLAPSE: state => {
    return state.stats.siderbar.opened;
  }
};
export default getters;
