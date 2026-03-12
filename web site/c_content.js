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
    },
    {
        topic: "Input/Output",
        title: "User Input and scanf()",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">User Input/Output</span>
                <h1>User Input/Output in C</h1>
            </header>
            
            <p>We have already learned how the <code>printf()</code> function is used to output values in C. Another method, which goes by the name, <code>scanf()</code>, is used to get user input.</p>

            <p>The <code>scanf()</code> function takes two arguments:</p>
            <ul>
                <li>the <strong>format specifier</strong> of the variable (as shown in the example below)</li>
                <li>the <strong>reference operator</strong> (<code>&amp;myNum</code>), which stores the memory address of the variable. This is where the input data goes to.</li>
            </ul>

            <h2>Syntax</h2>
            <pre><code>scanf("format specifier", &amp;variable_name);</code></pre>

            <p><code>&amp;</code> - specifies the address of the variable.</p>

            <p>One such example demonstrates how a program takes input from the user.</p>

            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    int marks;
    char name[30];
    printf("Enter student's name: ");
    scanf("%s", name);
    printf("Enter marks in Maths: ");
    scanf("%d", &amp;marks);
 
    printf("Hello %s! You have scored %d in Maths!", name, marks);
    return 0;
}</code></pre>

            <h2>Input</h2>
            <pre><code>Enter student's name: Rohan
