// ===========================================================================================
// Factory that manage Twitter Client instance, accept only the first set() call,
// For to block change more 1 time the Client Instance
// ===========================================================================================
const ClientInstanceFactory = () => {
  let client = null;

  const set = (clientInstance) => {
    if (client) throw new Error("A Client Instance Is Already Declared");

    client = clientInstance;
  };

  const get = () => client;

  const public = {
    set,
    get,
  };

  return Object.freeze(public);
};

// ===========================================================================================
// Create a void Client Instance, she will to be used by all application
// ===========================================================================================
const ClientInstance = ClientInstanceFactory();

module.exports = ClientInstance;
