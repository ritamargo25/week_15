function check() {
    let email = document.getElementById('exampleInputEmail');
    let name = document.getElementById('exampleInputName');
    let surname = document.getElementById('exampleInputSurname');
    let nickname = document.getElementById('exampleInputNickname');
    let password = document.getElementById('exampleInputPassword');

    document.getElementById('errorMessage')
        .innerHTML = "";
    if (email.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "Ваш e-mail не заполнен<br>";
    }
    if (name.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "Ваше имя не заполнено<br>";
    }
    if (surname.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "Ваша фамилия не заполнена<br>";
    }
    if (nickname.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "Ваше имя пользователя не заполнено<br>";
    }
    if (password.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "Ваш пароль не заполнен<br>";
    }
    if (password.value.length <= 8) {
        document.getElementById('errorMessage')
            .innerHTML += "Слишком короткий пароль<br>";
    }
}
