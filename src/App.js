
import {
  FluentProvider,
  webLightTheme,
  Button
} from "@fluentui/react-components";

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button appearance='primary'>Hello</Button>
    </FluentProvider>
  );
}

export default App;
