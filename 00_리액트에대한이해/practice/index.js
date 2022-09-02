// 버튼을 클릭하면, 해당 클래스에 해당하는 내용들이 나타나는 js


const dataMap = {
    메일 : '메일함에 6개의 새로운 메일이 들어왔습니다',
    카페 : '즐겨찾는 카페의 새 소식을 확인해보세요',
    블로그 : '오늘을 기록해보세요',
};

function clickTabItem(e){
    const key = e.target.innerHTML;
    const contentEl = document.querySelector('.tab-content');
    contentEl.innerHTML = dataMap[key];

}

function initializeTab(){
    const initialKey = '메일';
    const initialValue = dataMap[initialKey];
    const contentEl = document.querySelector('.tab-content-wrapper');
    const pEl = document.createElement('p');
    pEl.classList.add('tab-content');
    pEl.innerHTML = initialValue;
    contentEl.appendChild(pEl);

    const navBar = document.querySelectorAll('.nav-item');
    navBar.forEach((tab) => tab.addEventListener('click',clickTabItem));
}

initializeTab();



//initializeTab
// 1. 초기 키값 설정
// 2. 초기 value값 설정
// 3. 컨텐츠가 들어갈 영역을 querySelector로 변수에 담기
// 4. p 태그를 넣을 것이므로, p 태그인 요소를 새로 만들기
// 5. 클래스를 추가
// 6. p 태그 요소에 innerHTML로 내용 추가
// 7. 컨텐츠가 들어갈 영역의 자식요소로 p 태그 요소를 지정
// 8. 버튼들을 모두 선택하여 담은 변수를 설정
// 9. 각각의 Node, 즉 배열의 요소라고 생각하고, forEach를 통해, 각각의 click을 듣고, callback을 실행

// clickTab
// 1. event.target.innerHTML을 key라는 변수에 지정
// 2. p 태그 요소에 대한 재지정
// 3. p 태그 요소에 innerHTML로 dataMap[key]를 삽입