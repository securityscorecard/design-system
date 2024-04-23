# Contributing to Design System

As a contributor, here are the guidelines we would like you to follow:

- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)

## <a name="submit"></a> Submission Guidelines

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

- Use `next` branch (for new features) or `main` branch (for hotfixes or if `next` doesn't exist) as
 a base for new changes
- Make your changes in a new git branch:

  ```shell
  git checkout -b githubUserId@my-fix-branch next
  ```

  To simplify identification of branch owners we recommend to use your Github handle as prefix of
  branch name delimited from branch name with `@`. As branch name we prefer to use Jira ticket id
  (or short description of change if Jira ticket doesn't exists).

  Branch name examples:
  ```
  ajkl2533@UXD-123
  ajkl2533@upgeade-storybook-v8
  ```

- Create your patch,
- Add appropriate test cases following [Testing guide](TESTING.md).
- Follow our [Coding Rules](#rules).
- Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

  ```shell
  git commit -a
  ```

  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

- Squash commits if the PR is small and its content is just about one thing it doesn’t make much sense
 to have more than one commit. Also every commit starting with `feat` or `fix` will appear in the
 Changelog and it probably doesn’t make sense to have in changelog something like:

  ```
  fix(Component): fix styling of component
  fix(Component): fix code review comments
  fix(Component): fix another code review comments
  ```

  But on the other hand if you have two unrelated things in PR and each of them is in its own commit
  it’s fine to not squash.

- Push your branch to GitHub:

  ```shell
  git push origin githubUserId@my-fix-branch
  ```

- In GitHub, send a pull request to `next` or `main` depending on the change.
- If we suggest changes then:

  - Make the required updates.
  - Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase next -i # or git rebase main -i
    git push -f
    ```

That's it!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the branch:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete githubUserId@my-fix-branch
  ```

- Check out the `next` or `main` branch:

  ```shell
  git checkout next -f # or git checkout main -f
  ```

- Delete the local branch:

  ```shell
  git branch -D githubUserId@my-fix-branch
  ```

- Update your `next` or `main` with the latest upstream version:

  ```shell
  git pull
  ```

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested** by one or more specs (visual regression, unit-tests).
- Every cryptic code block **must be documented**.
- We follow [Airbnb JavaScript Style Guide][js-style-guide], with some custom rules.
- We use ESlint, Prettier and Stylelint to enforce the codestyle.

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the Design System change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Footer should contain a
[closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/)
if any.

Samples:

```
feat(StatusDot): remove legacy colors

fix(types): add children prop

docs(Button): update icon definition


--- with body ---

fix(DatatableV2): change header label behaviour

In order to make more space for display header label we make several changes:
- header labels are able to wrap to two rows, longer label still appears with ellipsis
- we removed the sorting button from the header, user is still able to click on the header label to quickly sort, in order to maintain affordance of sorted column, the sorting state will now appear in place of column actions button, while the button functionality remains the same



--- with footer ---

fix(Breadcrumbs): make item icon optional

Closes UXD-1455
```

If you want to reference an issue, but the commit doesn't close one use `Ref` keyword.

```
fix(Collapsible): add white background

Ref UXD-1331
```

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of
the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the
SHA of the commit being reverted.

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc). The **style** scope does not indicate change in visual styles.
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp,
broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle,
BrowserStack, SauceLabs)
- **chore**: Other changes that don't modify source or test files

### Scope

The scope could be anything specifying place of the commit change. Although the scope is optional
we prefer to include it to clearly mark wich part of Design System is affected by the change.

For the scope you can use for example the name of the affected component like `Button` or `Text`
(component names always start with uppercase first letter) or any other generic concept like `theme`,
`colors` or `types`.

### Subject

The subject contains succinct description of the change:

- starts with verb
- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference Jira issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The
rest of the commit message is then used for this.

```
build: replace building with vite

BREAKING CHANGE:

This commit contains possibly several braking changes. It updates large number of dependencies and adds `exports` field in the package.json. We also slightly change the setting of the tsconfig.

Ref UXD-1107
```

A detailed explanation can be found in this [document][commit-message-format].

[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[js-style-guide]: https://github.com/airbnb/javascript
