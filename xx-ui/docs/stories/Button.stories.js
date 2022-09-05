import { Button } from '../../lib/index.js';
import '../../lib/styles/index.css';

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    //定义点击事件
    onClick: {},
    //定义type属性⽂档
    type: {
      //设置默认值
      default: "primary",
      //视图展示的控件
      control: { type: "select" },
      //可选项
      options: ["primary", "default", "success", "warning", "danger", "info"],
    },
    size: {
      default: "small",
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
  },
};
const Template = (args) => ({
  components: { PButton: Button },
  setup() {
    return { args };
  },
  template: '<p-button v-bind="args">按钮</p-button>',
});
export const Large = Template.bind({});
Large.args = {
  type: "primary",
  size: "large",
};
export const Default = Template.bind({});
Default.args = {
  type: "primary",
  size: "default",
};
export const Small = Template.bind({});
Small.args = {
  type: "primary",
  size: "small",
};
