import UserMessage from "../components/UserMessage";

export const ADDUser = "ADD"
export const DELETEUser = "DELETE"
export const EDITUser = "EDIT"

function createUserAction(myType:string,user?:UserMessage,myIndex?:number){
	return {
    type:myType,
		newUser:user,
    index:myIndex,
	}
}

export default createUserAction;