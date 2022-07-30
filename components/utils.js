import { isEmpty, isEqual } from "lodash";

export let Combine = (arr = []) => {
  let res = [],
    copy = [...arr];
  while (!isEmpty(copy)) {
    let f = {
      title: copy[0]?.title,
      data: [copy[0]?.data],
    };
    copy = copy.filter((item) => !isEqual(item, copy[0]));
    for (let item of copy)
      if (isEqual(item?.title, f?.title)) {
        f.data.push(item?.data);
        copy = copy.filter((c) => !isEqual(c, item));
      }
    res.push(f);
  }
  return res;
};
