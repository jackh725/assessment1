// 获取按钮和列表
var generateButton = document.getElementById("generate-passwords");
var passwordList = document.getElementById("passwords");
// 固定信息
var userName = "Jack";
var userCity = "Bendigo";
var symbols = ["!", "@", "#", "$", "%", "&"];
var numbers = "0123456789";
// 生成随机符号（最多3位）
function getRandomSymbols() {
    var result = "";
    for (var i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        var randomIndex = Math.floor(Math.random() * symbols.length);
        result += symbols[randomIndex];
    }
    return result;
}
// 生成随机数字（最多3位）
function getRandomNumbers() {
    var result = "";
    for (var i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        result += numbers[randomIndex];
    }
    return result;
}
// 点击生成密码
generateButton === null || generateButton === void 0 ? void 0 : generateButton.addEventListener("click", function () {
    var useName = document.getElementById("use-name").checked;
    var useCity = document.getElementById("use-city").checked;
    var useSymbols = document.getElementById("use-symbols").checked;
    var useNumbers = document.getElementById("use-numbers").checked;
    var passwords = [];
    if (useName) {
        passwords.push(userName);
    }
    if (useCity) {
        passwords.push(userCity);
    }
    if (useName && useCity) {
        passwords.push(userName + userCity);
        passwords.push(userCity + userName);
    }
    if (useSymbols) {
        passwords.push(userName + getRandomSymbols());
        passwords.push(userCity + getRandomSymbols());
    }
    if (useNumbers) {
        passwords.push(userName + getRandomNumbers());
        passwords.push(userCity + getRandomNumbers());
    }
    // 清空旧结果
    passwordList.innerHTML = "";
    // 显示新结果
    passwords.forEach(function (pwd) {
        var li = document.createElement("li");
        li.textContent = pwd;
        passwordList.appendChild(li);
    });
});
