import "linqjs";

export default async function(route, that_vue, store) {
  console.log("do_router_check",route)
  if (route.name === "home_menu") {
    const page_id = route.params.page_id;
    const menu_list = store.getters.USER_MENU;
    const match_page = menu_list.where(x => x.code === page_id);
    if (match_page.length > 0) {
      // 有权限访问这个页面
      that_vue.$store.dispatch("open_page", match_page.first());
      return 0;
    } else {
      // 无权访问该页面
      throw new Error("无权访问页面");
    }
  }
}
