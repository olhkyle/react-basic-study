// let mail = document.querySelector('.mail');
// let cafe = document.querySelector('.cafe');
// let blog = document.querySelector('.blog');

// let mailContent = document.querySelector('.mail-content');
// let cafeContent = document.querySelector('.cafe-content');
// let blogContent = document.querySelector('.blog-content');


// mail.addEventListener('click',mailShow);
// cafe.addEventListener('click',cafeShow);
// blog.addEventListener('click',blogShow);

// function mailShow(){
//     mailContent.classList.toggle('selected');
// }

// function cafeShow(){
//     cafeContent.classList.toggle('selected');
// }

// function blogShow(){
//     blogContent.classList.toggle('selected');
// }

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

