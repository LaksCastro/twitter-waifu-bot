const ConsoleFactory = () => {
  const colors = {
    black: (str) => ["\x1b[30m", str],
    red: (str) => ["\x1b[31m", str],
    green: (str) => ["\x1b[32m", str],
    yellow: (str) => ["\x1b[33m", str],
    blue: (str) => ["\x1b[34m", str],
    magenta: (str) => ["\x1b[35m", str],
    cyan: (str) => ["\x1b[36m", str],
    white: (str) => ["\x1b[37m", str],
  };

  const error = (str) => {
    const args = colors.red(str);

    console.log(...args);
  };

  const write = (str) => {
    const isArray = Array.isArray(str);

    let useCustomColor = false;

    if (isArray)
      useCustomColor =
        str.length === 2 &&
        str.filter(
          (item) => typeof item === "string" && /^\\x1b\[/g.test(item)
        );

    const args = useCustomColor ? str : colors.white(str);

    console.log(...args);
  };

  const public = {
    write,
    error,
    ...colors,
  };

  return Object.freeze(public);
};

module.exports = ConsoleFactory;
