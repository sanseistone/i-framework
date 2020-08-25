# Pagination
对bootstrap的分页组件，增加了主题颜色。

### How?
追加颜色名称：
```html
class="pagination red"
class="pagination blue"
```

同时追加间距（默认预设间距为4px，并取消圆角）：
```html
class="pagination red space"
```

### Code
颜色主题应用很简单，就是在ul的class里追加了颜色名称：
```html
<nav aria-label="Page navigation">
    <ul class="pagination red">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
</nav>
```
```html
<nav aria-label="Page navigation">
    <ul class="pagination red space">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
</nav>
```