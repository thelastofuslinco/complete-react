import { OptionItem, OptionsContainer } from './styles'

interface Props {
  options: Array<string>
  value: number
}

const Options = ({ options, value }: Props) => {
  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <OptionItem key={option + index} $index={index} $value={value}>
          Option {index}: {option}
        </OptionItem>
      ))}
    </OptionsContainer>
  )
}

export default Options
