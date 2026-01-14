#include "rotational_cipher.h"
#include <cctype>

namespace rotational_cipher {
    std::string rotate(std::string s, int turn) {
        std::string result = ""; 
        for (char ch : s) {
            if (isalpha(ch)) {
                int jump = isupper(ch) ? 65 : 97; 
                int ascii = static_cast<int>(ch);
                int order = ((ascii - jump) + turn) % 26;
                result += static_cast<char>(order + jump);
            } else {
                result += ch;
            }
        }
        return result;
    }
}