import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery }from 'react-query'
import { getUser } from '../mocks/api'

export default function Home() {
  const navigate = useNavigate();

  //  3번째 인자를 추가하면, 데이터를 stale하지 않은(신선한) 상태라고 판단하여, refetch하지 않는다.
  const { data, isLoading } = useQuery('@getUser', getUser);

 
  // App.js에서 전역적으로 queryClient 객체 생성시에 staleTime 속성외에도, suspense 속성을 true로 주고
  // <Suspense fallback={}></Suspense>에 하위 컴포넌트들을 감싼 형태로 작성해주면
  // 아래의 if 조건문과 같이 작동하도록 할 수 있다.
  // Home페이지 뿐만 아니라, Edit 페이지에서 리프레시 할 때도 똑같이 동작할 것이다.
  // if(isLoading) return <span>Loading...</span>
  return (
    <div>
      <h1>Hello, {data.nickName}</h1>
      <button onClick={() => navigate("/edit")}>Go Edit Page</button>
    </div>
  );
}
