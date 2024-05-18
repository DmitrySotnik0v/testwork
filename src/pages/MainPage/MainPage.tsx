import { useEffect } from "react";

import { Loader } from "UI";

import { useAppDispatch, useAppSelector } from "store";

import { S_loadingStatusUser, S_users } from "store/redusers/usersReduser/selectors/userSelector";
import { fetchUsers } from "store/redusers/usersReduser/usersReducer";
import { LoadingStatus } from "store/redusers/usersReduser/data/models";

import { User } from "./components";

import style from './MainPage.module.css'

const MainPage = () => {

  const users=useAppSelector(S_users)
  const loadingStatus = useAppSelector(S_loadingStatusUser)

  const dispatch=useAppDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  if (loadingStatus === LoadingStatus.PENDING) {
    return <Loader />;
  }

  return (
    <div className={style.mainPage}>
      {users.map(item=><User key={item.id} id={item.id} name={item.name}/>)}
    </div>
  )
};

export default MainPage;
