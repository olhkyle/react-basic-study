import React from 'react';
import { Link } from 'react-router-dom';

export default function ReactPage() {
    // api call => react 페이지에 해당하는 글의 목록을 응답 받음.
    const docs = [
        {
            id: 1,
            title: 'React 공부를 시작하면서',
            date : '05/01/2021',
        },
        {
            id: 2,
            title: 'CRA 없이 리액트 프로젝트 시작하기',
            date : '12/01/2021',
        },
        {
            id: 3,
            title: 'useMemo & useCallback',
            date : '31/01/2022',
        },
        {
            id: 4,
            title: 'React 프로젝트에 Prettier 적용하기',
            date : '15/02/2022',
        },
        {
            id: 5,
            title: 'React setState() 제대로 사용하기',
            date : '28/02/2022',
        }
    ]
    return (
        <div>
            {docs.map(doc => (
                <Link key={doc.id} to={`${doc.id}`} style={{display: 'block'}}>{doc.title}</Link>
            ))}
        </div>
    )
}