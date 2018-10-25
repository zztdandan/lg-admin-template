const getters = {
  USER_TOKEN: state => state.login_info.token,
  USER_MENU: state => {
    return state.authorize.user_menu_list;
  }
};
export default getters;
