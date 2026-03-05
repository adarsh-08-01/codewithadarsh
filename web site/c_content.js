/**
 * codewithadarsh - C Tutorial Content Data
 */

const tutorialData = [
    {
        topic: "Introduction & Setup",
        title: "Installing C on Windows, Mac, and Linux",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Introduction & Setup</span>
                <h1>Setting up C on Windows, Mac, and Linux</h1>
            </header>
            
            <p>Welcome to the <strong>C Programming Series</strong>! C is often considered the "mother of all programming languages." It is incredibly fast, efficient, and gives you deep control over system memory.</p>
            <p>Before we write our first line of code, we need to completely set up our environment. A C compiler translates our human-readable C code into machine code that the computer can understand. We highly recommend using <strong>Visual Studio Code (VS Code)</strong> along with a C compiler like GCC.</p>
            
            <div class="tip-box" style="background: rgba(43, 116, 177, 0.1); padding: 1rem; border-left: 4px solid #2b74b1; border-radius: 4px; margin: 1.5rem 0;">
                <strong>Step 0 for everyone:</strong> Download and install <a href="https://code.visualstudio.com/" target="_blank" style="color: #2b74b1; text-decoration: underline;">Visual Studio Code (VS Code)</a>, an amazing code editor! Also, install the <strong>"C/C++" extension</strong> by Microsoft from the VS Code Extensions tab.
            </div>

            <h2>🪟 Windows Setup (MinGW)</h2>
            <ol>
                <li>Download the <strong>MinGW-w64 compiler</strong> (a popular Windows port of GCC). The easiest modern way is to use MSYS2 from <a href="https://www.msys2.org/" target="_blank">msys2.org</a>.</li>
                <li>Download the installer and follow the instructions. Upon completion, it will open an MSYS2 terminal.</li>
                <li>In that terminal, run exactly this command to install the GCC compiler: 
                    <pre><code>pacman -S mingw-w64-ucrt-x86_64-gcc</code></pre>
                </li>
                <li>Now you must add it to your System PATH to use it in VS Code:
                    <ul>
                        <li>Open the Start Menu and search for <em>"Environment Variables"</em>.</li>
                        <li>Click <em>"Environment Variables" -> "Path" -> Edit</em>.</li>
                        <li>Add a new line: <code>C:\\msys64\\ucrt64\\bin</code>.</li>
                        <li>Click OK on all menus.</li>
                    </ul>
                </li>
                <li>Open a new Command Prompt and type <code>gcc --version</code>. If it prints the version, you are successfully set up!</li>
            </ol>

            <h2>🍏 Mac Setup (Clang/Xcode Build Tools)</h2>
            <p>Mac holds a special advantage because it is a Unix-based system. Installing a C compiler is incredibly simple through Apple's Command Line Tools.</p>
            <ol>
                <li>Open the <strong>Terminal</strong> app (use Spotlight Search: CMD + Space -> type "Terminal").</li>
                <li>Type the following command and press Enter:
                    <pre><code>xcode-select --install</code></pre>
                </li>
                <li>A pop-up will appear asking to install "Command Line Developer Tools". Click <strong>Install</strong> and agree to the terms.</li>
                <li>Wait for the download to finish. It comes with <code>clang</code>, Apple's advanced C compiler.</li>
                <li>Once done, type <code>gcc --version</code> or <code>clang --version</code> in the terminal. It should print out detailed version info. You're ready!</li>
            </ol>
            
            <h2>🐧 Linux Setup (GCC)</h2>
            <p>Linux is the native home of C programming. On almost all modern distributions, getting a compiler is typically a single command.</p>
            <ol>
                <li>Open your Terminal.</li>
                <li>Update your package list first:
                    <pre><code>sudo apt update</code></pre>
                </li>
                <li>Install the essential build tools which include the <code>gcc</code> compiler:
                    <pre><code>sudo apt install build-essential</code></pre>
                </li>
                <li>Verify your installation:
                    <pre><code>gcc --version</code></pre>
                </li>
                <li>That's it! You have successfully configured your Linux machine for C programming.</li>
            </ol>
        `
    },
    {
        topic: "C Basics",
        title: "Hello World in C",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">C Basics</span>
                <h1>Writing your First C Program</h1>
            </header>
            
            <p>Now that your computer has a compiler and VS Code, let's write the iconic "Hello World" application to ensure everything works end-to-end.</p>

            <h2>1️⃣ Creating the File</h2>
            <p>Open VS Code, create a new folder, and make a file named <code>main.c</code>. Note the <code>.c</code> extension, dictating a C source file.</p>

            <h2>2️⃣ The Code</h2>
            <pre><code>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>

            <h2>3️⃣ What does this mean?</h2>
            <ul>
                <li><code>#include &lt;stdio.h&gt;</code>: This tells the compiler to include the Standard Input/Output library before compiling. Without it, the <code>printf</code> function would not work.</li>
                <li><code>int main()</code>: The main function is the entry point of every C program. Execution always starts here.</li>
                <li><code>printf(...)</code>: This function prints the text to the screen. The <code>\\n</code> is a newline character.</li>
                <li><code>return 0;</code>: A successful main method must return an integer back to the operating system. 0 signifies no errors occurred.</li>
            </ul>

            <h2>4️⃣ Running the Program</h2>
            <p>In VS Code, if you installed the C/C++ Extension, you can click the small "Play" button in the top right corner. Alternatively, in the integrated terminal, type:</p>
            <pre><code>gcc main.c
./a.out      # On Mac/Linux
a.exe        # On Windows</code></pre>
        `
    },
    {
        topic: "Basic Structure & Syntax",
        title: "Tokens, Keywords, and Identifiers",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Structure & Syntax</span>
                <h1>Basic Structure & Syntax</h1>
            </header>
            
            <p>Programming in C involves following a basic structure throughout. Here’s what it can be broken down to:</p>
            <ul>
                <li>Pre-processor commands</li>
                <li>Functions</li>
                <li>Variables</li>
                <li>Statements & Expressions</li>
                <li>Comments</li>
            </ul>

            <h2>Pre-processor commands & Header Files</h2>
            <p>Pre-processor commands tell our program that before its execution, it must include the file name mentioned. They add functionalities to a program.</p>
            <pre><code>#include &lt;math.h&gt;</code></pre>
            <p>We include <code>math.h</code> to be able to use some special functions like power and absolute. <code>#include &lt;filename.h&gt;</code> is how we include them into our programs.</p>
            
            <p><strong>Header files:</strong></p>
            <ul>
                <li>Collection of predefined/built-in functions.</li>
                <li>Declared at the heading of the program, hence called a header file.</li>
                <li>Identified with the extension (<code>.h</code>).</li>
                <li>Acts as a library of functions.</li>
            </ul>

            <h2>Basic Syntax Structure</h2>
            <pre><code>#include &lt;stdio.h&gt;           // Declaration of header file
int main()                   /* Main function where execution begins */
{                            // Start of the program
    // Program statements 
    return 0;
}                            // End of the program</code></pre>

            <h2>Tokens, Keywords & Identifiers</h2>
            <p>A C program is made up of different <strong>tokens</strong> combined: Keywords, Identifiers, Constants, String Literals, and Symbols.</p>
            
            <h3>Keywords</h3>
            <p>Keywords are reserved words that cannot be used elsewhere in the program for naming a variable or a function. Their functionalities are pre-defined (e.g., <code>return</code>, <code>auto</code>, <code>if</code>, <code>default</code>).</p>
            
            <h3>Identifiers</h3>
            <p>Names given to variables or functions. Rules for naming:</p>
            <ul>
                <li>Cannot contain special symbols such as <code>@, -, *, &lt;</code>.</li>
                <li>Cannot start with a numeric value; must start with an underscore or alphabet.</li>
                <li>Cannot contain spaces.</li>
                <li>C is case-sensitive (<code>Code</code> and <code>code</code> are different identifiers).</li>
            </ul>

            <h3>Comments</h3>
            <p>Used to insert informative text that the compiler ignores.</p>
            <p><strong>Single Line:</strong></p>
            <pre><code>// This is a single line comment
printf("Hello World!");</code></pre>
            <p><strong>Multi Line:</strong></p>
            <pre><code>/* This is a
multi-line
comment */</code></pre>
        `
    },
    {
        topic: "Variables & Data Types",
        title: "Variables, Constants, and Formatting",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Variables & Data Types</span>
                <h1>Variables and Constants</h1>
            </header>
            
            <p>Variables are containers for storing data values.</p>

            <h2>Variable Declarations</h2>
            <p>We cannot declare a variable without specifying its data type. Syntax:</p>
            <pre><code>data_type variable_name = value;</code></pre>

            <h2>Basic Data Types & Format Specifiers</h2>
            <p>You must use a <strong>format specifier</strong> inside the <code>printf</code> function to display the value present in the variable.</p>

            <table style="width:100%; text-align:left; border-collapse: collapse; margin-bottom: 2rem;">
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <th style="padding: 0.5rem;">Data Type</th>
                    <th style="padding: 0.5rem;">Size</th>
                    <th style="padding: 0.5rem;">Description</th>
                    <th style="padding: 0.5rem;">Format Specifier</th>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem;"><code>int</code></td>
                    <td style="padding: 0.5rem;">2 or 4 bytes</td>
                    <td style="padding: 0.5rem;">Whole numbers</td>
                    <td style="padding: 0.5rem;"><code>%d</code> or <code>%i</code></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem;"><code>float</code></td>
                    <td style="padding: 0.5rem;">4 bytes</td>
                    <td style="padding: 0.5rem;">Fractional numbers (7 decimal digits)</td>
                    <td style="padding: 0.5rem;"><code>%f</code></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem;"><code>double</code></td>
                    <td style="padding: 0.5rem;">8 bytes</td>
                    <td style="padding: 0.5rem;">Fractional numbers (15 decimal digits)</td>
                    <td style="padding: 0.5rem;"><code>%lf</code></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem;"><code>char</code></td>
                    <td style="padding: 0.5rem;">1 byte</td>
                    <td style="padding: 0.5rem;">Single character (in 'quotes')</td>
                    <td style="padding: 0.5rem;"><code>%c</code></td>
                </tr>
            </table>

            <h2>Printing Variables Example</h2>
            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    int integer = 26;
    float floating = 39.32;
    char character = 'A';
 
    printf("%d\\n", integer);
    printf("%f\\n", floating);
    printf("%c\\n", character);
    
    return 0;
}</code></pre>

            <h2>C Constants</h2>
            <p>When you don't want the variables you declare to get modified, you use the <code>const</code> keyword (read-only).</p>
            <pre><code>const int MOD = 10000007;
// MOD = 5; ❌ Error!</code></pre>
        `
    },
    {
        topic: "Operators in C",
        title: "Arithmetic, Relational, and Logical",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Operators</span>
                <h1>Operators in C</h1>
            </header>
            
            <p>Special symbols that are used to perform actions or operations are known as operators.</p>

            <h2>Arithmetic Operators</h2>
            <ul>
                <li><code>+</code> Addition</li>
                <li><code>-</code> Subtraction</li>
                <li><code>*</code> Multiplication</li>
                <li><code>/</code> Division</li>
                <li><code>%</code> Modulus (Returns the remainder)</li>
            </ul>
            <pre><code>int x = 5 % 2;
printf("remainder is %d", x); // Output: 1</code></pre>

            <h2>Relational Operators</h2>
            <p>Used for comparison. The return value is Boolean: True (1) or False (0).</p>
            <ul>
                <li><code>&gt;</code> Greater than</li>
                <li><code>&lt;</code> Less than</li>
                <li><code>&gt;=</code> Greater than or equal to</li>
                <li><code>&lt;=</code> Less than or equal to</li>
                <li><code>==</code> Is equal to</li>
                <li><code>!=</code> Is not equal to</li>
            </ul>
            <pre><code>int a = 2, b = 3;
printf("a == b = %d\\n", a == b); // Output: 0</code></pre>

            <h2>Logical Operators</h2>
            <ul>
                <li><code>&&</code> <strong>AND:</strong> returns true when both operators are true (1)</li>
                <li><code>||</code> <strong>OR:</strong> returns true when either operator is true (1)</li>
                <li><code>!</code> <strong>NOT:</strong> reverses the logical state</li>
            </ul>

            <h2>Bitwise Operators</h2>
            <p>Used to perform operations at the bit level (binary format).</p>
            <ul>
                <li><code>&</code> Bitwise AND</li>
                <li><code>|</code> Bitwise OR</li>
                <li><code>^</code> Bitwise XOR</li>
                <li><code>~</code> Bitwise Complement</li>
                <li><code>&gt;&gt;</code> Shift Right</li>
                <li><code>&lt;&lt;</code> Shift Left</li>
            </ul>
            <pre><code>int a = 2; // 10 in binary
int b = 3; // 11 in binary
printf("a xor b = %d\\n", a ^ b); // Output: 1 (01 in binary)</code></pre>

            <h2>Assignment Operators</h2>
            <ul>
                <li><code>=</code> Assigns value</li>
                <li><code>+=</code> Adds and assigns (<code>a += 2</code> is the same as <code>a = a + 2</code>)</li>
                <li><code>-=</code> Subtracts and assigns</li>
                <li><code>*=</code> Multiplies and assigns</li>
            </ul>
        `
    },
    {
        topic: "Format & Escape",
        title: "Format Specifiers and Escape Sequences",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Output Formatting</span>
                <h1>Format Specifiers and Escape Sequences</h1>
            </header>
            
            <p>Whenever we write a program in C, we have to use format specifiers to define the variable type in input and output, and escape characters to format the output text itself.</p>

            <h2>Format Specifiers</h2>
            <p>A format specifier in C programming is used to define the type of data we are printing to the output or accepting through the input. Through this, we tell the compiler what type of variable we are using for input while using <code>scanf()</code> or output while using <code>printf()</code>.</p>
            
            <table style="width:100%; text-align:left; border-collapse: collapse; margin-top: 1.5rem; margin-bottom: 2rem;">
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <th style="padding: 0.5rem;">Format Specifier</th>
                    <th style="padding: 0.5rem;">Type & Description</th>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%c</td>
                    <td style="padding: 0.5rem;">Used to print a character</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%d</td>
                    <td style="padding: 0.5rem;">Used to print the signed integer</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%f</td>
                    <td style="padding: 0.5rem;">Used to print the float values</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%i</td>
                    <td style="padding: 0.5rem;">Used to print the unsigned integer</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%l</td>
                    <td style="padding: 0.5rem;">Used to print the long integer</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%lf</td>
                    <td style="padding: 0.5rem;">Used to print the double values</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%lu</td>
                    <td style="padding: 0.5rem;">Used to print the unsigned integer or unsigned long integer</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%s</td>
                    <td style="padding: 0.5rem;">Used to print a string</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">%u</td>
                    <td style="padding: 0.5rem;">Used to print the unsigned integer</td>
                </tr>
            </table>

            <p>One example is shown below:</p>
            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    char c[100] = "CodeWithHarry";
    printf("Printing a string, %s.", c);
    return 0;
}</code></pre>
            <p><strong>Output:</strong> <code>Printing a string, CodeWithHarry.</code></p>
            <p>The <code>%s</code> used in the <code>printf()</code> is a format specifier. This format specifier tells <code>printf()</code> to consider it as a string and print accordingly.</p>

            <h2>Escape Sequences</h2>
            <p>Many programming languages support the concept of Escape Sequences. An escape sequence is a sequence of characters that are used in formatting the output. They are not displayed on the screen while printing. Each character has its specific function.</p>
            
            <table style="width:100%; text-align:left; border-collapse: collapse; margin-top: 1.5rem; margin-bottom: 2rem;">
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <th style="padding: 0.5rem;">Escape Sequence</th>
                    <th style="padding: 0.5rem;">Description</th>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">\\t</td>
                    <td style="padding: 0.5rem;">Inserts a tab space</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">\\b</td>
                    <td style="padding: 0.5rem;">Inserts a backspace</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #f05138; font-weight: bold; font-family: var(--font-mono);">\\n</td>
                    <td style="padding: 0.5rem;"><strong>Inserts a new line (Most common!)</strong></td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">\\r</td>
                    <td style="padding: 0.5rem;">Inserts a carriage return</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">\\f</td>
                    <td style="padding: 0.5rem;">Inserts a form feed</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">\\'</td>
                    <td style="padding: 0.5rem;">Inserts a single quote character</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">\\"</td>
                    <td style="padding: 0.5rem;">Inserts a double quote character</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">\\\\</td>
                    <td style="padding: 0.5rem;">Inserts a backslash character</td>
                </tr>
            </table>

            <p>One example is shown below:</p>
            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    printf("Printing inside a double quotation, \\"Code With Adarsh\\"");
    return 0;
}</code></pre>
            <p><strong>Output:</strong> <code>Printing inside a double quotation, "Code With Adarsh"</code></p>
        `
    }
];
