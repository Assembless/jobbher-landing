/**
 * Checks whether the given url is valid.
 * @param url - Url to check.
 * @returns True if the url is valid, false otherwise.
 */
export const isValidUrl = (url: string) => {
  const pattern =
    /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
  return pattern.test(url);
};
