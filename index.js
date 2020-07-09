const app = require("./src/app");

const port = 4501;

app.listen(port, () => console.log(`Server listens http://localhost/:${port}`));
