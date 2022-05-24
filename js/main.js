// Membuka email (Day 3)
function submitForm() {
  const emailReceiver = "andriyansyah0003@gmail.com";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo, Perkenalkan Nama saya ${name}. I wanted to ${subject}, ${message} .terimakasih`;
  if (name && email && phone && subject && message) {
    a.click();
  }
}
