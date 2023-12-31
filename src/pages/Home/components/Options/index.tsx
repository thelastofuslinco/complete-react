import OptionItem from '../OptionItem'

interface Props {
  options: Array<{ id: string; value: string; createdAt: string }>
  onDelete: (id: string) => Promise<void>
}

const Options = ({ options, onDelete }: Props) => {
  return (
    <div className="optionsContainer">
      {options.map((option) => (
        <OptionItem key={option.id} option={option} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default Options
