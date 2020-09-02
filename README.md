# Empatica React App

This project has been configured to automatically deploy master to Heroku.<br />
You can view the project [here](https://react-node-ci.herokuapp.com/).<br />
Inspired by [create-react-app with a Node server on Heroku](https://github.com/mars/heroku-cra-node)<br />

Express api merged with the necessary code for serving React frontend.<br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />
For state management [Recoil] was used (https://recoiljs.org/).<br />
Styling done with SCSS.<br />


## Setting up for development

In the project directory, start the server using yarn
```bash
$ yarn && yarn start
```

In a different terminal window start the frontend
```bash
$ cd ui-react
$ yarn && yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### For production mode
Environment variable "Node_ENV" has to be set to "production", so it would serve build files
```bash
$ yarn && yarn build && yarn start
```

## Development tools
(Assuming that you have terminal opened with ui-react folder)

For linter checks:
```bash
$ yarn lint
```

Unit tests can be run with:
```bash
$ yarn test
```
Coverage:
```bash
$ yarn test:coverage:unit
```

### CI
For PRs codeclimate and circleci CI tools have been setup

## Tests
Components were written in a way so it would be easy to test them, state logic separate from the component (hooks in a subdirectory)

```javascript
import Button, { ButtonVariant } from "components/atoms/Button";
import useLogout from "./hooks";

const LogOutButton: React.FC = () => {
  const { me, handleLogout } = useLogout();

  if (!me) return null;

  return (
    <Button onClick={handleLogout}>
      Log Out
    </Button>
  );
};
```

At the moment, there are 3 unit tests on [Order components](react-ui/src/components/Order)
- Order List component unit test
- Order Item component unit test
- Order hooks unit test (this doesn't cover UseOrderDelete hook)

I would have loved to write an integration test as well, but didn't manage it timewise.

