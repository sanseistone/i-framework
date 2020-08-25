# SCSS的变量
很多的变量命名，主要为map函数服务，作为i-FrameWork的主要构成之一的variables文件系列，主要集中体现再maps函数的应用上。
考虑到命名可能会与class.scss文件冲突，大多数都给了series作为变量名的一部分，加以区分。

### 变量中的数值
与数值相关的量度单位，px/em/rem/%，以及纯数字。
在应用上，综合使用场景，预设了不同数值的集合，供maps函数使用。
```scss
$percent-1: 1% !default;
$number-1: 1 !default;
$pixel-1: 1px !default;
$rem-1: 1rem !default;
$em-1: 1em !default;
$auto: auto !default;
$inherit: inherit !default;
```

### maps数据类型的键值
map函数的键值主要表现在成系列的样式集合中，key就是系列名称的后缀，value，很简单，就是值。
```scss
"r025": ($rem-1 * .25),
"r050": ($rem-1 * .5),
"r075":($rem-1 * .75),
"r0875":($rem-1 * .875),
"r100": ($rem-1 * 1),
```
```scss
"1": ($pixel-1 * 1),
"2": ($pixel-1 * 2),
"3": ($pixel-1 * 3),
"4": ($pixel-1 * 4),
"5": ($pixel-1 * 5),
```
```scss
"5p":($percent-1 * 5),
"10p":($percent-1 * 10),
"15p":($percent-1 * 15),
"20p":($percent-1 * 20),
"25p":($percent-1 * 25),
```
```scss
"1": ($number-1 * 1),
"2": ($number-1 * 2),
"3": ($number-1 * 3),
"4": ($number-1 * 4),
"5": ($number-1 * 5),
```