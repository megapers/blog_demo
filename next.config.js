const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "megapers",
        mongodb_password: "NRp8WK6VjvfXSBpk",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site",
      },
    };
  }
  //Else use below production env variables
//   return {
//     env: {
//       mongodb_username: "megapers",
//       mongodb_password: "NRp8WK6VjvfXSBpk",
//       mongodb_clustername: "cluster0",
//       mongodb_database: "my-site",
//     },
//   };
};
