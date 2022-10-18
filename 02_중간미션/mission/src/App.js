import { useState, useEffect } from 'react';
import cards from './components/Cards';
import Result from './components/Result';

function App() {
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [card, setCard] = useState([]);
  const [num, setNum] = useState([]);

  const getCards = () => {
    const cardList = cards;
    setCard(cardList);
  }

  useEffect(() => {
    getCards();
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  useEffect(() => {
    card.splice(num[num.length - 1], 1);
    return () => {
      if(num.length === 3){
        alert(`당첨자는 ${card[num[0]].name}, ${card[num[1]].name}, ${card[num[2]].name}`);
      }
    }
  }, [num, card])

  

  const handleChange = () => {
    const randomNum = Number((Math.random() * 9).toFixed(0));
    setClicked(() => !clicked);
    if(!num.includes(randomNum)){
      setNum(() => [...num, randomNum]);
    } else{
      return num[num.length - 1];
    }
  };
  console.log(num);
  console.log(card);
  

  return (
    <div>
        <h1>명함 추첨 {loading ? 'Loading...' : <button onClick={handleChange} style={{marginTop: '20px'}}>추첨하기</button>}</h1>
        {card.map((card,idx) => {
          return idx === num[num.length - 1] ? <Result
            key = {card.company}
            company = {card.company}
            team = {card.team}
            name = {card.name}
            phoneNumber = {card.phoneNumber}
            email = {card.email}
          /> : ''
        })}

    </div>
  );
}

export default App;
