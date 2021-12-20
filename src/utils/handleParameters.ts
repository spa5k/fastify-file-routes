export const handleParameters = (token: string): string => {
  const squareBracketRegex: RegExp = /\[(.*)\]/gu;
  const tsRegex: RegExp = /\.ts$/u;
  const jsRegex: RegExp = /\.js$/u;
  const wildCardRouteRegex: RegExp = /\[\.\.\..+\]/gu;

  const tokenToBeReplaced: string = token
    .replace(tsRegex, "")
    .replace(jsRegex, "");

  // This will handle wild card based routes - users/[...id]/profile.ts -> users/*/profile
  const wildCardRouteHandled: string = tokenToBeReplaced.replace(
    wildCardRouteRegex,
    () => "*"
  );

  // This will handle the generic square bracket based routes - users/[id]/index.ts -> users/:id
  return wildCardRouteHandled.replace(
    squareBracketRegex,
    (subString, match) => `:${String(match)}`
  );
};
