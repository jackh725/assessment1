// Get the List and Button elements from the DOM
var generateButton = document.getElementById("generate-passwords");
var passwordList = document.getElementById("passwords");
// Constants for user information
// const userName: string = "Jack";
// const userCity: string = "Bendigo";
// const userName = localStorage.getItem("profile_name") || "DefaultName";
// const userCity = localStorage.getItem("profile_city") || "DefaultCity";
// get Name from localStorage from about.html
var fullName = localStorage.getItem("profile_name") || "DefaultName";
var userName = fullName.split(" ")[0];
var userCity = localStorage.getItem("profile_city") || "DefaultCity";
var symbols = ["!", "@", "#", "$", "%", "&", "*", "+", "-"];
var numbers = "0123456789";
// // Generate random symbols (1-5 digits for combination, 5-10 digits otherwise)
function getRandomSymbols(isCombination) {
    var result = "";
    var length = isCombination ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 6) + 5;
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * symbols.length);
        result += symbols[randomIndex];
    }
    return result;
}
// genrate random numbers(Max 5)
// function getRandomNumbers(): string {
//   let result = "";
//   for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
//     const randomIndex = Math.floor(Math.random() * numbers.length);
//     result += numbers[randomIndex];
//   }
//   return result;
// }
// Generate random numbers (1-5 digits for combination, 5-10 digits otherwise)
function getRandomNumbers(isCombination) {
    var result = "";
    var length = isCombination ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 6) + 5;
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        result += numbers[randomIndex];
    }
    return result;
}
// Genrate passwords based on user selections
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
    // if (useSymbols) {
    //   passwords.push(userName + getRandomSymbols());
    //   passwords.push(userCity + getRandomSymbols());
    // }
    if (useSymbols) {
        if (useName) {
            passwords.push(userName + getRandomSymbols(true));
        }
        if (useCity) {
            passwords.push(userCity + getRandomSymbols(true));
        }
        if (!useName && !useCity) {
            passwords.push(getRandomSymbols(false));
        }
    }
    // if (useNumbers) {
    //   passwords.push(userName + getRandomNumbers());
    //   passwords.push(userCity + getRandomNumbers());
    // }
    if (useNumbers) {
        if (useName) {
            passwords.push(userName + getRandomNumbers(true));
        }
        if (useCity) {
            passwords.push(userCity + getRandomNumbers(true));
        }
        if (!useName && !useCity) {
            passwords.push(getRandomNumbers(false));
        }
    }
    // Clear previous results
    passwordList.innerHTML = "";
    var filteredPasswords = passwords.filter(function (pwd) { return pwd.length <= 14; });
    filteredPasswords.forEach(function (pwd) {
        var li = document.createElement("li");
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
