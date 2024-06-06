"use client";

import diaryApi, { DiaryListType } from "@/apis/diary";
import { useState } from "react";
import FilterDiary from "./FilterDiary";
import ListDiaries from "./ListDiaries";
import React from "react";
import IDiary from "@/models/Diary";
import { useRouter } from "next/navigation";
import { checkPermission } from "@/models/Token";

export default function   ListDiaryWaitingConfirm() {
  const [filterValue, setFilterValue] = useState(0);
  const [listDiariesConfirm, setListDiariesReview] = React.useState<IDiary[]>(
    []
  );
  const [token, setToken] = useState(null);

  const fetchInitialData = async () => {
    if (filterValue != 0) {
      const lsDiariesRecent: IDiary[] =
        (await diaryApi.getListAllDiariesByConstructionSite(
          filterValue,
          DiaryListType.WaitingConfirm
        )) || [];
      setListDiariesReview(lsDiariesRecent);
    } else {
      const lsDiariesRecent: IDiary[] =
        (await diaryApi.getListAllDiaries(DiaryListType.WaitingConfirm)) || [];
      setListDiariesReview(lsDiariesRecent);
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
      router.push("/construction-diaries/confirm/" + id);
    }
    else {
      router.push("/construction-diaries/" + id);
      }
  };

  async function handleChangeFilter(value: number) {
    setFilterValue(value);
    const lsDiariesRecent: IDiary[] =
      (await diaryApi.getListAllDiariesByConstructionSite(
        value,
        DiaryListType.WaitingConfirm
      )) || [];
    setListDiariesReview(lsDiariesRecent);
  }
  return (
    <div>
      <FilterDiary value={filterValue} onChangeCS={handleChangeFilter} />
      <ListDiaries lsDiaries={listDiariesConfirm} handleDoubleClick={handleDoubleClick}/>
    </div>
  );
}