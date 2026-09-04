const participants = ["Anand", "QA Tester", "Cliq User"];

function createGreeting(name) {
  return `Hello, ${name}!`;
}

participants.forEach((participant, index) => {
  console.log(`${index + 1}: ${createGreeting(participant)}`);
});
