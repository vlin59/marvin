export default function (state = {}, action) {
 switch (action.type) {
    case 'USER_SET':
      console.log(action.options.data);
      return 'I SHOULD BE USER PROP'

    default:
      return state;
  }

};
