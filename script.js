document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  const ageNum = Number(age);

  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNum >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  checkVotingEligibility
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
