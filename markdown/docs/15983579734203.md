# Nav-tabs
对bootstrap的选项卡，增加了主题颜色。

### How?
颜色主题应用很简单，就是在ul的class里追加了颜色名称：
```html
class="nav nav-tabs red"
class="nav nav-tabs blue"
```

### Code
颜色主题应用很简单，就是在ul的class里追加了颜色名称：
```html
<ul class="nav nav-tabs red" id="myTab-01" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="home-tab-01" data-toggle="tab" href="#home-01" role="tab"
           aria-controls="home" aria-selected="true">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="profile-tab-01" data-toggle="tab" href="#profile-01" role="tab"
           aria-controls="profile" aria-selected="false">Profile</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="contact-tab-01" data-toggle="tab" href="#contact-01" role="tab"
           aria-controls="contact" aria-selected="false">Contact</a>
    </li>
</ul>
<div class="tab-content" id="myTabContent-01">
    <div class="tab-pane fade show active" id="home-01" role="tabpanel" aria-labelledby="home-tab-01">
        ...Home
    </div>
    <div class="tab-pane fade" id="profile-01" role="tabpanel" aria-labelledby="profile-tab-01">
        ...Profile
    </div>
    <div class="tab-pane fade" id="contact-01" role="tabpanel" aria-labelledby="contact-tab-01">
        ...Contact
    </div>
</div>
```