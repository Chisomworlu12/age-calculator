const birthDay = document.getElementById("DD");
const birthMonth = document.getElementById("MM");
const birthYear = document.getElementById("YYYY");
const submit = document.querySelector(".submit");
const d = document.querySelector(".D");
const m = document.querySelector(".M");
const yr = document.querySelector(".Y");
const ageYears = document.getElementById("yrs");
const ageMonths = document.getElementById("mons");
const ageDays = document.getElementById("days");

// const now = new Date();
// const days = now.getDay();
// const months = now.getMonth() + 1;
// const years = now.getFullYear();

// let dayValue;
// let monthValue;
// let yearValue;

submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (!birthYear.value || !birthMonth.value || !birthDay.value) {
    birthYear.insertAdjacentHTML("beforeend", "<p>This field is empty</p>");
    return;
  }
  if (
    isNaN(birthYear.value) ||
    isNaN(birthMonth.value) ||
    isNaN(birthDay.value)
  )
    return;

  const today = new Date();
  const birthDate = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDay.value
  );
  console.log(birthDate);
  if (birthYear.value > today.getFullYear()) {
    yr.style.color = "red";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust if days are negative
  if (days < 0) {
    months--;

    // Get days in previous month
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    days += previousMonth.getDate();
  }

  // Adjust if months are negative
  if (months < 0) {
    years--;
    months += 12;
  }

  //   console.log(`${years} years, ${months} months, ${days} days`);
  ageYears.textContent = `${years}`.padStart(2, 0);
  ageMonths.textContent = `${months}`.padStart(2, 0);
  ageDays.textContent = `${days}`.padStart(2, 0);
  // To empty the input after submission
  birthDay.value = "";
  birthMonth.value = "";
  birthYear.value = "";
});
