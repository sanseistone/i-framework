# Flex
Flex布局是什么？
Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。
***注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。***
具体用法请参考：[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### How?
采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。 

**容器的属性**
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

```css
//display 元素显示方式
class="flex"
class="inline-flex"
```
```css
//flex-direction属性决定主轴的方向
class="flex flex-row"
class="flex flex-row-reverse"
class="flex flex-col"
class="flex flex-col-reverse"
```
```css
//flex-direction属性决定主轴的方向
class="flex flex-row"
class="flex flex-row-reverse"
class="flex flex-col"
class="flex flex-col-reverse"
```
```css
//flex-wrap属性定义，如果一条轴线排不下，如何换行
class="flex flex-n-wrap"
class="flex flex-wrap"
class="flex flex-wrap-reverse"
```
```css
//flex-flow属性是flex-direction属性和flex-wrap属性的简写形式
class="flex flex-flow"
```
```css
//justify-content属性定义了项目在主轴上的对齐方式
class="flex justify-start"
class="flex justify-end"
class="flex justify-center"
class="flex justify-between"
class="flex justify-around"
```
```css
//align-items属性定义项目在交叉轴上如何对齐
class="flex items-start"
class="flex items-end"
class="flex items-center"
class="flex items-between"
class="flex items-stretch"
```
```css
//align-content属性定义了多根轴线的对齐方式
class="flex content-start"
class="flex content-end"
class="flex content-center"
class="flex content-between"
class="flex content-around"
class="flex content-stretch"
```


**项目的属性**
* order
* flex-grow
* flex-shrink
* flex-basis
* flex
* align-self

```css
//order属性定义项目的排列顺序
class="order-first"
class="order-0"
class="order-1"
class="order-2"
...
class="order-10"
class="order-11"
class="order-12"
class="order-last"
```
```css
//flex-grow属性定义项目的放大比例
class="flex-grow"
class="flex-n-grow"
```
```css
//flex-shrink属性定义了项目的缩小比例
class="flex-shrink"
class="flex-n-shrink"
```
```css
//flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间
class="flex-basis"
```
```css
//flex属性是flex-grow, flex-shrink 和 flex-basis的简写
class="flex-initial"
class="flex-1"
class="flex-auto"
class="flex-n"
```
```css
//align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性
class="self-auto"
class="self-start"
class="self-end"
class="self-center"
class="self-baseline"
class="self-stretch"
```