#include "reverse_string.h"

namespace reverse_string {

    std::string reverse_string(std::string s){
        std::string result = "";
        for (int i = s.length()-1;i>=0;i--){
            result += s[i];
        }
    return result;
    }
// TODO: add your solution here

}  // namespace reverse_string
