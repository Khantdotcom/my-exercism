#include <string>
#include <cctype> // Required for isalnum, tolower

namespace atbash_cipher {

    std::string encode(std::string text) {
        std::string result = "";
        int count = 0;

        for (char ch : text) {
            if (std::isalnum(ch)) {
                // 1. Handle letters (mirror them)
                if (std::isalpha(ch)) {
                    ch = 'a' + 'z' - std::tolower(ch);
                }
                
                // 2. Add grouping space every 5 characters (standard for Atbash encoding)
                if (count > 0 && count % 5 == 0) {
                    result += ' ';
                }
                
                result += ch;
                count++;
            }
        }
        return result;
    }

    std::string decode(std::string text) {
        std::string result = "";
        for (char ch : text) {
            if (std::isalnum(ch)) {
                if (std::isalpha(ch)) {
                    ch = 'a' + 'z' - std::tolower(ch);
                }
                result += ch; // Decoding usually doesn't need the spaces
            }
        }
        return result;
    }

}