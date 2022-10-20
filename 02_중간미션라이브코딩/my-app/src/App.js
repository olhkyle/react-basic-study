import './App.css';
import React, { useEffect,useState } from 'react';
import datas from './data/Cards';
import BusinessCard from './components/BusinessCard';

// 추첨하기 버튼과 명함 컴포넌트를 구현
function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  const draw = () => {
    if(pickedCards.length > 2){
      const names = pickedCards.reduce((prev,curr) => {
        return prev = prev.concat(`${curr.name}, `)
      }, '');
      return alert(`당첨자는 ${names} 입니다.`);
    }
    // 추첨하기 버튼을 누르면, 랜덤하게 하나의 명함을 고른다.
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 중복 제거
    setCards(cards.filter((c) => {return c.phoneNumber !== randomItem.phoneNumber}));
    // 당첨자는 나중에 확인하기 위해, 별도의 데이터로 저장 => 배열 형태
    setPickedCards([...pickedCards, randomItem])
  }

  // component가 마운트 되었을 때에만 cards를 가져오도록
  useEffect(() => {
    // cards
    setCards(datas);
  }, [])

  console.log(cards);
  console.log(pickedCards);


  // 변수로 뽑아서 정리해도 깔끔 
  // key는 props로 넘겨지지 않는다.
  const result = pickedCards.map(card => {
    return <BusinessCard
    info = {card}
    key = {card.phoneNumber}
  />
  });

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {pickedCards.length > 0 && result}
    </div>
  );
}

export default App;
