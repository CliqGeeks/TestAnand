#include <iostream>
#include <string>
#include <vector>

int main() {
    const std::vector<std::string> participants = {
        "Anand", "QA Tester", "Cliq User"
    };

    for (std::size_t index = 0; index < participants.size(); ++index) {
        std::cout << index + 1 << ": Hello, " << participants[index] << "!\n";
    }

    return 0;
}
