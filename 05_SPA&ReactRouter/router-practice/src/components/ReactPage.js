import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr'

export default function ReactPage() {
    // api call => react 페이지에 해당하는 글의 목록을 응답 받음.
    // const [docs, setDocs] = useState([]);
    const [number, setNumber] = useState(0);

    const fetcher = async(url) => {
            const result = await axios.get(url);
            console.log(result.data);
            return result.data; 
    }
    const { data: docs, error } = useSWR('posts', () => fetcher('https://jsonplaceholder.typicode.com/posts'))
    if(!docs) return <div>Loading...</div>
    if(error) return <div>Failed to Load</div>

    // const docs = [
    //     {
    //         id: 1,
    //         title: 'React 공부를 시작하면서',
    //         date : '05/01/2021',
    //     },
    //     {
    //         id: 2,
    //         title: 'CRA 없이 리액트 프로젝트 시작하기',
    //         date : '12/01/2021',
    //     },
    //     {
    //         id: 3,
    //         title: 'useMemo & useCallback',
    //         date : '31/01/2022',
    //     },
    //     {
    //         id: 4,
    //         title: 'React 프로젝트에 Prettier 적용하기',
    //         date : '15/02/2022',
    //     },
    //     {
    //         id: 5,
    //         title: 'React setState() 제대로 사용하기',
    //         date : '28/02/2022',
    //     }
    // ]

    /* fetchAPI */
    // useEffect(() => {
    //     async function fetchData(){
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const result = await res.json();
    //         console.log(result); // 이 결과값을 상태값으로 변경
    //         // setDocs(result);
    //         return result;
    //     }
    //     // async를 붙인 함수를 호출하면, 결과는 무조건 promise
    //     fetchData().then(res => {
    //         setDocs(res);
    //     })
    // }, [])

    /* axios */
    // useEffect(() => {
    //     async function fetchData(){
    //         const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         console.log(result);
    //         // setDocs(result);
    //         return result.data; // result는 json객체를 자동으로 변경하여 담고 있고, 이중에 우리는 data key에 담겨 있는 값을 반환해야한다.
    //     }
    //     // async를 붙인 함수를 호출하면, 결과는 무조건 promise
    //     fetchData().then(res => {
    //         setDocs(res);
    //     })
    // }, [])


    // useEffect의 첫 번째 인자인 콜백함수는 아무것도 반환하지 않거나, return하는 unmount만 반환해야하는데, 
    // 이 콜백함수가 promise를 반환하고 있으므로, 작동은 하겠지만, compile 과정에서 오류가 발생한다.

    // useEffect(async () => {
    //     const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //     setDocs(result.data);
    // }, [])

    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            {docs.map(doc => (
                <Link key={doc.id} to={`${doc.id}`} style={{display: 'block'}}>{doc.title}</Link>
            ))}
        </div>
    )
}