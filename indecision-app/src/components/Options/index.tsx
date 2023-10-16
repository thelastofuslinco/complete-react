import { OptionsContainer } from './styles'
import OptionItem from '../OptionItem'

interface Props {
  options: Array<{ id: string; value: string }>
  value: string
  onDelete: (id: string) => Promise<void>
}

const Options = ({ options, value, onDelete }: Props) => {
  return (
    <OptionsContainer>
      {options.map((option) => (
        <OptionItem
          key={option.id}
          option={option}
          value={value}
          onDelete={onDelete}
        />
      ))}
    </OptionsContainer>
  )
}

export default Options
