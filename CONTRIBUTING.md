# Contributing to Flap Lab

Thanks for your interest in improving Flap Lab. This guide covers how to set up the project, make changes, and submit them.

## Before you start

- Check [existing issues](https://github.com/LucaBonaldoIT/flaplab/issues) to avoid duplicating work.
- For anything beyond a small fix, open an issue first to discuss the change.
- For security vulnerabilities, do **not** open a public issue; follow [SECURITY.md](SECURITY.md).

## Development setup

Requirements: Node.js 20+ and npm 10+.

```sh
git clone https://github.com/LucaBonaldoIT/flaplab.git
cd flaplab
npm install
npm run webapp:dev
```

The repository is an npm workspace:

| Path | Purpose |
| --- | --- |
| `packages/core/` | `flaplab-core`, the computational library |
| `apps/webapp/` | Vite + TypeScript browser UI |

## Making changes

1. Fork the repository and create a branch from `main`, for example `feat/pda-export` or `fix/table-scroll`.
2. Make focused changes. Keep unrelated refactors out of the same pull request.
3. Add or update tests in `packages/core/test/` for any change to core behavior.
4. Verify locally before pushing:

   ```sh
   npm test                # build and test the core library
   npm run webapp:check    # type-check the web app
   npm run webapp:build    # confirm the production build succeeds
   ```

5. Open a pull request against `main`.

## Code guidelines

- TypeScript throughout; keep `strict` type checking passing.
- Match the style of the surrounding code (naming, comment density, idiom).
- Core logic belongs in `packages/core`, not in the web app. The UI should consume the library.
- Avoid adding runtime dependencies without discussing them first. The project is intentionally dependency-light.

## Commit messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: open equivalent DFA from NFA/λ-NFA via subset construction
fix: transition table sticky column borders
docs: update README
```

Use the imperative mood, keep the subject under about 72 characters, and explain *why* in the body when it is not obvious.

## Pull requests

A good pull request:

- Describes what changed and why.
- Links the related issue, if any.
- Includes screenshots or a short recording for UI changes.
- Passes the checks listed above.

## Licensing of contributions

Flap Lab contains material derived from JFLAP 7.0, covered by [`LICENSE-JFLAP`](LICENSE-JFLAP), alongside original material under the MIT [`LICENSE`](LICENSE). By submitting a contribution, you agree that it may be distributed under these terms, and that the project as a whole must remain free of charge as required by the JFLAP license.

Do not contribute code you do not have the right to license.
