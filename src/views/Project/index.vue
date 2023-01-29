<template>
  <div class="">
    <Title title="项目经历" />
    <ul pl-40px py-20px class="project">
      <!-- 项目1 -->
      <li>
        <h3>联想MCT Smart MFG系统</h3>
        <p><b>项目时间:</b> 2021年11月 - 至今 (1年2个月)</p>
        <div><b>开发人数: </b>前端开发4人</div>
        <b>工作内容:</b>
        <ul pl-20px>
          <li>担任软件开发工程师，主要工作职责是 Web 前端页面开发、组件编写</li>
          <li>前期负责项目前端组员的技术面试/招聘</li>
          <li>
            负责前端技术选型,引入<strong>Vue3 / Pinia / VueUse</strong>等技术栈,规定组员使用<strong>script setup + Composition API</strong
            >函数式编程风格开发,代码可复用性提高10%,降低代码耦合度,提高开发效率
          </li>
          <li>
            使用<strong>Composition API</strong>封装了
            <strong>useEcharts/useForm/useTable/useModal</strong> 等多种hooks,抽离逻辑代码组件进行复用,提高了代码的维护性/可读性/复用性.
          </li>
          <li>引入<strong>引入TypeScript</strong>,规范代码开发数据类型,提高开发效率</li>
          <li>引入<strong>vite-plugin-optimize-persist</strong>,对代码包进行预加载,减少了80%启动项目的时间.</li>
          <li>负责本定制组件的开发,如: 财年/财季/财周的<strong>时间选择器</strong> 、定制化表单、<strong>低代码可视化拖拽图表</strong>等</li>
          <li>根据需求、UI 编写高质量高性能的代码、完成前端页面开发以及数据 交互;完成 API 接口开发，并完成自测</li>
        </ul>
        <div class="">
          <b>项目描述: </b> 联想MCT Smart MFG系统是联想深圳南方工厂数据中台项目,包含数据报表、自定义报表、预警告警、运营监控等模块;
          该项目基于MVVM架构体系采用最新的vue3、TypeScript以及Vite作为项目架构技术基础进行项目搭建，实现开发、生产最大的性能优势，结合pinia，axios，node.js
          中间件等辅助插件实现系统整体的接口，路由监控以及资源的压缩整理； 在ui架构上结合Ant
          Design、ElementPlus等成熟组件库实现应用的快速迭代开发，基于threeJS、webgl技术实现web端3D可视化功能和体验。
        </div>
        <div><b>项目架构:</b><strong>TypeScript / Vue3 / Vite / Pinia / Vue-Router / AntDesign / EChart</strong></div>
      </li>
      <!-- 项目1-1 -->
      <li>
        <h3>桐乡市城南派出所智安企业（园区）平台项目</h3>
        <p><b>项目时间:</b> 2022年8月 - 至今(维护)</p>
        <div><b>开发人数: </b>前端开发3人</div>
        <b>工作内容:</b>
        <ul pl-20px>
          <li>负责Web 前端页面开发</li>
          <li>负责组员代码审查,使用<strong>Commitlint</strong>配合Angular提交规范来约束组员代码提交内容</li>
          <li>使用<strong>husky / lint-staged</strong> 配合git hooks,使项目提交时自动使用prettier格式化代码,统一组员代码格式</li>
          <li>引入<strong>Windi Css</strong> (原子化css),规范组员开发页面样式,提高了页面开发效率</li>
          <li>引入unplugin-auto-import,节省开发时间</li>
          <li>根据需求、UI 编写高质量高性能的代码、完成前端页面开发以及数据 交互;完成 API 接口开发，并完成自测</li>
        </ul>
        <div><b>项目描述: </b> 桐乡市城南派出所管理系统</div>
        <div><b>项目架构:</b><strong>TypeScript / Vue3 / Vite / Pinia / Vue-Router / AntDesign / EChart</strong></div>
      </li>
      <!-- 项目2 -->
      <li>
        <h3>桐昆集团数智运营中心</h3>
        <p><b>项目时间:</b> 2020年11月 - 2021年9月</p>
        <div><b>开发人数: </b>前端开发3人</div>
        <b>工作内容:</b>
        <ul pl-20px>
          <li>Web 前端页面开发</li>
          <li>负责员工,订单,首页引导页等模块的开发</li>
          <li>将集团其他开发完成的系统接入该系统</li>
        </ul>
        <div><b>项目描述: </b>桐昆集团数智运营中心 后台管理项目</div>
        <div><b>项目架构:</b><strong>Vue2 / Webpack / Vuex / Vue-Router / AntDesign / EChart / Jeecg</strong></div>
      </li>
      <!-- 项目3 -->
      <li>
        <h3>大云村5G智慧指挥中心 小程序/大屏智慧中心</h3>
        <p><b>项目时间:</b> 2021年6月 - 2021年12月</p>
        <div><b>开发人数: </b>前端开发1人</div>
        <b>工作内容:</b>
        <ul pl-20px>
          <li>小程序的开发</li>
          <li>村中心大屏页面的开发,接入腾讯地图</li>
          <li>小程序底部包含村公告、事件上报、我的、积分商城四个模块，以此具体细分多个内容页。</li>
        </ul>
        <div><b>项目描述: </b> 嘉善大运村5G智慧指挥中心项目,包含小程序和大屏项目,拥有积分商城(未上线)</div>
        <div><b>项目架构:</b><strong>Vue2 / Webpack / Element / 小程序 / Vant / EChart </strong></div>
      </li>
      <!-- 项目4 -->
      <li>
        <h3>桐昆集团 嘉兴石化可视化报表系统</h3>
        <p><b>项目时间:</b> 2020年12月 - 2022年9月</p>
        <div><b>开发人数: </b>前端开发1人</div>
        <b>工作内容:</b>
        <ul pl-20px>
          <li>Web 前端页面开发、组件编写</li>
        </ul>
        <div><b>项目描述: </b>工厂内部项目,使用Vue2/Element ui/Echarts 对工厂各个生产系统进行展示</div>
        <div><b>项目架构:</b><strong>Vue2 / Webpack / Vuex / Vue-Router / Element / EChart </strong></div>
      </li>
      <!-- 项目4-1 -->
      <li>
        <h3>桐昆集团 未来工厂</h3>
        <p><b>项目时间:</b> 2021年11月 - 2021年12月</p>
        <div><b>开发人数: </b>前端开发1人</div>
        <b>工作内容:</b>
        <ul pl-20px>
          <li>Web 前端页面开发、组件编写</li>
        </ul>
        <div><b>项目描述: </b>使用vue2和echart,对工厂智能排产进行轮询/轮播展示</div>
        <div><b>项目架构:</b><strong>Vue2 / Webpack / Vuex / Vue-Router / Element / EChart </strong></div>
      </li>
      <!-- 项目5 -->
      <li>
        <h3>桐昆集团董事长预约系统客户端</h3>
        <p><b>项目时间:</b> 2021年11月 - 2022年1月</p>
        <div><b>开发人数: </b>前端开发1人</div>
        <b>工作内容:</b>
        <ul pl-20px>
          <li>担任软件开发工程师，主要工作职责是 Web 前端页面开发</li>
        </ul>
        <div>
          <b>项目描述: </b>使用Vue3 / TypeScript和
          Electron开发的跨平台<strong>客户端</strong>应用.使用websocket来实现董事长对秘书们实时通讯的需求.以及其他预约功能
        </div>
        <div><b>项目架构:</b><strong>Electron / Vue3 / Element / EChart </strong></div>
      </li>
      <!-- 项目6 -->
      <li>
        <h3>桐昆集团数智运营Uniapp</h3>
        <p><b>项目时间:</b> 2022年7月 - 2022年10月</p>
        <div><b>开发人数: </b>前端开发1人</div>
        <b>工作内容:</b>
        <ul pl-20px>
          <li>Web 前端页面开发</li>
        </ul>
        <div><b>项目描述: </b>该项目桐昆集团数智运营中心的Uniapp版,使用向日库进行IOS企业应用证书分发</div>
        <div><b>项目架构:</b><strong>Uniapp</strong></div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
li > div {
  padding: 5px 0;
}
.project {
  > li h3 {
    margin-bottom: 10px;
    border-bottom: 2px solid #e1315a;
  }
}
</style>