Enter marks in Maths: 98</code></pre>

            <h2>Output</h2>
            <pre><code>Hello Rohan! You have scored 98 in Maths!</code></pre>

            <div class="tip-box" style="background: rgba(43, 116, 177, 0.1); padding: 1rem; border-left: 4px solid #2b74b1; border-radius: 4px; margin: 1.5rem 0;">
                You must note that we didn’t have to specify the reference operator (<code>&amp;</code>) in cases of strings if we have specified the size of the strings already. This is an exception.
            </div>
        `
    },
    {
        topic: "Control Flow",
        title: "if...else Statements",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Control Flow</span>
                <h1>if...else Statements in C</h1>
            </header>
            
            <p>Sometimes, we wish to execute one set of instructions if a particular condition is met, and another set of instructions if it is not. This kind of situation is dealt with in C language using a decision control system.</p>

            <p>The condition for the <code>if</code> statement is always enclosed within a pair of parentheses. If the condition is true, then the set of statements following the <code>if</code> statement will execute. And if the condition evaluates to false, then the statement will not execute, instead, the program skips that enclosed part of the code.</p>

            <p>An expression in <code>if</code> statements is defined using relational operators. Comparing two values using relational operators allows us to determine whether they are equal, unequal, greater than, or less than.</p>

            <p>If we want to execute a particular code in some situation and its vice versa/opposite/different code if that situation doesn’t occur, then <code>if..else</code> statements can be used. It all depends on the condition. If the condition returns a true value, the situation has occurred, and the true part of the code will be executed. If the condition returns a false value, the false part of the code will be executed.</p>

            <table style="width:100%; text-align:left; border-collapse: collapse; margin-top: 1.5rem; margin-bottom: 2rem;">
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <th style="padding: 0.5rem;">Conditions</th>
                    <th style="padding: 0.5rem;">Meaning</th>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">a==b</td>
                    <td style="padding: 0.5rem;">a is equal to b</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">a!=b</td>
                    <td style="padding: 0.5rem;">a is not equal to b</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">a&lt;b</td>
                    <td style="padding: 0.5rem;">a is less than b</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">a&gt;b</td>
                    <td style="padding: 0.5rem;">a is greater than b</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">a&lt;=b</td>
                    <td style="padding: 0.5rem;">a is less than or equal to b</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.5rem; color: #2b74b1; font-family: var(--font-mono);">a&gt;=b</td>
                    <td style="padding: 0.5rem;">a is greater than or equal to b</td>
                </tr>
            </table>

            <p>The statement written in an <code>if</code> block will execute when the expression following <code>if</code> evaluates to true. But when the <code>if</code> block is followed by an <code>else</code> block, then when the condition written in the <code>if</code> block turns to be false, the set of statements in the <code>else</code> block will execute.</p>

            <h2>Following is the syntax of if-else statements:</h2>

            <pre><code>if (condition) {
    statements;
} else {
    statements;
}</code></pre>

            <p>One example where we could use the <code>if-else</code> statement is:</p>

            <pre><code>#include &lt;stdio.h&gt;
 
int main() {
    int num = 10;
    if (num &lt;= 10) {
        printf("Number is less than equal to 10.");
    } else {
        printf("Number is greater than 10.");
    }
    return 0;
}</code></pre>

            <h2>Output</h2>
            <pre><code>Number is less than equal to 10.</code></pre>

            <h2>Ladder if-else</h2>

            <p>If we want to check multiple conditions, then ladder <code>if-else</code> can be used. If the previous condition returns false, then only the next condition will be checked.</p>

            <h3>Syntax:</h3>
            <pre><code>if (/*condition*/) {
    // statements
} else if (/*condition*/) {
    // statements
} else if (/*condition*/) {
    // statements
}</code></pre>

            <h2>Nested if-else</h2>

            <p>We can also write an entire <code>if-else</code> statement within either the body of another <code>if</code> statement or the body of an <code>else</code> statement. This is called the 'nesting' of ifs.</p>

            <pre><code>if (/*condition*/) {
    if (/*condition*/) {
        // statements
    } else {
        // statements
    }
} else {
    // statements
}</code></pre>
        `
    },
    {
        topic: "Control Flow",
        title: "Switch Case Statements",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Control Flow</span>
                <h1>Switch Case Statements in C</h1>
            </header>
            
            <h2>What is Switch?</h2>
            <p>The control statement that allows us to make a decision effectively from the number of choices is called a switch, or a switch case-default since these three keywords go together to make up the control statement. The expression in switch returns an integral value, which is then compared with different cases. Switch executes that block of code, which matches the case value. If the value does not match with any of the cases, then the default block is executed.</p>

            <h2>Following is the syntax of switch case-default statements:</h2>
            <pre><code>switch (integer expression)
{
case {value 1} :
    do this ;

case {value 2} :
    do this ;

case {value 3} :
    do this ;

default :
    do this ;
}</code></pre>

            <h2>Understanding the syntax:</h2>
            <p>The expression following the switch can be an integer expression or a character expression. The case value 1, and 2 are case labels that are used to identify each case individually. Remember, that case labels should be unique for each of the cases. If it is the same, it may create a problem while executing a program. At the end of the case labels, we always use a colon (<code>:</code>). Each case is associated with a block. A block contains multiple statements that are grouped together for a particular case.</p>

            <p>Whenever the switch is executed, the value of test-expression is compared with all the cases present in switch statements. When the case is found, the block of statements associated with that particular case will execute. The <code>break</code> keyword indicates the end of a particular case. If we do not put the break in each case, then even though the specific case is executed, C's switch will continue to execute all the cases until the end is reached. The <code>default</code> case is optional. Whenever the expression's value is not matched with any of the cases inside the switch, then the default case will be executed.</p>

            <p>One example where we could use the switch case statement is:</p>

            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    int i = 2;
 
    switch (i)
    {
    case 1:
        printf("Statement 1");
        break;
 
    case 2:
        printf("Statement 2");
        break;
 
    case 3:
        printf("Statement 3");
        break;
 
    default:
        printf("No valid i to switch to.");
        break;
    }
    return 0;
}</code></pre>

            <h2>Output</h2>
            <pre><code>Statement 2</code></pre>

            <h2>Different to if-else. How?</h2>
            <p>There is one problem with the <code>if</code> statement: the program's complexity increases whenever the number of <code>if</code> statements increases. If we use multiple if-else statements in the program, the code might become difficult to read and comprehend. Sometimes it also even confuses the developer who himself wrote the program. Using the switch statement is the solution to this problem.</p>

            <div class="tip-box" style="background: rgba(43, 116, 177, 0.1); padding: 1rem; border-left: 4px solid #2b74b1; border-radius: 4px; margin: 1.5rem 0;">
                <p><strong>Furthermore:</strong></p>
                <ul>
                    <li>Switch statements cannot evaluate float conditions, and the test expression can only be an integer or a character, whereas if statements can evaluate float conditions as well.</li>
                    <li>Switch statements cannot evaluate relational operators hence they are not allowed in switch statements, whereas if statements can evaluate relational operators.</li>
                    <li>Cases in the switch can never have variable expressions; for example, we cannot write <code>case a + 3:</code>.</li>
                </ul>
            </div>

            <h2>Rules for Switch statements</h2>
            <ul>
                <li>The test expression of Switch must necessarily be an <code>int</code> or <code>char</code>.</li>
                <li>The value of the case should be an integer or character.</li>
                <li>Cases should only be inside the switch statement.</li>
                <li>Using the <code>break</code> keyword in the switch statement is not necessary.</li>
                <li>The case label values inside the switch should be unique.</li>
                <li>It is not necessary to use the <code>break</code> keyword after every case. Break keywords should only be used when we want to terminate our case at that time, otherwise we won’t.</li>
            </ul>

            <p>We can also use nested switch statements i.e., switch inside another switch. Also, the case constants of the inner and outer switch may have common values without any conflicts.</p>
        `
    },
    {
        topic: "Control Flow",
        title: "Loops in C",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Control Flow</span>
                <h1>Loops in C</h1>
            </header>
            
            <p>In programming, we often have to perform an action repeatedly, with little or no variations in the details each time they are executed. This need is met by a mechanism known as a <strong>loop</strong>.</p>
            
            <p>The versatility of the computer lies in its ability to perform a set of instructions repeatedly. This involves repeating some code in the program, either a specified number of times or until a particular condition is satisfied. Loop-controlled instructions are used to perform this repetitive operation efficiently, ensuring the program doesn’t look redundant at the same time due to the repetitions.</p>
            
            <p>Following are the three types of loops in C programming:</p>
            <ul>
                <li><strong>For loop</strong></li>
                <li><strong>While loop</strong></li>
                <li><strong>Do-while loop</strong></li>
            </ul>

            <h2>Types of Loops</h2>
            
            <h3>Entry Controlled loops</h3>
            <p>In entry controlled loops, the test condition is evaluated before entering the loop body. The <code>for</code> loop and the <code>while</code> loop are examples of entry-controlled loops.</p>
            
            <h3>Exit Controlled Loops</h3>
            <p>In exit-controlled loops, the test condition is tested at the end of the loop. Regardless of whether the test condition is true or false, the loop body will execute at least once. The <code>do-while</code> loop is an example of an exit-controlled loop.</p>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>For Loop</h2>
            <p>A <code>for</code> loop is a repetition control structure that allows us to efficiently write a loop that will execute a specific number of times. The <code>for</code> loop working is as follows:</p>
            
            <ol>
                <li>The initialization statement is executed only once; in this statement, we initialize a variable to some value.</li>
                <li>In the second step, the test expression is evaluated. Suppose the test expression is evaluated to be true. In that case, the <code>for</code> loop keeps running, and the test expression is re-evaluated, but if the test expression is evaluated to false, then the <code>for</code> loop terminates.</li>
                <li>The loop keeps executing until the test expression is false. When the test expression is false, then the loop terminates.</li>
            </ol>

            <pre><code>for (initialization; test_expression; update) {
    // block of code to be executed
}</code></pre>

            <h2>While Loop</h2>
            <p>The <code>while</code> loop is called a pre-tested loop. The <code>while</code> loop allows code to be executed multiple times, depending upon a boolean condition that is given as a test expression. While introducing <code>for</code> loops, we saw that the number of iterations is known, whereas <code>while</code> loops are used in situations where we do not know the exact number of iterations of the loop. The <code>while</code> loop execution is terminated based on the test condition which evaluates to either true or false.</p>

            <pre><code>while (test_condition) {
    // code block to be executed
}</code></pre>

            <h2>Do-while Loop</h2>
            <p>In <code>do-while</code> loops, the execution is terminated based on the test condition, very similar to how it is done in a <code>while</code> loop. The main difference between the <code>do-while</code> loop and <code>while</code> loop is that, in the <code>do-while</code> loop, the condition is tested at the end of the loop body, whereas the other two loops are entry-controlled. In a <code>do-while</code> loop, the loop body will execute at least once irrespective of the test condition.</p>

            <pre><code>do {
    // code block to be executed
} while (test_condition);</code></pre>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>Jump Statements in Loops</h2>
            <p>Sometimes, while executing a loop, it becomes necessary to jump out of the loop. For this, we make use of the <code>break</code> statement and the <code>continue</code> statement.</p>

            <div class="tip-box" style="background: rgba(43, 116, 177, 0.1); padding: 1rem; border-left: 4px solid #f05138; border-radius: 4px; margin: 1.5rem 0;">
                <p><strong>Break Statement</strong></p>
                <p>Whenever a <code>break</code> statement is encountered in a loop, the loop is terminated regardless of what kind of loop we are in and the program continues with the statement following the loop.</p>
            </div>

            <div class="tip-box" style="background: rgba(43, 116, 177, 0.1); padding: 1rem; border-left: 4px solid #2b74b1; border-radius: 4px; margin: 1.5rem 0;">
                <p><strong>Continue Statement</strong></p>
                <p>Whenever a <code>continue</code> statement is encountered in a loop, it will cause the control to go directly to the test condition which is where the loop starts, ignoring any piece of code following the <code>continue</code> statement.</p>
            </div>
        `
    },
    {
        topic: "Control Flow",
        title: "Break and Continue",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Control Flow</span>
                <h1>Break and Continue Statements</h1>
            </header>

            <h2>Break Statement</h2>
            <p><code>break</code> statement is used to break the loop or switch case statements execution and brings the control to the next block of code after that particular loop or switch case it was used in.</p>
            <ul>
                <li><code>break</code> statements are used to bring the program control out of the loop it was encountered in.</li>
                <li>The <code>break</code> statement is used inside loops or switch statements in C Language.</li>
            </ul>

            <p>One such example to demonstrate how a <code>break</code> statement works is:</p>

            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    int i = 0;
    while (1)
    {
        if (i &gt; 5)
        {
            break;
        }
        printf("%d ", i);
        i++;
    }
 
    return 0;
}</code></pre>

            <h2>Output</h2>
            <pre><code>0 1 2 3 4 5</code></pre>
            <p>Here, when <code>i</code> became 6, the <code>break</code> statement got executed and the program came out of the <code>while</code> loop.</p>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>Continue Statement</h2>
            <p>The <code>continue</code> statement is used inside loops in C Language. When a <code>continue</code> statement is encountered inside the loop, the control jumps to the beginning of the loop for the next iteration, skipping the execution of statements inside the body of the loop after the <code>continue</code> statement.</p>

            <ul>
                <li>It is used to bring the control to the next iteration of the loop.</li>
                <li>Typically, the <code>continue</code> statement skips some code inside the loop and lets the program move on with the next iteration.</li>
                <li>It is mainly used for a condition so that we can skip some lines of code for a particular condition.</li>
                <li>It forces the next iteration to follow in the loop unlike a <code>break</code> statement, which terminates the loop itself the moment it is encountered.</li>
            </ul>

            <p>One such example to demonstrate how a <code>continue</code> statement works is:</p>

            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    for (int i = 0; i &lt;= 10; i++)
    {
        if (i &lt; 6)
        {
            continue;
        }
        printf("%d ", i);
    }
    return 0;
}</code></pre>

            <h2>Output</h2>
            <pre><code>6 7 8 9 10</code></pre>
            <p>Here, the <code>continue</code> statement was continuously executing while <code>i</code> remained less than 6. For all the other values of <code>i</code>, we got the print statement working.</p>
        `
    },
    {
        topic: "Arrays Data Structure",
        title: "Array Basics",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Data Structures</span>
                <h1>Array Basics in C</h1>
            </header>
            
            <p>An array is a collection of data items of the same data type. And it is also known as a subscript variable.</p>

            <ul>
                <li>Items are stored at contiguous memory locations in arrays.</li>
                <li>It can also store the collection of derived data types such as pointers, structures, etc.</li>
                <li>The C Language places no limits on the number of dimensions in an array. This means we can create arrays of any number of dimensions. It could be a 2D array or a 3D array or more.</li>
            </ul>

            <h2>Dimensions of an array</h2>
            <p>A one-dimensional array is like a list.</p>
            <p>A two-dimensional array is like a table.</p>
            <p>Some texts refer to one-dimensional arrays as vectors and two-dimensional arrays as matrices and use the general term arrays when the number of dimensions is unspecified or unimportant.</p>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>How do Arrays help?</h2>
            <p>Programs that use arrays for managing a large number of the same data type variables are more organized and readable in comparison to creating different variables of the same type for each data element.</p>

            <p>Arrays allow us to create many variables by just a single line. It means there is no need to create or specify every variable.</p>

            <h2>Advantages of Arrays?</h2>
            <ol>
                <li>It is used to represent multiple data items of the same type by using only a single name.</li>
                <li>Accessing any random item at any random position in a given array is very fast in an array.</li>
                <li>There is no case of memory shortage or overflow in the case of arrays since the size is fixed and elements are stored in contiguous memory locations.</li>
            </ol>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>Properties of Arrays</h2>
            <div class="tip-box" style="background: rgba(43, 116, 177, 0.1); padding: 1rem; border-left: 4px solid #2b74b1; border-radius: 4px; margin: 1.5rem 0;">
                <p>An array stores data be it of any data type in contiguous memory locations in RAM.</p>
                <p>Each element of an array is of the same size i.e. their data types are the same so the memory consumed by each is also the same.</p>
                <p>Any element of the array with a given index can be accessed very quickly by using its address which can be calculated using the base address and the index number.</p>
                <p><strong>Index Number</strong> – It is the special type of number which allows us to access variables of arrays. Index number provides a method to access each element of an array in a program.</p>
        </div>
        `
    },
    {
        topic: "Arrays Data Structure",
        title: "Array Operations",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Data Structures</span>
                <h1>Array Operations in C</h1>
            </header>

            <h2>Defining an array</h2>
            
            <h3>1. Without specifying the size of the array</h3>
            <pre><code>int arr[] = {1, 2, 3};</code></pre>
            <p>Here, we can leave the square brackets empty, although the array cannot be left empty in this case. It must have elements in it.</p>

            <h3>2. With specifying the size of the array</h3>
            <pre><code>int arr[3];
arr[0] = 1, arr[1] = 2, arr[2] = 3;</code></pre>
            <p>Here, we can specify the size of the array in its definition itself. We can then put array elements later as well.</p>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>Accessing an array element</h2>
            <p>An element in an array can easily be accessed through its index number. This must be remembered that the index number starts from 0 and not one.</p>

            <p>Example:</p>
            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    int arr[] = {1, 5, 7, 2};
    printf("%d ", arr[2]); //printing element on index 2
    return 0;
}</code></pre>

            <h3>Output:</h3>
            <pre><code>7</code></pre>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>Changing an array element</h2>
            <p>An element in an array can be overwritten using its index number.</p>

            <p>Example:</p>
            <pre><code>#include &lt;stdio.h&gt;
 
