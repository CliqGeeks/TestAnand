#include <stdio.h>

int main(void) {
    const char *participants[] = {"Anand", "QA Tester", "Cliq User"};
    const int count = sizeof(participants) / sizeof(participants[0]);

    for (int index = 0; index < count; index++) {
        printf("%d: Hello, %s!\n", index + 1, participants[index]);
    }

    return 0;
}
