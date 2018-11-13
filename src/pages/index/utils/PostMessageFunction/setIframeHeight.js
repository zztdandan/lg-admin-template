// 一个设置iframe高度的函数，用于设置
export function setIframeHeight1({ iframe_name, iframe_height }, that_vue) {
  let a = iframe_height;
  if (typeof iframe_height === "number") {
    a = iframe_height + "px";
  }
  $("#" + iframe_name).attr("height", a);
  return 0;
}
