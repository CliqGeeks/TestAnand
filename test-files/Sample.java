public class Sample {
    public static void main(String[] args) {
        String[] participants = {"Anand", "QA Tester", "Cliq User"};

        for (int index = 0; index < participants.length; index++) {
            System.out.printf("%d: Hello, %s!%n", index + 1, participants[index]);
        }
    }
}
