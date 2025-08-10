// Get the List and Button elements from the DOM
const generateButton = document.getElementById("generate-passwords") as HTMLButtonElement;
const passwordList = document.getElementById("passwords") as HTMLUListElement;

// Constants for user information
const userName: string = "Jack";
const userCity: string = "Bendigo";
const symbols: string[] = ["!", "@", "#", "$", "%", "&","*","+","-"];
const numbers: string = "0123456789";

// generate random symnbols( Max add 5 symbols)
function getRandomSymbols(): string {
  let result = "";
  for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    result += symbols[randomIndex];
  }
  return result;
}

// genrate random numbers(Max 5)
function getRandomNumbers(): string {
  let result = "";
  for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result += numbers[randomIndex];
  }
  return result;
}

// Genrate passwords based on user selections
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
  // if (useSymbols) {
  //   passwords.push(userName + getRandomSymbols());
  //   passwords.push(userCity + getRandomSymbols());
  // }
  if (useSymbols) {
    if (useName) {
      passwords.push(userName + getRandomSymbols());
    }
    if (useCity) {
      passwords.push(userCity + getRandomSymbols());
    }
  }

  // if (useNumbers) {
  //   passwords.push(userName + getRandomNumbers());
  //   passwords.push(userCity + getRandomNumbers());
  // }

  if (useNumbers) {
    if (useName) {
      passwords.push(userName + getRandomNumbers());
    }
    if (useCity) {
      passwords.push(userCity + getRandomNumbers());
    }
  }


  // Clear previous results
  passwordList.innerHTML = "";

  const filteredPasswords = passwords.filter(pwd => pwd.length <= 14);

  filteredPasswords.forEach(pwd => {
    const li = document.createElement("li");
    li.textContent = pwd;
    passwordList.appendChild(li);
  });
  // Show generated passwords
  // passwords.forEach(pwd => {
  //   const li = document.createElement("li");
  //   li.textContent = pwd;
  //   passwordList.appendChild(li);
  // });
});
