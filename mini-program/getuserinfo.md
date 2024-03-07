# 获取用户信息

## getUserInfo
- 必须是在用户已经授权的情况下调用
- wx.getSetting 可以获取用户权限授权情况

```json
{
  "cloudID": "78_zCeXFfEqZ5PSonKAocfzjbolwnEgVagHIykLSlHejD7Cf_cTNZgXciEXV4I",
  "encryptedData": "0ek3p/rfRkWKZxVAt+o6ix0Plp/+slH8or5TwdG0O8ZCtxpSnMG2mz6LXPhhGot9xMjTzr8eTGJ03lNBL6XWB5vCbZQx836l481dl/b8JKf593TPlruBKgAtl1jNt2Gr99kbwuu2fSfektSeBKyG8dcHlJCqi5V16rBpRxHPrSDvJp4stIteWxjFkrSgRDIo+F6Gyi4P9F9P2w3XBJXi1OUmi+zXc6rrtWN1KX9jguwW3ge1qRkTWT7ThMO90q0xi1qslAdSn6W1L+XDBHDMnkX9qTyyKm7rY211t2uqhL1sQhMdBJPoh8ffB2mbKWT0V2jEFj4cjE9xTA+WTt+xorYgqSAhovYkI6PDfpvIBFY3GK18gZG+haCI2UXwbs+2IoDX0SqfpoRYR14pWwE+t2lRj7o4fl8Op8IZpXPPZW7Z7MHnHcMYpVK+DegocXZ7FFevNQwgkhrBDhYsivgMd2WsIk/sCzjkbqjeH3HoqIqNNhmf9KjRVHvnWqunj2haf6DDOoYhzjpmCOO5Ba8bqw==",
  "iv": "IOP/QJK61b3KHMyVgwGlnw==",
  "signature": "e11bcb5098e6dcd72c13b2160d3222b230257eed",
  "userInfo": {
    "nickName": "微信用户",
    "gender": 0,
    "language": "",
    "city": "",
    "province": "",
    "country": "",
    "avatarUrl": "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"
  },
  "rawData": "{\"nickName\":\"微信用户\",\"gender\":0,\"language\":\"\",\"city\":\"\",\"province\":\"\",\"country\":\"\",\"avatarUrl\":\"https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132\"}",
  "errMsg": "getUserInfo:ok"
}
```

signature：`signature = sha1( rawData + session_key )`   

encryptedData: encryptedData 可能包含敏感数据（如 openId, unioId），接口的明文内容将不包含这些敏感数据。开发者如需要获取敏感数据，
需要对接口返回的加密数据(encryptedData) 进行对称解密


