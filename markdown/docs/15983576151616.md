# i-FrameWork的由来
关于i-FrameWork，是自己在工作中，一点点总结的，写成了一些模块化的样式集合，后来，随着项目的增加，需求不断的扩展，就打算将自己的样式集合整理成规范的文档供阅读。于是就参考了很多有名的大型框架，发现有很多理念不谋而合，然后就逐步的完善出一个小规模的样式集合。 

html写得多了，最烦恼的其实是class命名，综合来看，最佳的解决方案，就是使用css的自然语法，语义化的方式去命名，直观，简单，明了。
说到命名，简洁扼要的命名方式，可能大家的想法都是共通的，所以，诸多命名方式，也就不谋而合了。诸如：semantic ui/tailwind css/uikit等等。
现在，姑且把这个样式集合称之为"框架"吧！

### 版本迭代
最初并没有造轮子的想法，从诞生之日，就基于Bootstrap，版本1到版本3，基于Bootstrap3，版本4，基于Bootstrap4。
一开始，没有考虑过会增加到很多内容，因此，都是手动的编写的，按css不同的属性，区分了很多模块。
后来，累计多了，要考虑更多的应用场景了，需要维护的时候，才发现，修改的地方太多了，这样下去，根本不是一个框架该具备的模式，于是，又逐步的把版本4，全部用SCSS重构了一遍。

### SCSS重构
i-FrameWork框架，主要的内容就在于颜色体系，再加上对于常用命名的变量定义，于是，关键的两个SCSS文件产生了，就是color.scss和class.scss.
这两个文件对于任何愿意使用SCSS预处理css的人来说，都是可以派上用场的。
颜色体系可以应用于各种模块，class命名变量，都是唯一的，且尽可能的语义化，简洁明了。
另外，重点需要说明的是，关于function.scss函数文件，Bootstrap珠玉在前，初来乍到，就不再费尽心思去编写了，直接使用了Bootstrap4的。

### 响应式
目前，我的工作仍然以PC端设备为基础，因此，这套框架，区别于Bootstrap，是以PC端优先，自适应各端设备。
关于响应式样式的写法，有别于Bootstrap。
如下所示：
```css
// responsive-pc

@media (max-width: 1199px) {
  //Extra large devices (large desktops, 992px and 1200px)
  .block-lg {
    display: block;
  }
}

@media (max-width: 991px) {
  //Large devices (desktops, 768px and 992px)
  .block-md {
    display: block;
  }
}

@media (max-width: 767px) {
  //Medium devices (tablets, 576px and 768px)
  .block-sm {
    display: block;
  }
}

@media (max-width: 575px) {
  //Small devices (landscape phones, max-width 576px)
  .block-xs {
    display: block;
  }
}
```

### flex和grid
版本4区别于版本3，除了命名方式的简化，更主要的还是使用了flex布局。
另外，grid布局，暂时只有大概的思路，而且，内容繁多，加上还不够普及，因此，也没有深入的去写，版本4暂时忽略grid布局。

### How?
很简单，直接按照正确的路径引入两个css文件即可。
需要说明的是，尽管基于Bootstrap，但是，仍然考虑到独立使用的场景，对于Bootstrap的依赖，仅限于基本的结构体系，各种插件等等。
```html
../assets/css/common.css
../assets/css/base.css
```

### 精简版
删除了例如文字、按钮、背景等应用颜色体系的，元素的相关渐变色，只保留了十九种颜色的主色调应用。
```html
../assets/css/common-lite.css
```