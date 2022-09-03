// step1. 요구사항 구현을 위한 전략
// TODO 메뉴 추가
// - [V] 메뉴의 이름을 입력 받고 확인 버튼을 누르면 메뉴가 추가된다.
// - [V] 메뉴의 이름을 입력받고 엔터키 입력으로 추가한다.
// - [V] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [V] 메뉴가 추가되고 나면, input은 빈 값으로 초기화 한다.
// - [V] 사용자 입력값이 빈 값이라면 추가되지 않는다.
// - [V] 추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.

function App() {

    // TODO 메뉴추가
    //- [X] 메뉴의 이름을 입력 받고 확인 버튼을 누르면 메뉴가 추가된다.
    //- [X] 메뉴의 이름을 입력받고 엔터키 입력으로 추가한다.
    //- [X] 총 메뉴 갯수를 count하여 상단에 보여준다.
    //- [X] 메뉴가 추가되고 나면, input은 빈 값으로 초기화 한다.
    //- [X] 사용자 입력값이 빈 값이라면 추가되지 않는다.
    //- [X] 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>`안에 삽입해야 한다.

    function inputMenuList() {
        let inputMenu = document.querySelector('#espresso-menu-name').value;
        if (inputMenu !== '') {
            document.querySelector('#espresso-menu-list').insertAdjacentHTML('beforeend', `
        <li class="menu-list-item d-flex items-center py-2" id="menu-list">
            <span class="w-100 pl-2 menu-name" id="menu-input">${inputMenu}</span>
            <button class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button" id="modify-btn">수정</button>
            <button class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button" id="del-btn">삭제</button>
        </li>
        `)
        }
        modifyMenuList();
        delMenuList();
    }

    function clickConfirmBtn() {
        let menuSubmitBtn = document.querySelector('#espresso-menu-submit-button');
        menuSubmitBtn.addEventListener('click', e => {
            inputMenuList();
            delInput();
            listCnt();
        })
    }

    function pushEnter() {
        document.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                inputMenuList();
                e.preventDefault();
            }
        })
        document.addEventListener('keyup', e => {
            if (e.key === 'Enter') delInput();
            listCnt();
        })
    }

    function delInput() {
        let espressoMenuName = document.querySelector('#espresso-menu-name');
        espressoMenuName.value = '';
    }

    function inputMenu() {
        clickConfirmBtn();
        pushEnter();
    }

    function listCnt() {
        let listCnt = document.querySelectorAll('#espresso-menu-list li').length;
        document.querySelector('#menu-cnt').innerHTML = `
        총 ${listCnt}개
        `;
    }

    inputMenu();

    // TODO 메뉴 수정
    // - [V] 메뉴의 수정 버튼 클릭 이벤트를 받으면, 메뉴를 수정하는 prompt 창이 뜬다.
    // - [V] prompt에서 신규 메뉴명을 입력 받고 확인 버튼을 누르면 메뉴가 수정된다.

    function modifyMenuList() {
        let menuList = document.querySelectorAll('#menu-list');
        if (menuList.length > 0) {
            let modifyMenu = document.querySelectorAll('#modify-btn');
            modifyMenu[menuList.length-1].addEventListener('click', e => {
                let modifyPrompt = prompt('메뉴를 수정해주세요');
                let menuInput = document.querySelectorAll('#menu-input');
                menuInput[menuList.length-1].innerHTML = modifyPrompt;
            })
        }
    }


    // TODO 메뉴 삭제
    // - [V] 메뉴 삭제 이벤트를 받으면, 메뉴를 삭제하는 confirm 창이 뜬다.
    // - [V] confirm 창에서 확인 버튼을 누르면 메뉴가 삭제된다.
    // - [V] confirm 창에서 취소 버튼을 누르면 confirm 창이 닫힌다.

    function delMenuList() {
        let menuList = document.querySelectorAll('#menu-list');
        if (menuList.length > 0) {
            // console.log(menuListCnt);
            let delBtn = document.querySelectorAll('#del-btn');
            delBtn[menuList.length-1].addEventListener('click', e => {
                let delConfirm = confirm('정말 삭제하시겠습니까?');
                if (delConfirm) menuList[menuList.length-1].remove();
            })
        }
    }
}

App();








// TODO 메뉴 수정
// - [ ] 메뉴의 수정 버튼 클릭 이벤트를 받으면, 메뉴를 수정하는 prompt 창이 뜬다.
// - [ ] prompt에서 신규 메뉴명을 입력 받고 확인 버튼을 누르면 메뉴가 수정된다.
// - [ ] prompt 창 외부를 클릭하면 prompt 창이 닫힌다.
//
// TODO 메뉴 삭제
// - [ ] 메뉴 삭제 이벤트를 받으면, 메뉴를 삭제하는 confirm 창이 뜬다.
// - [ ] confirm 창에서 확인 버튼을 누르면 메뉴가 삭제된다.
// - [ ] confirm 창 외부를 클릭하면 confirm 창이 닫힌다.
// - [ ] confirm 창에서 취소 버튼을 누르면 confirm 창이 닫힌다.
