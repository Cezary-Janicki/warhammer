import React from "react";

export default function getRandomRolls(number) {
  const { rando, randoSequence } = require("@nastyox/rando.js");
  function getRandomRoll() {
    const result = rando(1, 6);
    return result;
  }

  const arr = Array.from(Array(number)).map(() => {
    return getRandomRoll();
  });
  return arr;
}
