


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]



// 1. navigation 선택 후 이벤트 위임
// - e.preventDefault() : 태그가 가지고 있는 기본 동작을 모두 초기화 시켜줌 (a 태그의 경우, 페이지 이동을 막음)
// 2. li 수집
// 3. data-index 값 수집
// 4. target에게 is-active 클래스 넣기

// 이벤트 함수는 handle로 시작하는 것이 관례이다.

const navigation = getNode('.navigation');
const visualImage = document.querySelector('.visual img');
// const dataSrc =  navigation.children.dataset.index;


// const split = new SplitText(target, option);
const split = new SplitText('h3',{type:'chars'});
// console.log(split);

function handleClick(e) {
  e.preventDefault();

  const target = e.target.closest('li');

  if(!target) return;
  const index = target.dataset.index;
  // const index = attr(target, 'data-index'); // isString is not defined
  const children = [...navigation.children];
  // const children = Array.from(navigation.children);

  // 이미지를 변경해보자!
  // visualImage.src = `./assets/part01/visual2.jpg`;
  // visualImage.src = e.target.closest('a').href; // 가장 쉬운 방법
  // console.log(data[index-1].src);
  visualImage.src = `./assets/part01/${data[index-1].src}`;


  // (1) for of
  // for(const a of navigation.children) a.classList.remove('is-active');

  // (2) forEach
  children.forEach((li) => {
    li.classList.remove('is-active')
  })

  // 순서가 중요!
  target.classList.add('is-active');
  
  
  // gsap.to()
  // gsap.from()
  gsap.from(split.chars,{
    opacity: 0,
    y: 30,
    stagger: 0.03,
    ease: 'power3.inout',
    immediateRender: false
  })
}




navigation.addEventListener('click', handleClick)












