const jwt = require("jsonwebtoken");

const generateToken = async () => {
  const token = await jwt.sign({ _id: "gsdhgdfasdv123eyt" }, "thesecretkeymusthaveatleast32characters");
  console.log(token);
}

generateToken();