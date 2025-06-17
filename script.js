document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  const checkEligibility = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (parseInt(age) >= 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000); // 4 seconds delay
  });

  checkEligibility
    .then(function (userName) {
      alert(`Welcome, ${userName}. You can vote.`);
    })
    .catch(function (userName) {
      alert(`Oh sorry ${userName}. You aren't old enough.`);
    });
});
