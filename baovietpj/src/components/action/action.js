import { add_user,remove_user } from "../const";

export const actAdduser = (connect) => {
    return {
        type: "add_user ",
        connect,
    }
}