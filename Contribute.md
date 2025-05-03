# Contribution Guide

Thank you for considering contributing! 🚀 Please follow these guidelines to keep the project clean and consistent.

---

## Workflow

- **Fork** the repository.
- **Clone** your fork:

```bash
git clone https://github.com/your-username/your-repo.git
```

- Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

- One branch per feature or fix.
- No direct commits to main.
- Make your changes, following the code standards below.
- Format your code using Prettier.

- Push your branch:

```bash
git push origin feature/your-feature-name
```

- Create a Pull Request targeting main.
- After merge, delete the branch.

## Code Standards

### Formatting
- Use Prettier (4 spaces indentation).
- Maintain consistent style across all files.

### JavaScript
- Use ECMAScript 6 syntax (import/export).
- Enable strict type checking and prefer 'use strict';.
- Write clean, modular, and modern JS.

### Backend Structure
Use dot-separated filenames (lowercase):

- Model: user.model.js
- Controller: user.controller.js
- Router: user.routes.js
- Service: user.service.js

Example structure:

```bash
/models/user.model.js
/controllers/user.controller.js
/routes/user.routes.js
/services/user.service.js
```

### Commits
- Clear, short messages in present tense. Example: Fix login validation bug
- Link issues where relevant: Fix #123.

### Branching
- Name branches clearly:
  - feature/add-login
  - fix/fix-auth-bug
- Delete branches after merging.

## Need Help?
- Open an Issue or ask Project Maintainers.

Happy Coding! 🎯