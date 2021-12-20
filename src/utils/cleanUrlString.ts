/* eslint-disable sonarjs/no-ignored-return */
export const cleanUrlString = (str: string): string => {
  const stringToBeRemoved = [".js", ".ts", "index"];

  stringToBeRemoved.forEach((word) => {
    str.replace(word, "");
  });
  return str;
};
