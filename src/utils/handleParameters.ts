/* eslint-disable @typescript-eslint/typedef */
export const handleParameters = (token: string): string => {
  const squareBracketRegex: RegExp = /\[(.*)\]/gu;
  const tsRegex: RegExp = /\.ts$/u;
  const jsRegex: RegExp = /\.js$/u;
  const wildCardRouteRegex: RegExp = /\[\.\.\..+\]/gu;

  // This will clean the url extensions like .ts or .js
  const tokenToBeReplaced: string = token
    .replace(tsRegex, "")
    .replace(jsRegex, "");
  // This will handle wild card based routes - users/[...id]/profile.ts -> users/*/profile
  const wildCardRouteHandled: string = tokenToBeReplaced.replaceAll(
    wildCardRouteRegex,
    () => "*"
  );

  // This will handle the generic square bracket based routes - users/[id]/index.ts -> users/:id
  const url = wildCardRouteHandled.replaceAll(
    squareBracketRegex,
    (subString, match) => `:${String(match)}`
  );
  // This will handle the case when multiple parameters are present in one file like -
  //users / [id] - [name].ts to users /: id -:name and users / [id] - [name] / [age].ts to users /: id -: name /: age
  return url.replaceAll("]-[", "-:").replaceAll("]/[", "/:");
};
