<template>
  <div class="page-container">
    <h2 >Typography 字体</h2>
    <p>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p>
    <h3>字体</h3>
    <div class="demo-term-box">
      <img src="../../assets/font1.png" alt="">
      <img src="../../assets/font2.png" alt="">
      <img src="../../assets/font3.png" alt="">
      <img src="../../assets/font4.png" alt="">
      <img src="../../assets/font5.png" alt="">
      <img src="../../assets/font6.png" alt=""></div>
    <h3> 字号</h3>
    <table>
      <tbody>
      <tr>
        <td>层级</td>
        <td>字体大小</td>
        <td>举例</td>
      </tr>
      <tr style="font-size: 12px;">
        <td>辅助文字</td>
        <td>12px Extra Small</td>
        <td>用 Element 快速搭建页面</td>
      </tr>
      <tr style="font-size: 13px;">
        <td>正文（小）</td>
        <td>13px Small</td>
        <td>用 Element 快速搭建页面</td>
      </tr>
      <tr style="font-size: 14px;">
        <td>正文</td>
        <td>14px Base</td>
        <td>用 Element 快速搭建页面</td>
      </tr>
      <tr style="font-size: 16px;">
        <td>小标题</td>
        <td>16px Medium</td>
        <td>用 Element 快速搭建页面</td>
      </tr>
      <tr style="font-size: 18px;">
        <td>标题</td>
        <td>18px large</td>
        <td>用 Element 快速搭建页面</td>
      </tr>
      <tr style="font-size: 20px;">
        <td>主标题</td>
        <td>20px Extra large</td>
        <td>用 Element 快速搭建页面</td>
      </tr>
      </tbody>
    </table>
    <h3>行高</h3>
    <div>
      <img src="../../assets/line_high.png" alt="">
      <ul class="lineH-right">
        <li>line-height:1 <span>无行高</span></li>
        <li>line-height:1.3 <span>紧凑</span></li>
        <li>line-height:1.5 <span>常规</span></li>
        <li>line-height:1.7 <span>宽松</span></li>
      </ul>
    </div>
    <h3>代码</h3>
    <pre>
      <code class="language-css hljs">
      <span class="hljs-selector-tag">font-family</span>: "<span
        class="hljs-selector-tag">Helvetica</span><span
        class="hljs-selector-tag">Neue</span>",<span
        class="hljs-selector-tag">Helvetica</span>,"<span
        class="hljs-selector-tag">PingFang</span><span
        class="hljs-selector-tag">SC</span>","<span
        class="hljs-selector-tag">Hiragino</span><span
        class="hljs-selector-tag">Sans</span><span
        class="hljs-selector-tag">GB</span>","<span
        class="hljs-selector-tag">Microsoft</span><span
        class="hljs-selector-tag">YaHei</span>","微软雅黑",<span
        class="hljs-selector-tag">Arial</span>,<span
        class="hljs-selector-tag">sans-serif</span>;
      </code>
    </pre>
  </div>
</template>

<script>

</script>

<style>
  .page-container h2, .page-container h3, .page-container h4, .page-container h5 {
    font-weight: 400;
    color: #1f2f3d;
    margin: 0;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  .page-container h2 {
    font-size: 28px;
  }
  .page-container h3 {
    font-size: 22px;
  }
  .page-container p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  .page-container table {
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
  }
  .page-container tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .page-container tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .page-container table td, .page-container table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .page-container table td {
       color: #606266;
       display: table-cell;
       vertical-align: inherit;
  }
  .lineH-right {
    display: inline-block;
    list-style: none;
    padding: 0 0 0 90px;
    margin: 0;
    vertical-align: top;
  }
  .lineH-right li {
    font-size: 13px;
    color: #666;
    height: 20px;
    line-height: 20px;
    margin:9px 0;
  }
  .lineH-right li span {
    padding-left: 40px;
  }
  .hljs {
    line-height: 1.8;
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
    color: #000;
    display: block;
    overflow-x: auto;
  }
  code {
    background-color: #f9fafc;
    padding: 0 4px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
  }
  .hljs-selector-tag{
    color: #3182bd;
  }
  .demo-term-box img {
    width: 21%;
    margin: 0 4% 20px 0;
  }
</style>
