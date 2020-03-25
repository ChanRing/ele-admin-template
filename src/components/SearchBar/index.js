/**
 * 抽离列表顶部的操作面板
 * Created By ChangRon 2020/03/25
 */
import SearchBar from './src/SearchBar'

SearchBar.install = Vue => {
  Vue.component(SearchBar.name, SearchBar)
}

export default SearchBar
