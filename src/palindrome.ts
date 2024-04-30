export default function isPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return reversed.toLowerCase() === str.toLowerCase() ? true : false;
}
