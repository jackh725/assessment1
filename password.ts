// 获取按钮和列表
const generateButton = document.getElementById("generate-passwords") as HTMLButtonElement;
const passwordList = document.getElementById("passwords") as HTMLUListElement;

// 固定信息
const userName: string = "Jack";
const userCity: string = "Bendigo";
const symbols: string[] = ["!", "@", "#", "$", "%", "&"];
const numbers: string = "0123456789";

// 生成随机符号（最多3位）
function getRandomSymbols(): string {
  let result = "";
  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    result += symbols[randomIndex];
  }
  return result;
}

// 生成随机数字（最多3位）
function getRandomNumbers(): string {
  let result = "";
  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result += numbers[randomIndex];
  }
  return result;
}

// 点击生成密码
generateButton?.addEventListener("click", () => {
  const useName = (document.getElementById("use-name") as HTMLInputElement).checked;
  const useCity = (document.getElementById("use-city") as HTMLInputElement).checked;
  const useSymbols = (document.getElementById("use-symbols") as HTMLInputElement).checked;
  const useNumbers = (document.getElementById("use-numbers") as HTMLInputElement).checked;

  const passwords: string[] = [];

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
  passwords.forEach(pwd => {
    const li = document.createElement("li");
    li.textContent = pwd;
    passwordList.appendChild(li);
  });
});
