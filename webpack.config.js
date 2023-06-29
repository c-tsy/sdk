module.exports = {
  //   entry: "dist/index.js",
  output: {
    filename: "ctsy.min.js",
  },
  externals: {
    axios: "axios",
    "@msgpack/msgpack": "MessagePack",
    lodash: "_",
    dayjs: "dayjs",
    localforage: "localforage",
  },
};
