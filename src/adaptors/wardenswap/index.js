import { BSC, ETHEREUM, OPTIMISM, POLYGON, AVAX, ARBITRUM } from "../../helpers/chains";
// ref: https://docs.wardenswap.finance/warden/transparency/references-and-sources#sources

const getUsers = (chain, address) => {
  return {
    traders: {
      functionNames: [
        "swap",
        "swapSplit",
        "tradeWethToEth",
        "tradeEthToWeth",
      ],
      address,
    },
  };
};

export default {
  [BSC]: {
    all: () => [
      "0x451ef8d6b645a60115eb8b8bea76b39c0c761004", // WardenRouterV2
    ],
    ...getUsers(BSC, "0x451ef8d6b645a60115eb8b8bea76b39c0c761004"),
  },
  [ETHEREUM]: {
    all: () => [
      "0x39f97198c5dbc193eb962c4b3b7e447091a18eab", // WardenRouterV2
    ],
    ...getUsers(ETHEREUM, "0x39f97198c5dbc193eb962c4b3b7e447091a18eab"),
  },
  [OPTIMISM]: {
    all: () => [
      "0x7ea8c22e6dcd7bd69eb180664da68e1f1f11d696", // WardenRouterV2_L2
    ],
    ...getUsers(OPTIMISM, "0x7ea8c22e6dcd7bd69eb180664da68e1f1f11d696"),
  },
  [POLYGON]: {
    all: () => [
      "0x030b8b7bf245e762736e65c0903295447b898c30", // WardenRouterV2
    ],
    ...getUsers(POLYGON, "0x030b8b7bf245e762736e65c0903295447b898c30"),
  },
  [AVAX]: {
    all: () => [
      "0x5EF960Eb78B8CFc11e654D03BeEB313BaDF5C7C0", // WardenRouterV2
    ],
    ...getUsers(AVAX, "0x5EF960Eb78B8CFc11e654D03BeEB313BaDF5C7C0"),
  },
  [ARBITRUM]: {
    all: () => [
      "0x226cb17a52709034e2ec6abe0d2f0a9ebcec1059" // WardenSwap1_5_Aegis_L2
    ],
    ...getUsers(ARBITRUM, "0x226cb17a52709034e2ec6abe0d2f0a9ebcec1059"),
  },
};