int main()
{
    int arr[] = {1, 5, 7, 2};
    arr[2] = 8; //changing the element on index 2
    printf("%d ", arr[2]); //printing element on index 2
    return 0;
}</code></pre>

            <h3>Output:</h3>
            <pre><code>8</code></pre>
        `
    },
    {
        topic: "Strings",
        title: "String Basics",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Strings</span>
                <h1>String Basics in C</h1>
            </header>
            
            <h2>What are Strings?</h2>
            <p>A string is an array of characters. Data of the same type are stored in an array, for example, integers can be stored in an integer array, similarly, a group of characters can be stored in a character array. This character array is also known as strings. A string is a one-dimensional array of characters that is terminated by a null (<code>'\\0'</code>).</p>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>Declaration of Strings:</h2>
            <p>Declaring a string is very simple, the same as declaring a one-dimensional array. It’s just that we are considering it as an array of characters.</p>

            <p>Below is the syntax for declaring a string.</p>
            <pre><code>char string_name[string_size];</code></pre>

            <p>In the above syntax, <code>string_name</code> is any name given to the string variable, and <code>string_size</code> is used to define the length of the string, i.e., the number of characters that the strings will store. Keep in mind that there is an extra terminating character which is the null character (<code>'\\0'</code>) that is used to indicate the termination of the string.</p>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>Example of string:</h2>
            <pre><code>#include &lt;stdio.h&gt;
int main()
{
    // declare and initialise string
    char str[] = "CodeWithadarsh";
    printf("%s", str);
    return 0;
}</code></pre>

            <h3>Output:</h3>
            <pre><code>CodeWithadarsh</code></pre>
        `
    },
    {
        topic: "Strings",
        title: "String Functions",
        content: `
            <header>
                <span class="day-badge" style="background-color: rgba(43, 116, 177, 0.15); color: #2b74b1;">Strings</span>
                <h1>String Functions in C</h1>
            </header>
            
            <p>We can use C's string handling library functions to handle strings. The <code>&lt;string.h&gt;</code> library is used to perform string operations. It provides several functions for manipulating strings.</p>

            <p>Following are some commonly used string handling functions:</p>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>1. strcat()</h2>
            <p>This function is used to concatenate the source string to the end of the target string. This function expects two parameters, first, the base address of the source string and then the base address of the target string. For example, "Hello" and "World" on concatenation would result in a string "HelloWorld".</p>

            <p>Here is how we can use the <code>strcat()</code> function:</p>

            <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
int main()
{
    char s[20] = "Hello";
    char t[] = "World";
    strcat(s, t);
    printf("String = %s", s);
}</code></pre>

            <h3>Output:</h3>
            <pre><code>String = HelloWorld</code></pre>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>2. strlen()</h2>
            <p>This function is used to count the number of characters present in a string.</p>

            <p>Here is how we can use the <code>strlen()</code> function:</p>

            <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
int main()
{
    char s[] = "Hello";
    int len = strlen(s);
    printf("Length = %d", len);
}</code></pre>

            <h3>Output:</h3>
            <pre><code>Length = 5</code></pre>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>3. strcpy()</h2>
            <p>This function is used to copy the contents of one string into the other. This function expects two parameters, first, the base address of the source string and then the base address of the target string.</p>

            <p>Here is how we can use the <code>strcpy()</code> function:</p>

            <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
int main()
{
    char s[] = "CodeWithAdarsh";
    char t[50];
    strcpy(t, s);
    printf("Source string = %s\\n", s);
    printf("Target string = %s", t);
}</code></pre>

            <h3>Output:</h3>
            <pre><code>Source string = CodeWithAdarsh
Target string = CodeWithAdarsh</code></pre>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>4. strcmp()</h2>
            <p>The <code>strcmp()</code> function is used to compare two strings to find out whether they are the same or different. It takes two strings as two of its parameters. It will compare two strings, character by character until there is a mismatch or the iterator reaches the end of one of the strings.</p>

            <p>If both of the strings are identical, <code>strcmp()</code> returns a value of zero. If they are not identical, it will return a value less than zero, considering the ASCII value of the mismatched character in the first string is less than the mismatched character in the second string. Else, it will return a value greater than 0.</p>

            <p>Here is how we can use the <code>strcmp()</code> function:</p>

            <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
int main()
{
    char s[] = "Hello";
    char t[] = "World";
    int cmp = strcmp(s, t);
    printf("Comparison result = %d", cmp);
}</code></pre>

            <h3>Output:</h3>
            <pre><code>Comparison result = -1</code></pre>

            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 2rem 0;">

            <h2>5. strrev()</h2>
            <p>This function is used to return the reverse of the string.</p>

            <p>Here is how we can use the <code>strrev()</code> function:</p>

            <pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;
int main()
{
    char s[] = "Hello";
    printf("Reversed string = %s", strrev(s));
}</code></pre>

            <h3>Output:</h3>
            <pre><code>Reversed string = olleH</code></pre>
        `
    }
];
