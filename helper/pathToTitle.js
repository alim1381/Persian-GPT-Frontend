export const pathToTitle = (pathname) => {
  const path = pathname.split("/")[1];
  if (path === "chat") {
    return "سوال و جواب";
  } else if (path === "profile") {
    return "اطلاعات کاربری";
  } else if (path === "credit") {
    return "اعتبار";
  } else {
    return "پرشین جی پی تی";
  }
};
