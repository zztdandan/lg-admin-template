// 针对postMessage数据的处理方式
// import setIframeHeight from "./PostMessageFunction/setIframeHeight.js";
export default async function(rsdata, that_vue) {
  try {
    let req = rsdata;
    let c = setIframeHeight;
    if (req.type === "simple") {
      const req_name = req.req_name;
      const req_param = JSON.stringify(req.req_param);
      const do_funtion_str = req_name + "(" + req_param + ",that_vue)";
      const res = eval(do_funtion_str);
      return res;
    }
  } catch (e) {
    throw new Error(e);
  }
}

//设置高度函数
function setIframeHeight({ iframe_name, iframe_height }, that_vue) {
  let a = iframe_height;
  if (typeof iframe_height === "number") {
    a = iframe_height + "px";
  }
  console.log("doset");
  $("#" + iframe_name).attr("height", a);
}
