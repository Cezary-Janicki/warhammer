import React from "react";

export default function woundRollValue(strength, toughness) {
  let result =
    strength >= 2 * toughness
      ? 2
      : strength > toughness
      ? 3
      : strength === toughness
      ? 4
      : strength <= 2 * toughness
      ? 6
      : strength < toughness
      ? 5
      : null;
  return result;
}
