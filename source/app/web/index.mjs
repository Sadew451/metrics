//Imports
  import app from "./instance.mjs"

//Start app
  await app({mock:process.env.USE_MOCKED_DATA})