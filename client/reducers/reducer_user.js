export default function (state = null, action) {
  switch (action.type) {
    case "USER_SET":
      return action.options.data;
  }

  return state;
};