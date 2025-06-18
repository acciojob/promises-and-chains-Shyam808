document.getElementById("voteForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  if (!name || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // 4 second delay
  });

  checkVotingEligibility
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
