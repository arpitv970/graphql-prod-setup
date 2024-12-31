export const buildContext = ({ req }) => {
  // Add any context initialization here (e.g., user auth, data loaders)
  return {
    authUser: req.headers.authorization || null,
  };
};
