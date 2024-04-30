import isPalindrome from "./palindrome";
import { useState } from "react";
function App() {
    const [inputValue, setInputValue] = useState("");
    const [isPalindromeResult, setIsPalindromeResult] = useState<
        boolean | null
    >(null);

    const handleCheckPalindrome = () => {
        const result = isPalindrome(inputValue);
        setIsPalindromeResult(result);
    };

    return (
        <>
            <div className="bg-slate-950 h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold underline text-sky-400">
                    Is it a Palindrome?
                </h1>
                <div className="text-cyan-600">
                    {" "}
                    {/* here */}
                    <p>Enter in text to check for a palindrome:</p>
                    <div>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={handleCheckPalindrome}>Check</button>
                    </div>
                    {isPalindromeResult !== null && (
                        <p>
                            {isPalindromeResult
                                ? "True (Is is a palindrome)"
                                : "False (It is not a palindrome)"}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
