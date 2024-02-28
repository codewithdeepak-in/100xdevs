/* Regular expressions, often abbreviated as "regex" or "regexp," are patterns used to match character combinations in strings. They provide a powerful and flexible way to search, manipulate, and validate text data. Regular expressions are supported in many programming languages and text processing tools.

Here's a comprehensive guide to understanding regular expressions:

# 1. Basics:
   -Literal Characters: Regular expressions can consist of literal characters, which match themselves in the input string.
   -Metacharacters: Characters with special meanings in regular expressions are called metacharacters. Some common metacharacters include `.` (matches any character except newline), `*` (matches zero or more occurrences of the preceding character), `+` (matches one or more occurrences), `?` (matches zero or one occurrence), `^` (matches the start of the string), `$` (matches the end of the string), etc.
   -Character Classes: Character classes allow you to specify a set of characters to match. For example, `[aeiou]` matches any vowel.
   -Quantifiers: Quantifiers specify how many instances of a character or group should be matched. For example, `a{3}` matches exactly three consecutive 'a' characters.

#  2. Anchors and Boundaries:
   -`^`: Matches the start of the string.
   -`$`: Matches the end of the string.
   -`\b`: Matches a word boundary.
   -`\B`: Matches a non-word boundary.

# 3. Groups and Capturing:
   -Groups: Use parentheses `()` to create groups. Groups can be used for capturing substrings or applying quantifiers to multiple characters.
   - **Capturing Groups**: When using parentheses, the matched substring can be captured and referenced later.

# 4. Flags:
   - **Global (`g`)**: Finds all matches within the input string.
   - **Case Insensitive (`i`)**: Matches patterns regardless of case.
   - **Multiline (`m`)**: Allows `^` and `$` to match the start/end of each line in multiline strings.

# 5. Examples of Regular Expression Patterns:
   - Matching email addresses: `/^\w+@\w+\.\w+$/`
   - Matching URLs: `/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/`
   - Matching dates: `/^\d{4}-\d{2}-\d{2}$/`
   - Matching phone numbers: `/\d{3}-\d{3}-\d{4}/`

### 6. Tools for Testing and Learning:
   - **Online Regex Testers**: Websites like regex101.com, regexr.com allow you to test regular expressions against sample text.
   - **Regex Libraries**: Most programming languages have built-in support for regular expressions, providing functions and methods for pattern matching and substitution.

Regular expressions are incredibly powerful but can also be complex. They require practice and experimentation to master effectively. Start with simple patterns and gradually increase complexity as you become more comfortable with regular expressions.

Here are five common regex patterns along with explanations:

1. **Email Address Pattern**:
   - Regex Pattern: `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`
   - Explanation: This regex pattern matches email addresses. Here's the breakdown:
     - `^`: Start of the string.
     - `\w+`: Matches one or more word characters (letters, digits, or underscores).
     - `([\.-]?\w+)*`: Matches zero or more groups of a dot or hyphen followed by one or more word characters.
     - `@`: Matches the "@" symbol.
     - `\w+`: Matches one or more word characters.
     - `(\.\w{2,3})+`: Matches one or more groups of a dot followed by 2 or 3 word characters (domain extension).
     - `$`: End of the string.

2. **URL Pattern**:
   - Regex Pattern: `/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/`
   - Explanation: This regex pattern matches URLs. Here's the breakdown:
     - `^`: Start of the string.
     - `(https?|ftp)`: Matches "http", "https", or "ftp".
     - `:\/\/`: Matches "://".
     - `[^\s/$.?#]*`: Matches zero or more characters that are not whitespace, "/", ".", "?", or "#".
     - `$`: End of the string.

3. **Date Pattern (YYYY-MM-DD)**:
   - Regex Pattern: `/^\d{4}-\d{2}-\d{2}$/`
   - Explanation: This regex pattern matches dates in the format YYYY-MM-DD. Here's the breakdown:
     - `^`: Start of the string.
     - `\d{4}`: Matches exactly four digits (year).
     - `-`: Matches "-".
     - `\d{2}`: Matches exactly two digits (month).
     - `-`: Matches "-".
     - `\d{2}`: Matches exactly two digits (day).
     - `$`: End of the string.

4. **Phone Number Pattern (###-###-####)**:
   - Regex Pattern: `/\d{3}-\d{3}-\d{4}/`
   - Explanation: This regex pattern matches phone numbers in the format ###-###-####. Here's the breakdown:
     - `\d{3}`: Matches exactly three digits.
     - `-`: Matches "-".
     - `\d{3}`: Matches exactly three digits.
     - `-`: Matches "-".
     - `\d{4}`: Matches exactly four digits.

5. **Username Pattern (Alphanumeric with Underscores)**:
   - Regex Pattern: `/^[a-zA-Z0-9_]{4,16}$/`
   - Explanation: This regex pattern matches usernames consisting of alphanumeric characters and underscores, with a length between 4 and 16 characters. Here's the breakdown:
     - `^`: Start of the string.
     - `[a-zA-Z0-9_]`: Matches any alphanumeric character or underscore.
     - `{4,16}`: Matches between 4 and 16 occurrences of the preceding character class.
     - `$`: End of the string.

These regex patterns can be used in various programming languages and tools to validate and extract specific patterns from strings.

*/