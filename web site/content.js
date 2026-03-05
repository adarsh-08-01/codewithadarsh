/**
 * codewithadarsh - Tutorial Content Data
 * 
 * Instructions:
 * To add a new topic, simply scroll to the bottom of the swiftJourneyData array 
 * and add a new object following this format:
 * 
 * {
 *   topic: "Topic Name (e.g., Swift Basics)",
 *   title: "Your title here",
 *   content: `Your HTML content here`
 * }
 * 
 * Note: Use backticks (\`) for the content to easily write multi-line HTML.
 */

const tutorialData = [
    {
        topic: "Introduction & Setup",
        title: "Setting the Stage for Swift",
        content: `
            <header>
                <span class="day-badge">Introduction & Setup</span>
                <h1>Setting the Stage for Swift</h1>
            </header>
            
            <p>Welcome to <strong>codewithadarsh</strong>! I'm starting my journey into iOS app development using Swift. Following the popular "100 Days of Swift" approach, I decided to document every step of my learning process right here.</p>
            
            <h2>Why Swift?</h2>
            <p>Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design and produces software that runs lightning-fast.</p>
            
            <h2>What I did initially:</h2>
            <ul>
                <li>Installed Xcode from the Mac App Store.</li>
                <li>Explored the Xcode interface (Navigators, Inspectors, Editor area).</li>
                <li>Created my first Playground file to write some basic Swift code.</li>
                <li>Learned about the <code>print</code> statement.</li>
            </ul>
            
            <div class="tip-box" style="background: var(--brand-light); padding: 1rem; border-left: 4px solid var(--brand-primary); border-radius: 4px; margin: 1.5rem 0;">
                <strong>Key Takeaway:</strong> Playgrounds are amazing for quickly testing out Swift code without building a full app!
            </div>

            <h2>Hello World!</h2>
            <p>As with all programming languages, the first thing is to say Hello to the World.</p>
            <pre><code>import Cocoa

var greeting = "Hello, playground"
print(greeting)
print("Hello, World!")</code></pre>
            
            <p>Preparation is key before diving into complex concepts.</p>
        `
    },
    {
        topic: "Swift Basics",
        title: "Introduction to Foundation, Variables, and Comments",
        content: `
            <header>
                <span class="day-badge">Swift Basics</span>
                <h1>Introduction to Foundation, Variables, and Comments</h1>
            </header>
            
            <h2>1️⃣ Import Statement</h2>
            <pre><code>import Foundation</code></pre>
            <p><strong>What it means:</strong></p>
            <ul>
                <li><code>Foundation</code> is a framework.</li>
                <li>It gives access to basic features like Strings, Dates, Arrays, Numbers, and more.</li>
            </ul>
            <p>👉 Think of import as: <em>"Bring tools into my workspace."</em></p>

            <h2>2️⃣ Variables</h2>
            <pre><code>var greeting = "Hello, Yo what's up"</code></pre>
            <p><strong>Explanation:</strong></p>
            <ul>
                <li><code>var</code> → used to create a variable</li>
                <li><code>greeting</code> → variable name</li>
                <li><code>"Hello, Yo what's up"</code> → value (String)</li>
            </ul>
            <p><strong>Important:</strong> Use <code>var</code> when value can change.</p>
            <pre><code>var name = "Adarsh"
name = "iOS Developer"</code></pre>

            <h2>3️⃣ Print Function</h2>
            <pre><code>print(greeting)</code></pre>
            <p><strong>Purpose:</strong> Displays output in the console.<br>
            Think of <code>print()</code> as: <em>"Show this to the screen."</em><br>
            Without <code>print()</code>, the value is stored but not displayed.</p>

            <h2>4️⃣ Comments (Very Important)</h2>
            <p>Single-line comment:</p>
            <pre><code>// This is a comment</code></pre>
            <p>Multi-line comment:</p>
            <pre><code>/*
This is
multi-line
comment
*/</code></pre>
            <p><strong>Why comments matter:</strong></p>
            <ul>
                <li>Explain logic</li>
                <li>Make code readable</li>
                <li>Help future you</li>
                <li>Help team members</li>
            </ul>
            <p>Professional developers always comment important logic.</p>

            <h2>5️⃣ Naming Conventions (VERY IMPORTANT)</h2>
            <p>✅ <strong>Correct in Swift → camelCase</strong></p>
            <pre><code>let firstGreeting = "Hello"
let thisIsMyFirstGreeting = "Hello"</code></pre>
            <p><strong>Rules:</strong></p>
            <ul>
                <li>First word lowercase</li>
                <li>Every next word starts with uppercase</li>
            </ul>
        `
    },
    {
        topic: "Data Types & Logic",
        title: "Constants, Data Types, and If-Else",
        content: `
            <header>
                <span class="day-badge">Data Types & Logic</span>
                <h1>Constants, Data Types, and If-Else</h1>
            </header>
            
            <h2>1️⃣ What is a Variable in Swift?</h2>
            <p>A variable is a container that stores data, and its value can change.<br>
            👉 In Swift, we use <code>var</code> to create a variable.</p>
            <pre><code>var name: String = "Adarsh"
name = "iOS Developer"   // ✅ Allowed</code></pre>
            
            <h2>2️⃣ What is a Constant in Swift?</h2>
            <p>A constant is a container that stores data, but its value <strong>cannot</strong> change after assignment.<br>
            👉 In Swift, we use <code>let</code> to create a constant.</p>
            <pre><code>let pi = 3.14
// pi = 3.14159  ❌ Error</code></pre>
            <p>🔥 <strong>Important Rule:</strong> Use <code>let</code> when the value will NOT change (recommended by Apple). Use <code>var</code> when the value will change.</p>

            <h2>3️⃣ Data Types in Swift</h2>
            <p>Swift is type-safe, meaning every value has a specific type.</p>
            
            <h3>🟢 1. String</h3>
            <p>Used to store text.</p>
            <pre><code>var greeting: String = "Hello"</code></pre>
            
            <h3>🔵 2. Boolean (Bool)</h3>
            <p>Used for true/false values.</p>
            <pre><code>var isLoggedIn: Bool = true</code></pre>
            
            <h3>🟡 3. Numbers</h3>
            <p><strong>Integer (Int):</strong> Used for whole numbers.</p>
            <pre><code>var age: Int = 19</code></pre>
            <p><strong>Double:</strong> Used for decimal numbers (more precise).</p>
            <pre><code>var price: Double = 10.5</code></pre>

            <h2>4️⃣ If-Else Statement in Swift</h2>
            <p>Used to check conditions.</p>
            <pre><code>var userIsPremium: Bool = false

if !userIsPremium {
    print("User is not premium")
}</code></pre>
            <p>👉 <code>!</code> means NOT. If value is false → it becomes true. If value is true → it becomes false.</p>
        `
    },
    {
        topic: "Functions & Operators",
        title: "Functions, Returns, and Guard Statements",
        content: `
            <header>
                <span class="day-badge">Functions & Operators</span>
                <h1>Functions, Returns, and Guard Statements</h1>
            </header>
            
            <h2>1️⃣ Returning Values from Functions</h2>
            <pre><code>func getUserName() -> String {
    let username: String = "ADARSH"
    return username
}

func checkIfUserIsPremium() -> Bool {
    return false
}

let name = getUserName()
print(name)</code></pre>
            <p>✅ <strong>Key Points:</strong></p>
            <ul>
                <li><code>-></code> defines return type.</li>
                <li><code>String</code> and <code>Bool</code> are common return types.</li>
                <li>Functions can return computed or fixed values.</li>
            </ul>

            <h2>2️⃣ Functions with Parameters</h2>
            <pre><code>func calculateNumbers(value1: Int, value2: Int) -> Int {
    return value1 + value2
}

let result = calculateNumbers(value1: 5, value2: 2)</code></pre>

            <h2>3️⃣ Conditional Logic with Operators</h2>
            <pre><code>func checkUserStatus(didCompleteOnboarding: Bool, profileIsCreated: Bool) -> Bool {
    return didCompleteOnboarding && profileIsCreated
}</code></pre>

            <h2>4️⃣ Guard Statement</h2>
            <pre><code>func checkIfTitleIsDON() -> Bool {
    let title = "DONGANG"
    
    guard title == "DONGANG" else {
        return false
    }
    
    return true
}</code></pre>
            <p>✅ <strong>Why Guard?</strong> Used for early exit, improves readability, and avoids deep nesting.</p>
        `
    }
];
