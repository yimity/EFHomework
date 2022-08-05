
export const AddUser = 'add';

function createAddUserAction(myType: string, user: any) {
  return {
    type: myType,
    newUser: user,
  }
}
export default createAddUserAction;