import { OptionsContainer } from './styles'
import OptionItem from '../OptionItem'

interface State {
  loading: boolean
}
interface Props {
  options: Array<string>
  value: number
  onDelete: (value: string) => Promise<void>
}

const Options = ({ options, value, onDelete }: Props) => {
  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <OptionItem
          key={option + index}
          option={option}
          index={index}
          value={value}
          onDelete={onDelete}
        />
      ))}
    </OptionsContainer>
  )
}

export default Options
