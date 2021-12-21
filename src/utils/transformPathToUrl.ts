import path from "path";
import { handleParameters } from "./handleParameters";

// This function will transform the path of a route to a url

export const transformPathToUrl = (filePath: string): string => {
  const url: string = `/${filePath}`;

  if (url.length === 1) {
    return url;
  }

  let resultUrl: string = url
    .split(path.sep)
    .map((part) => handleParameters(part))
    .join("/");

  if (resultUrl.endsWith("index")) {
    resultUrl = resultUrl.replace("index", "");
  }

  // This removes the last slash from the string if it exists
  if (resultUrl.endsWith("/")) {
    resultUrl = resultUrl.slice(0, -1);
  }

  // This handle the case when only index remains, so a default route is created
  if (resultUrl.length === 0) {
    return "/";
  }

  return resultUrl.replace("//", "/");
};
