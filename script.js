// 定义正确的密码
var correctPassword = "Jack2025";
// 获取输入框和反馈区域
var inputField = document.getElementById("inputField");
var feedback = document.getElementById("feedback");
// 处理用户猜测的函数
function checkPassword() {
    var userInput = inputField.value.trim(); // 获取用户输入并去除前后空格
    // 检查用户输入的密码是否正确
    if (userInput === correctPassword) {
        feedback.innerHTML = "<p style='color: green;'>Correct! You guessed the password!</p>";
    }
    else {
        feedback.innerHTML = "<p style='color: red;'>Incorrect! Try again.</p>";
    }
}
// 当用户在输入框中输入时清除反馈信息
inputField.addEventListener("input", function () {
    feedback.innerHTML = ""; // 清空反馈区域
});
// 清除输入框内容的函数
function clearInput() {
    inputField.value = ""; // 清空输入框
    feedback.innerHTML = ""; // 清空反馈区域
}
// 为按钮点击事件绑定事件处理函数
var submitButton = document.querySelector("button");
if (submitButton) {
    submitButton.addEventListener("click", checkPassword);
}
// 为清除按钮绑定事件
var clearButton = document.querySelectorAll("button")[1]; // 获取第二个按钮（Clear按钮）
if (clearButton) {
    clearButton.addEventListener("click", clearInput); // 为清除按钮绑定事件
}
