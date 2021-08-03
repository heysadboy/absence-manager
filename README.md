# Absence Manager

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with TypeScript.\
Styling is done using [Semantic UI](https://semantic-ui.com/) and custom CSS.

You can find the version deployed on Netlify [here](https://sharp-morse-b6f923.netlify.app/). It is build and deployed automatically every time you make a commit.
### Components
There are 6 components in this App with `App.tsx` being the main one.\
List of absences in rendered in `AbsenceList.tsx` and individual item in `AbsenceItem.tsx`.\
List can be filtered from `HeaderBar.tsx` and pagination is handled in `PaginationFooter.tsx`.

### Naming Convention
- Interfaces are precedeed with `I`
- Enums are precedeed with `E`
- Types are precedeed with `T`
- Components are named in TitleCase and function are named camelCase.

### Local Running

In the project directory, you can run:

 `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing

The page will reload if you make edits.\
You will also see any lint errors in the console.

 `yarn test`

Launches the test runner in the interactive watch mode. Testing is done using `react-test-renderer`




