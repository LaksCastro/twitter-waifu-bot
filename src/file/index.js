const fs = require("fs");

const FileManagerFactory = () => {
  // ===========================================================================================
  // Function to delete a file in a path
  // ===========================================================================================
  // @param path: File path to delete
  // ===========================================================================================
  const del = (path) => fs.unlinkSync(path);

  // ===========================================================================================
  // Function to create a writable file in a certain path
  // ===========================================================================================
  // @param path: File path to write (create) the file
  // ===========================================================================================
  const create = (path) => fs.createWriteStream(path);

  // ===========================================================================================
  // Function to get a base64 of a file
  // ===========================================================================================
  // @param path: File path to get a base 64
  // ===========================================================================================
  const getBase64 = (path) => fs.readFileSync(path, { encoding: "base64" });

  const public = {
    del,
    create,
    getBase64,
  };

  return Object.freeze(public);
};

module.exports = FileManagerFactory;
