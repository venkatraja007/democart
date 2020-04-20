export const GetAPIRoutes = apiFile => {
  const APIROUTES_DIR = "api-routes";
  return require("../" + APIROUTES_DIR + "/" + apiFile);
};
