export const handleParameters = (token: string): string => {
  const squareBracketRegex = /\[(.*)\]/gu;
  const tsRegex = /\.ts$/u;
  const jsRegex = /\.js$/u;
  const wildCardRouteRegex = /\[\.\.\..+\]/gu;

  const tokenToBeReplaced = token.replace(tsRegex, "").replace(jsRegex, "");

  // This will handle wild card based routes - users/[...id]/profile.ts -> users/*/profile
  const wildCardRouteHandled = tokenToBeReplaced.replace(
    wildCardRouteRegex,
    () => "*"
  );

  // This will handle the generic square bracket based routes - users/[id]/index.ts -> users/:id
  return wildCardRouteHandled.replace(
    squareBracketRegex,
    (_, match) => `:${String(match)}`
  );
};
