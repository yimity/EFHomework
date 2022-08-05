export const initState = {
  userList: [
    {
      id: 1,
      name1: 'Amanda',
      name2: ' Harvey',
      email: 'amanda@site.com',
      position: 'Director',
      tel: '15291650416',
      country: 'United kingdom',
      status: 'active',
      portfolio: 50,
      ROLE: 'Employee'
    },
    {
      id: 2,
      name1: 'Amanda',
      name2: ' Harvey',
      email: 'amanda@site.com',
      position: 'Director',
      tel: '15291650416',
      country: 'United kingdom',
      status: 'active',
      portfolio: 50,
      ROLE: 'Employee'
    },
    {
      id: 3,
      name1: 'Amanda',
      name2: ' Harvey',
      email: 'amanda@site.com',
      position: 'Director',
      tel: '15291650416',
      country: 'United kingdom',
      status: 'active',
      portfolio: 50,
      ROLE: 'Employee'
    },
  ]
}

export const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'ADD':
      return {
        userList: [...state.userList, action.newUser]
      };
    case 'REMOVE':
      let x1 = 0;
      for (let i = 0; i < state.userList.length; i++) {
        if (state.userList[i].id == action.newUser) {
          x1 = i;
          break;
        }
      }
      state.userList.splice(x1, 1);

      return {
        userList: [...state.userList]
      }
    case 'Edit':
      let x = 0;
      for (let i = 0; i < state.userList.length; i++) {
        if (state.userList[i].id == action.newUser.id) {
          x = i;
          break;
        }
      }
      state.userList.splice(x, 1);

      return {
        userList: [...state.userList, action.newUser]
      }

    default:
      return initState;
  }
}

export default reducer;
