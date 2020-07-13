# Commits

Some core rules to follow when making commits:

- Specify the type of commit:
  - feat: The new feature you're adding to a particular application
  - fix: A bug fix
  - style: Feature and updates related to styling
  - refactor: Refactoring a specific section of the codebase
  - test: Everything related to testing
  - docs: Everything related to documentation
  - chore: Regular code maintenance.
  - setup: Setup for, say, a new service in the application, such as starter code for a new worker application. Use this scarcely.
- Separate the subject from the body with a blank line
- Your commit message should not contain any whitespace errors
- Remove unnecessary punctuation marks
- Do not end the subject line with a period
- Capitalize the subject line and each paragraph
- Use the body to explain what changes you have made and why you made them.
- Do not assume the reviewer understands what the original problem was, ensure you add it.
- Do not think your code is self-explanatory
- If an issue tracker is being used, add a reference(s) to them at the bottom,
  like so:

```
Resolves: #123
```

## A sample commit message may be something like this

```
fix: Fixed issue with users not being able to raise tickets

Here comes the description of what you actually did with the code. Try to keep it concise, yet be sure not to miss any crucial details. Don't forget to describe the issue you actually fixed.
```
