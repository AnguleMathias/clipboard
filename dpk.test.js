const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given an empty string", () => {
    const trivialKey = deterministicPartitionKey("");
    expect(trivialKey).toBe("0");
  }
  );

  it("Returns the literal '0' when given a string of whitespace", () => {
    const trivialKey = deterministicPartitionKey("   ");
    expect(trivialKey).toBe("0");
  }
  );

  


});
