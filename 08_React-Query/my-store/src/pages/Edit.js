// 정적 import
import axios from "axios";
import React, { useState, lazy, Suspense } from "react";
import { useQuery, useQueries, useMutation, useQueryClient } from "react-query";
import { getUser, getPosts, updateNickname } from '../mocks/api'


const Post = lazy(() => import('./Post'));

// 동적 import
import ('./math').then((math) => console.log(math(1,2)));

// api를 통해 현재 닉네임값을 가져오기
// handleSubmit : 업데이트 된 inputValue를 서버에 전송해서, 닉네임값 업데이트하기

export default function Edit() {
  const [inputValue, setInputValue] = useState("");

  // react-query
  const queryClient = useQueryClient();
  // const { data: user, isLoading } = useQuery('@getUser', getUser);

  // const { data: posts } = useQuery('@getPosts', getPosts, {
  //   staleTime: Infinity,
  // } )

  const results = useQueries([
    {queryKey: ['@getUser'], queryFn : getUser, staleTime: Infinity},
    {queryKey: ['@getPosts'], queryFn : getPosts, staleTime: Infinity},
  ])

  const mutations = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries('@getUser');
    }
  });

  const user = results[0].data;
  const posts = results[1].data;
  

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutations.mutate(inputValue)
  };

  // if(isLoading) return <span>Loading...</span>

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {user?.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <ul>
        {posts?.map(p => <Post key={p.title} title={p.title}/>)}
      </ul>
    </>
  );
}
