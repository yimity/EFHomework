import UserMessage from '../components/UserMessage'
import { ADDUser, DELETEUser, EDITUser } from './actions';
const initState = {
  sumNumber: 1,
  userList: [
    {
      firstName: "Amanda",
      lastName: "Harvey",
      email: "amanda@site.com",
      occupation: "Director",
      department: "Human resources",
      country: "United Kingdom",
      status: "Active",
      portfolio: 72,
      role: "Employee",
    }
  ]
};
export const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case ADDUser:
      return {
        sumNumber: state.sumNumber + 1,
        userList: [...state.userList, action.newUser]
      }
    case DELETEUser:
      state.userList.splice(action.index, 1)
      return {
        sumNumber: state.sumNumber - 1,
        userList: [...state.userList]
      }
      case EDITUser:
      state.userList[action.index]=action.newUser;
      return {
        userList: [...state.userList]
      }
    default:
      return initState
  }
}

export default reducer;
