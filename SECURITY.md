# Security Policy

## Supported versions

Flap Lab is under active development. Security fixes are applied to the latest version on `main` and to the deployed app at [flaplab.lucabonaldo.dev](https://flaplab.lucabonaldo.dev). Older commits are not patched.

## Reporting a vulnerability

Please **do not report security issues in public issues or pull requests.**

Report privately through GitHub:

1. Open the [Security tab](https://github.com/LucaBonaldoIT/flaplab/security) of the repository.
2. Choose **Report a vulnerability**.

If that option is unavailable, open an issue titled "Security contact request" without any vulnerability details, and the maintainer will arrange a private channel.

Please include:

- A description of the issue and its impact.
- Steps to reproduce, or a proof of concept.
- The affected version, commit, or URL, and your browser or Node.js version.

## What to expect

- Acknowledgment of your report within a few business days.
- An assessment and, where confirmed, a fix or mitigation plan.
- Credit in the release notes if you would like it.

Please allow reasonable time to fix an issue before any public disclosure.

## Scope

Flap Lab is a static, client-side application with no backend, accounts, or server-side storage. Relevant areas include:

- Parsing of imported files (`.jff` and legacy formats), such as malformed input causing crashes, resource exhaustion, or script injection.
- Cross-site scripting through user-controlled content rendered by the UI.
- Vulnerabilities in the build tooling or dependencies that affect the shipped app.

Out of scope: denial of service through deliberately expensive but valid computations (for example, brute-force parsing of large inputs), and issues that require an already-compromised browser or device.
