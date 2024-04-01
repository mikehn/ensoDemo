import classNames from 'classnames'

type Props = {
  className?: string
  avatars: string[]
  selected: string
  onClick: (id: string) => void
  onNewAvatarClick: () => void
}

const AvatarList = ({
  avatars,
  selected,
  className,
  onClick,
  onNewAvatarClick
}: Props) => {
  return (
    <div
      className={
        'flex h-full w-16 min-w-16 flex-col justify-start  overflow-y-auto  p-2 pt-4 mx-4 mt-2 overflow-hidden rounded-xl border-2  border-slate-200 bg-white' +
        className
      }
    >
      {avatars.map((avatar, i) => (
        <AvatarIcon
          key={i}
          avatar={avatar}
          selected={selected === String(i)}
          onClick={() => onClick(String(i))}
        />
      ))}
      <div
        className="avatar mb-2 content-center justify-center"
        onClick={onNewAvatarClick}
      >
        <div className="flex w-10 cursor-default items-center justify-center rounded-full border-2 border-gray-200 bg-white  text-center text-xl text-slate-500 transition hover:scale-105 hover:border-violet-400 hover:bg-violet-50">
          +
        </div>
      </div>
    </div>
  )
}

const AvatarIcon = ({
  avatar,
  selected,
  onClick
}: {
  avatar: string
  selected: boolean
  onClick: () => void
}) => {
  return (
    <div
      className="avatar mb-3 content-center justify-center"
      onClick={onClick}
    >
      <div
        className={classNames('min-w-10 w-10 rounded-full', {
          'border-[2px] bg-orange-200 border-a-purple-strong outline  outline-[4px] outline-a-purple-light animate-jump animate-once animate-ease-in ':
            selected,
          'border-[3px] transition bg-white border-gray-200 hover:border-violet-400 hover:bg-slate-200 hover:scale-105 ':
            !selected
        })}
      >
        <img src={avatar} />
      </div>
    </div>
  )
}

export default AvatarList
