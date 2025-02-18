To add ESLint to your React.js project, follow these steps:

### Step 1: Install ESLint and necessary plugins

In the terminal, navigate to your React project directory and run the following command to install ESLint and necessary dependencies for React:

```bash
npm install eslint --save-dev
```

Next, install the required ESLint plugins for React:

```bash
npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev
```

Optionally, if you are using JSX, you can also install `babel-eslint` to ensure proper parsing of modern JavaScript:

```bash
npm install babel-eslint --save-dev
```

### Step 2: Initialize ESLint configuration

To create the `.eslintrc.json` configuration file, run:

```bash
npx eslint --init
```

The command will prompt you with a few questions:

- How would you like to configure ESLint? Choose **"To check syntax, find problems, and enforce code style"**.
- What type of modules does your project use? Choose **"JavaScript modules (import/export)"** (most likely).
- Which framework does your project use? Choose **"React"**.
- Does your project use TypeScript? Choose **"No"** unless you're using TypeScript.
- Where does your code run? Choose **"Browser"** (you can choose Node if you're working with a backend as well).
- How would you like to define the style? Choose your preferred style guide, or **"Use a popular style guide"** and select **"Airbnb"** (recommended) for a comprehensive style guide.

After answering these questions, ESLint will automatically generate a `.eslintrc.json` configuration file with appropriate settings.

### Step 3: Create or update `.eslintignore` (Optional)

To prevent ESLint from checking unnecessary files or directories (e.g., `node_modules`), you can create a `.eslintignore` file at the root of your project.

```bash
node_modules/
build/
```

### Step 4: Add ESLint script to `package.json`

In your `package.json`, add a script to run ESLint easily:

```json
"scripts": {
  "lint": "eslint src/**/*.{js,jsx}"
}
```

This way, you can run ESLint on your project files by simply executing:

```bash
npm run lint
```

### Step 5: Optionally integrate with Prettier (Optional)

If you'd like to integrate Prettier (automatic code formatting) with ESLint, you can install additional packages:

```bash
npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```

Then, extend your `.eslintrc.json` to include Prettier:

```json
{
  "extends": [
    "react-app",
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "react-hooks", "prettier"]
}
```

This will help make sure that ESLint and Prettier work together without conflicts.

### Step 6: Run ESLint

Finally, run the linting command to check your files:

```bash
npm run lint
```

You should now have ESLint properly set up in your React project!

Let me know if you'd like help configuring it further or if something's unclear!
