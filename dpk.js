const crypto = require("crypto");

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;


  switch (typeof event) {
    case "string":
      candidate = event;
      break;
    case "object":
      candidate = JSON.stringify(event);
      break;
    default:
      candidate = event.toString();
      break;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = candidate.substring(0, MAX_PARTITION_KEY_LENGTH);
  }

  const hash = crypto.createHash("sha256");
  hash.update(candidate);
  const hashValue = hash.digest("hex");

  return hashValue;
};

console.log(deterministicPartitionKey("This is a test"));

module.exports = {
  deterministicPartitionKey,
};
