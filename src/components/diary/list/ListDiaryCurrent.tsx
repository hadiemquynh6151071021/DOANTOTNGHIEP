"use client";

import diaryApi, { DiaryListType } from "@/apis/diary";
import { useState } from "react";
import FilterDiary from "./FilterDiary";
import ListDiaries from "./ListDiaries";
import React from "react";
import IDiary from "@/models/Diary";
import { useRouter } from "next/navigation";
import { checkPermission } from "@/models/Token";

export default function ListDiaryCurrent() {
  const [filterValue, setFilterValue] = useState(0);
  const [listDiariesResent, setListDiariesResent] = React.useState<IDiary[]>(
    []
  );
  const [token, setToken] = useState(null);

  const fetchInitialData = async () => {
    if (filterValue != 0) {
      const lsDiariesRecent: IDiary[] =
        (await diaryApi.getListAllDiariesByConstructionSite(
          filterValue,
          DiaryListType.Recent
        )) || [];
      setListDiariesResent(lsDiariesRecent);
    } else {
      const lsDiariesRecent: IDiary[] =
        (await diaryApi.getListAllDiaries(DiaryListType.Recent)) || [];
      setListDiariesResent(lsDiariesRecent);
    }
  };

  React.useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    fetchInitialData();
  }, []);

  const router = useRouter();
  const handleDoubleClick = (id: number) => {
    if(checkPermission(token)===1){
      router.push("/construction-diaries/" + id);
    }
    else if(checkPermission(token)===2){
      router.push("/construction-diaries/approve/" + id);
    }
    else {
      router.push("/construction-diaries/confirm/" + id);}
  };

  async function handleChangeFilter(value: number) {
    setFilterValue(value);
    const lsDiariesRecent: IDiary[] =
      (await diaryApi.getListAllDiariesByConstructionSite(
        value,
        DiaryListType.Recent
      )) || [];

    setListDiariesResent(lsDiariesRecent);
  }
  return (
    <div>
      <FilterDiary value={filterValue} onChangeCS={handleChangeFilter} />
      <ListDiaries lsDiaries={listDiariesResent} handleDoubleClick={handleDoubleClick} />
    </div>
  );
}