const { random } = require("../utils");

const ImageApiFactory = () => {
  const { NekoBotApiFactory, PixivApiFactory } = require("./index");

  // const availableApis = [NekoBotApiFactory, PixivApiFactory];
  // const availableApis = [PixivApiFactory];
  const availableApis = [NekoBotApiFactory];

  // ===========================================================================================
  // This function is a Wrapper for execute the following steps:
  // - Get a random ImageAPI Factory (NekoBotApi || PixivApi)
  // - Send a request using the randomized Factory
  // - Return the result:
  // - Result object format:
  // {
  //   imageUrl : String - The image url,
  //   imageFilename : String - the image filename (with extension),
  //   imagePath : String - Safe path possible to save the image,
  //   imageWebpPath : String - Safe path possible to save the clone as webp image,
  //   imageName : String : The filename without extension,
  // }
  // ===========================================================================================
  const get = async () => {
    const Factory = availableApis[random(0, availableApis.length - 1)];

    const Api = Factory();

    const result = await Api.get();

    return result;
  };

  const public = {
    get,
  };

  return Object.freeze(public);
};

module.exports = ImageApiFactory;
