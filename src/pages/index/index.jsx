import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  onSubmit (event) {
    console.log(this.state.value)
  }
  onReset (event) {
    this.setState({
      value: '',
    })
  }
  render () {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput 
          name='value' 
          title='文本' 
          type='text' 
          placeholder='单行文本' 
          value={this.state.value} 
          onChange={this.handleChange.bind(this, 'value')} 
        />
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    )
  }
}