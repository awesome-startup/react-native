"use strict";

module.exports = {
  version: 410,
  testMenuEnabled: false,
  parseAppID: "parse-id",
  serverURL: "http://localhost:1337",
  graphqlURL: "http://localhost:4000/graphql",
  compatibleStoreVersion: "0.10",
  timezone: "Asia/Macau",
  dayLabel(num) {
    const days = { 1: "Tue 4/18", 2: "Wed 4/19" };
    return days[num] || `Day ${num}`;
  }
};
