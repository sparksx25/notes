# modules

## 'sass:string'
- string.quote
- string.unquote

## 'sass:math'
- math.div

## 'sass:list'
```scss
@use 'sass:list';
@debug list.nth(10px 12px 16px, 2); // 12px
@debug list.nth([line1, line2, line3], -1); // line3
@debug list.append(10px 12px 16px, 25px) // 10px 12px 16px 25px
@debug list.index(1px solid red, 1px); // 1
```

## 'sass:map'
```scss
@use "sass:map";
$font-weights: ("regular": 400, "medium": 500, "bold": 700);

@debug map.get($font-weights, "medium"); // 500
@debug map.set($font-weights, "extra-bold", 900);
@debug map.merge($weights, ("medium": 700));
```