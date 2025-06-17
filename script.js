
document.getElementById('votingForm').addEventListener('submit', function (e) {
  e.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // 2️⃣ Validation
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // 3️⃣ Promise Logic
  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  // 5️⃣ Alert Handling
  checkVotingEligibility
    .then((userName) => {
      alert(`Welcome, ${userName}. You can vote.`);
    })
    .catch((userName) => {
      alert(`Oh sorry ${userName}. You aren't old enough.`);
    });
});
