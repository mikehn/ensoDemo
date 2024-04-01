import Avatar from 'components/Avatar/Avatar.component'
import { useState } from 'react'

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
  const [addAnim, setAddAnim] = useState(false)
  const animClassName = 'animate-once animate-jump'
  return (
    <div
      className={
        'flex h-full w-18 min-w-18 flex-col justify-start  overflow-y-auto  p-2 pt-4 mx-4 mt-2 overflow-hidden rounded-xl border-2  border-slate-200 bg-white' +
        className
      }
    >
      {avatars.map((avatar, i) => (
        <Avatar
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
        <div
          onClick={() => {
            setAddAnim(true)
          }}
          onAnimationEnd={() => {
            console.log('animation end')
            setAddAnim(false)
          }}
          className={
            'flex w-12 cursor-default items-center justify-center rounded-full border-2 border-gray-200 bg-white p-[5px] text-center  text-xl font-semibold text-slate-500 transition hover:scale-105 hover:border-violet-400 hover:bg-violet-50 hover:p-[3px] hover:text-2xl ' +
            (addAnim ? animClassName : '')
          }
        >
          +
        </div>
      </div>
    </div>
  )
}

export default AvatarList
