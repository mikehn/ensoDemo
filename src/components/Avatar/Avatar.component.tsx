import classNames from 'classnames'

const Avatar = ({
  avatar,
  selected,
  isDisplayOnly = false,
  onClick
}: {
  avatar: string
  selected: boolean
  isDisplayOnly?: boolean
  onClick: () => void
}) => {
  const hoverClasses = isDisplayOnly
    ? ''
    : 'hover:border-violet-400 hover:bg-slate-200 hover:scale-105'
  return (
    <div
      className="avatar mb-3 select-none content-center justify-center"
      onClick={onClick}
    >
      <div
        className={classNames(
          'min-w-12 w-12 short:w-10 short:min-w-10 rounded-full',
          {
            'border-[2px] bg-orange-200 border-a-purple-strong outline  outline-[4px] outline-a-purple-light animate-jump animate-once animate-ease-in ':
              selected,
            ['border-[3px] transition bg-white border-gray-200 ' +
            hoverClasses]: !selected
          }
        )}
      >
        <img src={avatar} />
      </div>
    </div>
  )
}

export default Avatar
