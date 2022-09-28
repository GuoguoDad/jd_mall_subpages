import JSEncrypt from 'jsencrypt'

/**
 * 甲方构建密钥对儿，将公钥公布给乙方，将私钥保留。
 * 甲方使用私钥加密数据，然后用私钥对加密后的数据签名，发送给乙方签名以及加密后的数据；乙方使用公钥、签名来验证待解密数据是否有效，如果有效使用公钥对数据解密。
 * 乙方使用公钥加密数据，向甲方发送经过加密后的数据；甲方获得加密数据，通过私钥解密。
 */
let encrypt: JSEncrypt

/**
 * 公钥加密
 * @param content  内容
 * @param publicKey  公钥
 */
const encryptByPublicKey = (content: string, publicKey: string) => {
  if (!encrypt) {
    encrypt = new JSEncrypt({})
  }
  encrypt.setPublicKey(publicKey)
  return encrypt.encrypt(content).toString()
}

/**
 * 私钥加密
 * @param content  内容
 * @param privateKey  私钥
 */
const encryptByPrivateKey = (content: string, privateKey: string) => {
  if (!encrypt) {
    encrypt = new JSEncrypt({})
  }
  encrypt.setPrivateKey(privateKey)
  return encrypt.encrypt(content).toString()
}

/**
 * 公钥解密
 * @param content  内容
 * @param publicKey  公钥
 */
const decryptByPublicKey = (content: string, publicKey: string) => {
  if (!encrypt) {
    encrypt = new JSEncrypt({})
  }
  encrypt.setPublicKey(publicKey)
  return encrypt.decrypt(content)
}

/**
 * 私钥解密
 * @param content  内容
 * @param privateKey  私钥
 */
const decryptByPrivateKey = (content: string, privateKey: string) => {
  if (!encrypt) {
    encrypt = new JSEncrypt({})
  }
  encrypt.setPrivateKey(privateKey)
  return encrypt.decrypt(content)
}

export default {
  encryptByPublicKey,
  encryptByPrivateKey,
  decryptByPublicKey,
  decryptByPrivateKey
}
