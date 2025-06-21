document.getElementById("voteForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const name = document.getElementById("name").value.trim();
  const ageValue = document.getElementById("age").value.trim();
  const age = parseInt(ageValue);

  // Validation for empty or invalid fields
  if (!name || !ageValue || isNaN(age)) {
    alert("Please enter valid details.");
    return;
  }

  // Create a Promise to handle the age check
  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000); // 4 second delay
  });

  // Handle Promise result
  checkVotingEligibility
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
