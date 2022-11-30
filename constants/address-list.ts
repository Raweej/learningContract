const addressList: Record<string, `0x${string}`> = {
  RWToken: "0x7477591014F678d54Bcf547fE7e49B7e89AAC2b3",
  RWBank: "0xc23c1a7e6F29Dc4989561eFEBE6A67aC89947b32",
};

const getAddress = (key: string) => {
  return addressList[key];
};

export default {
  raw: addressList,
  getAddress,
};
