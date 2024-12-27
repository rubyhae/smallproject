const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let userId = e.target.userId.value;
    let userPw1 = e.target.pw1.value;
    let userPw2 = e.target.pw2.value;
    let userName = e.target.userName.value;
    let userGender = e.target.gender.value;
    let userEmail = e.target.email.value;
    let emailDomain = e.target['email-domain'].value;

    console.log(userId, userPw1, userPw2, userName, userGender, `${userEmail}@${emailDomain}`);

    // 검증 로직
    if (userName === "") {
        alert("이름을 입력해주세요.");
        e.target.userName.focus();
        return false;
    }

    const expNameText = /^[a-zA-Z0-9]+$/;
    if (!expNameText.test(userName)) {
        alert("이름 형식이 맞지 않습니다. 형식에 맞게 입력해주세요.");
        e.target.userName.focus();
        return false;
    }

    if (userName.length > 10) {
        alert("이름은 10글자 이하로 입력해주세요.");
        e.target.userName.focus();
        return false;
    }

    if (userId === "") {
        alert("아이디를 입력해주세요.");
        e.target.userId.focus();
        return false;
    }

    if (userId.length < 3 || userId.length > 12) {
        alert("아이디는 3자 이상 12자 이하로 입력해주세요.");
        e.target.userId.focus();
        return false;
    }

    if (userPw1 === "") {
        alert("비밀번호를 입력해주세요.");
        e.target.pw1.focus();
        return false;
    }

    if (userPw2 === "") {
        alert("비밀번호 확인을 입력해주세요.");
        e.target.pw2.focus();
        return false;
    }

    if (userPw1.length < 8 || userPw1.length > 30) {
        alert("비밀번호는 8자 이상 30자 이하로 입력해주세요.");
        e.target.pw1.focus();
        return false;
    }

    if (userPw1 !== userPw2) {
        alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        e.target.pw2.focus();
        return false;
    }

    if (userEmail === "") {
        alert("이메일을 입력해주세요.");
        e.target.email.focus();
        return false;
    }

    // 사용자의 정보를 URL 파라미터로 전달하여 확인 페이지로 이동
    const queryString = `?userId=${userId}&userName=${userName}&userEmail=${userEmail}&emailDomain=${emailDomain}`;
    window.location.href = 'complete.html' + queryString;
});

function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle('dark-theme');
}
