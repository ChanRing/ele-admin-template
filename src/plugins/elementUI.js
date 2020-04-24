// 按需加载组件
import {
  Button,
  Table,
  TableColumn,
  Tree,
  Input,
  Pagination,
  Switch,
  Menu,
  MenuItem,
  Container,
  Main,
  Aside,
  Footer,
  Message,
  Loading,
  // MessageBox,
  Header,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tabs,
  TabPane,
  Avatar,
  Submenu,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Popover,
  DatePicker,
  Scrollbar,
  Notification,
  Link,
  Divider,
  Tooltip,
  Col,
  Row,
  Dialog,
  Rate,
  Alert,
  Card,
  Checkbox,
  Progress,
  Calendar
  // MessageBox
} from 'element-ui'

const components = [
  Button,
  Table,
  TableColumn,
  Tree,
  Input,
  Pagination,
  Switch,
  Menu,
  MenuItem,
  Container,
  Header,
  Main,
  Aside,
  Footer,
  Tabs,
  TabPane,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Submenu,
  Form,
  FormItem,
  Breadcrumb,
  BreadcrumbItem,
  Popover,
  DatePicker,
  Scrollbar,
  Link,
  Divider,
  Tooltip,
  Row,
  Col,
  Dialog,
  Rate,
  Alert,
  Card,
  Checkbox,
  Progress,
  Calendar
]

export default {
  install: Vue => {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
    Vue.prototype.$loading = Loading.service
    // Vue.prototype.$alert = MessageBox.alert
    // Vue.prototype.$confirm = MessageBox.confirm
    // Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$notify = Notification
    Vue.prototype.$message = Message
  }
}
