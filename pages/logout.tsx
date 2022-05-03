import { useRouter } from "next/router";
import React,{FC, useState} from "react";
import { useUserContext } from "../Components/userContext";


const logout:FC = () => {
    const {user,logout} = useUserContext()
    const router = useRouter()
    logout?.();
    router.push('/')

    return(<>
    </>)
}
export default logout
