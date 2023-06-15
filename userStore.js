import { createContainer } from "unstated-next";
import {useEffect, useState} from 'react';

function useUserStore () {
    const [user, setUser] = useState('white'); 
    useEffect(()=>{
        const localStorageItem = JSON.parse(localStorage.getItem("color"));
        if(localStorageItem){
            setUser(localStorageItem); 
        }
      },[])
    return {user, setUser};
}
export const UserStore = createContainer(useUserStore);