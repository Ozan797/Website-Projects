const body = document.querySelector("body");
const signUpBtn = document.querySelector("#signup");
const h1 = document.querySelector("h1");
const loginUsername = document.querySelector("#username");
const loginPassword = document.querySelector("#password");
const loginBtn = document.querySelector("#login");
const signupDesc = document.querySelector("#desc");
const form = document.querySelector("form");

loginBtn.type = "button"; // not submit button

// can also use addEventListener('click', arrowfunc)

signUpBtn.onclick = () => {
  h1.innerText = "Sign Up";
  loginUsername.remove();
  loginPassword.remove();
  loginBtn.remove();
  signupDesc.remove();

  const signupUsername = document.createElement("input");
  signupUsername.setAttribute("id", "username");
  signupUsername.type = "text";
  signupUsername.placeholder = "Create Username";
  form.append(signupUsername);

  const signupPassword = document.createElement("input");
  signupPassword.setAttribute("id", "password");
  signupPassword.type = "password";
  signupPassword.placeholder = "Create Password";
  form.append(signupPassword);

  const signedupBtn = document.createElement("button");
  signedupBtn.innerText = "Sign Up";
  signedupBtn.setAttribute("id", "signedUp");
  signedupBtn.type = "button"; // button doesnt refresh, not submit button
  form.append(signedupBtn);

  const p = document.createElement("p");
  p.innerText = "Already a member?";
  p.setAttribute("id", "desc");
  form.append(p);

  const loginBtnDesc = document.createElement("button");
  loginBtnDesc.setAttribute("id", "signup");
  loginBtnDesc.innerText = "Login";
  p.append(loginBtnDesc);
};
