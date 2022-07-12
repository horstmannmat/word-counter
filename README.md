# Word Counter

## Scope
As a user when I view the application then I see a form containing a text box to enter a body of text and when I submit the form with some text then I see a result containing the number of words in the text box
and when I submit the form with an empty text then I see a form error telling me that some text input is required.

As an engineer when I look at your project then I should understand how to install and run it.
## Available Scripts

In the project directory, you can run:


### `yarn install`

Install all the dependencies listed within package.json in the local node_modules folder.

The yarn.lock file is utilized as follows:

    If yarn.lock is present and is enough to satisfy all the dependencies listed in package.json, the exact versions recorded in yarn.lock are installed, and yarn.lock will be unchanged. Yarn will not check for newer versions.
    If yarn.lock is absent, or is not enough to satisfy all the dependencies listed in package.json (for example, if you manually add a dependency to package.json), Yarn looks for the newest versions available that satisfy the constraints in package.json. The results are written to yarn.lock.

If you want to ensure yarn.lock is not updated, use --frozen-lockfile.


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Main File

### `src/App.tsx`

All the magic happens here, the main function is render where it renders the component
and the second most important is CountText(), it set the text of how many words our input has.
I believe that I covered almost all possible words in almost all alphabets, it does not verify if that word in fact exists, but invented word after been invented turns into a word [.](https://en.wikipedia.org/wiki/Parmenides)

### `src/App.test.tsx`
This file is where the test occurs, feel free to add new tests  