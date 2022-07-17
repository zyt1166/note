---
title: CSS
---
## 固定高度导致不能下拉？
## 8个div平均两行
## 样式调试技巧
- 不同数据显示不同样式，数据不能改的话，通过修改样式（伪造某种数据的显示），再去调节样式
![](https://img-blog.csdnimg.cn/7d42b6f2a19f434a9f1f47ad4182ea41.png)
## 关于url
- 背景引入路径：` image: `url(${require('@/assets/img/user/weight-manage.png')})`,`
- background-image: url('../../../../assets/img/user/family-member-bg.png');
## 行高line-height
- 行高和布局有很大的联系，面试中会问的关于实际应用的问题
- 设计师设计字体根据好几根线进行设计排版
- 行高：基线之间的距离，不是我理解的的那个意思
- 垂直居中：line-height=height

## CSS rgba() 函数
- rgba() 函数使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。
- RGBA 即红色、绿色、蓝色、透明度（英语：Red, Green, Blue、Alpha）。
   - 红色（R）0 到 255 间的整数，代表颜色中的红色成分。。
   - 绿色（G）0 到 255 间的整数，代表颜色中的绿色成分。
   - 蓝色（B）0 到 255 间的整数，代表颜色中的蓝色成分。
   - 透明度（A）取值 0~1 之间， 定义透明度 0（完全透明） ~ 1（完全不透明）
- rgba，透明度给0
## 纯css绘制三角形
- 10pxborder画出的是20px的正方形方形，也就是边长20px的等边三角形
- 想要6px边长的等边三角形，就是3px的border
- 方法：对角切
- 注意事项
   - border没设置solid不显示,因为默认none不显示
![](https://img-blog.csdnimg.cn/5561564faada43aea89cfc45ee8a1fb7.png)
![](https://img-blog.csdnimg.cn/c98c6e6d95d44f2795d3449c9a966509.png)
![](https://img-blog.csdnimg.cn/41565bef6cf145e1b76de80ad8e5e462.png)
- 一下代码啥也没有
```
        div {
            width: 0;
            height: 0;
            border-bottom: 250px solid red;
        }
```
## 前端实现三角形的四种方法
1. 引入字体图标
2. 利用border实现
3. 利用border+旋转rotate
4. 利用CSS的线性渐变属性linear-gradient
## flex布局
- flex-shrink用来设置子元素会超出父元素，子元素如何缩小自己的宽度的。 flex-shrink的默认值为1，当父元素的宽度小于所有子元素的宽度的和时，子元素的宽度会减小。值越大，减小的越厉害。如果值为0，表示不减小。在flex容器中，当空间不够的时候，flex-shrink不为0的元素会被压缩，
   - 应用1：flex布局 flex-shrink: 0防止图片被压缩/设置了固定宽高的图片被压缩

- 给flex-item设置flex:1，是用来平均分空间的
- 宽度不对设置width: 100%;试试
## scss
```
 .manage-tools {
    &-item {
        &-right {

        }
    }
 }
```


## 自适应
- 公司用vw，
- 我输入px，浏览器转为vw如何实现的？
- ui设计稿是默认使用iphone6
- 

## 宽高内边距外边距
- 设计稿就是按i67设计的，如果宽度有问题查看，是不是外层内层盒子有padding
- margin 会增加盒子 content-box不针对margin
- flex:1 可以让自适应盒子占据剩下的全部空间！！
- 先padding整体再内调里面