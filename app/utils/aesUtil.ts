import crypto from 'react-native-quick-crypto';
import {Buffer} from '@craftzdog/react-native-buffer';

const aesUtil = {
  encrypt: function (text: string, masterkey: string) {},

  decrypt: function (cipherText: string) {
    const key = Buffer.from('K9rDslebMG2OZM6q52Kiy0Q0mSWr8A0n', 'utf-8');
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      key,
      Buffer.from([]),
    );
    let clearText = decipher.update(cipherText, 'base64', 'utf-8');
    clearText += decipher.final('utf-8');
    return clearText;
  },
};

export default aesUtil;
