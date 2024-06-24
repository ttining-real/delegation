
const content = document.querySelector('.contents')
const textField = document.querySelector('#comment37')

function handleClick(e) {
  e.preventDefault; // 기본 동작 구문 차단

  let target = e.target;
  const button = target.closest('button');
  

  while(!target.getAttribute('data-name')) {
    target = target.parentElement; // 부모를 찾아서 target에 넣어줌

    // BODY까지 올라가면 반복 종료 + target에 뭐가 담겨있을지 모르니까 null로 비워줌
    if(target.tagName === 'BODY') {
      target = null;
      return;
    }
  }

  // target의 data-name을 조회 -> 없으면 null이 나옴
  // 부모가 몇단계일지 모르니까 data-name을 찾기 위해 반복문을 돌려줌
  // console.log(target.getAttribute('data-name'));


  // if(!button) return;

  // button을 target으로 바꿔도 되는 이유
  // data-name을 가지고 있는 모든 대상을 찾기 위해 target으로 변경
  if(target.dataset.name === 'like') {
    target.classList.toggle('active');
  }


  // comment 버튼을 누르면 textField에 포커스
  if(target.dataset.name === 'comment') {
    textField.focus();
  }

  if(target.dataset.name === 'more') {
    target.classList.toggle('active');
  }

  if(target.dataset.name === 'delete') {
    if(confirm('우리의 추억을 정말 없앨거야...?')) {
      this.remove();
    }
  }

  if(target.dataset.name === 'send') {
    console.log(textField.value);

    if(textField.value === '') return;

    const template = `
      <div class="id">
        <div class="profile_img border_over">
          <img src="./assets/part04/tigerr.png" alt="프로필사진" />
        </div>
        <div class="comment_field">
          <div class="text_container">
            <div class="name"><a href="#">범쌤</a></div>
            <div class="text_field">${textField.value}</div>
          </div>
        </div>
      </div>
    `

    const comment_container = document.querySelector('.comment_container');

    comment_container.insertAdjacentHTML('beforeend', template); // 무한 스크롤 할 때도, 어느정도 왔다 싶으면 insert 해주는 방식으로 할 수 있음!

    textField.value = ''; // 글자 입력 후 텍스트 필드 내 글자 지워주기

    comment_container.scrollTop = comment_container.scrollHeight;

  }

}

content.addEventListener('click', handleClick);