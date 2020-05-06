const AutomaticTweetFactory = require("./tweet");
const AutomaticReplyFactory = require("./quote");

const BotFactory = () => {
  // ===========================================================================================
  // This function is a Wrapper for to inialize all bot features
  // ===========================================================================================
  const initialize = () => {
    const AutomaticTweet = AutomaticTweetFactory();
    const AutomaticReply = AutomaticReplyFactory();

    AutomaticTweet.enable();
    AutomaticReply.enable();
  };

  const public = {
    initialize,
  };

  return Object.freeze(public);
};

module.exports = BotFactory;
