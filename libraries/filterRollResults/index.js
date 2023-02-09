import React from "react";

export default function filterRollResults(results, filter) {
  const filteredResult = results.filter((result) => result >= filter);
  return filteredResult;
}
