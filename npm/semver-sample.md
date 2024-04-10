# npm 的语义化版本

## Ranges
`>=1.2.7<1.3.0` 表示

## Advanced Range Syntax
Hyphen Ranges `X.Y.Z - A.B.C`
- `1.2.3 - 2.3.4` := `>=1.2.3 <=2.3.4`
- `1.2.3 - 2` := `>=1.2.3 <3.0.0` 


X-Ranges 
- `1.2.x` := `>=1.2.0 <1.3.0`
- `1.*` := `>=1.0.0 <2.0.0`


Tilde Ranges
- `~1.2.3` := `>=1.2.3 <1.(2+1).0` := `>=1.2.3 <1.3.0`
- `~0.2.3` := `>=0.2.3 <0.(2+1).0` := `>=0.2.3 <0.3.0`
- `~0.2` := `>=0.2.0 <0.(2+1).0` := `>=0.2.0 <0.3.0`
- `~1` := `>=1.0.0 <(1+1).0.0` := `>=1.0.0 <2.0.0` 
- `~0` := `>=0.0.0 <(0+1).0.0` := `>=0.0.0 <1.0.0`
```javascript
// Tilde Ranges order 
let [major, minor, patch] = '1.2.3'.split('.');
if (minor > 0) return `>=[major, minor, patch] < [major, minor+1, 0]`
else return `>=[major, minor, patch] < [major+1, 0, 0]`
```


Caret Ranges
- `^1.2.3` := `>=1.2.3 <2.0.0` 
- `^0.2.3` := `>=0.2.3 <0.3.0`
- `^0.0.3` := `>=0.0.3 <0.0.4`

```javascript
// Caret Ranges order
let [major, minor, patch] = '1.2.3'.split('.');
if (major > 0) return `>=[major, minor, patch] < [major+1, 0, 0]`
else if (minor > 0) return `>=[major, minor, patch] < [0, minor+1, 0]`
else return `>=[major, minor, patch] < [0, 0, patch+1]`
```


## 参考文章
- 摘自[npm 版本范围表示](https://docs.npmjs.com/cli/v6/using-npm/semver)