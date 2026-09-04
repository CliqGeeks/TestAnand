def create_greeting(name: str) -> str:
    return f"Hello, {name}!"


participants = ["Anand", "QA Tester", "Cliq User"]

for position, participant in enumerate(participants, start=1):
    print(f"{position}: {create_greeting(participant)}")
