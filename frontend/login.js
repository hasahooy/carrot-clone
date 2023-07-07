const form = document.querySelector("#login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();

  console.log("액세스토큰!!", data);

  if (res.status === 200) {
    alert("로그인에 성공했습니다!");
    console.log(res.status);
  } else if (res.status === 401) {
    alert("id혹은 password가 틀렸습니다.");
  }
};

form.addEventListener("submit", handleSubmit);
