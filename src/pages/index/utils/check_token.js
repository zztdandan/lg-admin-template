import { getToken } from "@/utils/auth";
async function do_check_token(that_vue, axios) {
  // 一系列登录后权限、用户信息获取。都是用token去找后台
  let token = getToken();
  // let axios = that_vue.$ajax;
  const { data: res_menu } = await axios.get("/api/get_menu");
  // console.log(res_menu);
  const { data: res_auth } = await axios.get("/api/get_user_auth");
  // console.log(res_auth);
  const { data: res_role } = await axios.get("/api/get_user_role");
  // console.log(res_role);
  const { data: res_user_info } = await axios.get("/api/user_info");
  // console.log(res_user_info);
  if (
    res_menu.code !== 0 ||
    res_auth.code !== 0 ||
    res_role.code !== 0 ||
    res_user_info.code !== 0
  ) {
    // 返回出错了
    // console.log("1",  res_menu.code,"2", res_auth.code,"3", res_role.code ,"4", res_user_info.code)
    throw new Error("获取权限信息失败");
  } else {
    // 登陆操作
    let login = that_vue.$store.dispatch("User_Login", res_user_info.data);
    // 设置权限、角色、用户侧边栏目录
    let res1 = await that_vue.$store.dispatch("SetAuth", res_auth.data);
    let res2 = await that_vue.$store.dispatch("SetMenu", res_menu.data);
    let res3 = await that_vue.$store.dispatch("SetRole", res_role.data);
  }
}

export default do_check_token;
