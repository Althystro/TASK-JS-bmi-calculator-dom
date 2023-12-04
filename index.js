function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  //challenge 1
  let meter = height / 100;
  let bmi = weight / (meter * meter);
  //Challenge 2
  // if (bmi <= 18.4) {
  //   alert("Underweight");
  // } else if (bmi >= 18.5 && bmi <= 24.9) {
  //   alert("Healthy Weight");
  // } else if (bmi >= 25.0 && bmi <= 29.9) {
  //   alert("Over Weight");
  // } else {
  //   alert("Above obesity");
  // }

  //Challenge 3
  if (age >= 19 && age <= 24 && bmi >= 19 && bmi <= 24) {
    alert("healthy");
  } else if (age >= 25 && age <= 34 && bmi >= 20 && bmi <= 25) {
    alert("healthy");
  } else if (age >= 35 && age <= 44 && bmi >= 21 && bmi <= 26) {
    alert("healthy");
  } else if (age >= 45 && age <= 54 && bmi >= 22 && bmi <= 26) {
    alert("healthy");
  } else if (age >= 55 && age <= 64 && bmi >= 23 && bmi <= 27) {
    alert("healthy");
  } else if (age >= 65 && bmi >= 24 && bmi <= 29) {
    alert("healthy");
  } else {
    alert("not healthy");
  }

  // You are going to write the code here before the curly braces 👇🏻
}
