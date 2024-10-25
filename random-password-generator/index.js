function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRESTUVWXYZ";
  const numberChars = "0987654321";
  const symbolChars = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(Password length must be alteast 1)`;
  }

  if (allowedChars.length === 0) {
    return `(At least 1 set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIdx = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIdx];
  }

  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
