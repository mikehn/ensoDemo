import React from 'react'
import AvatarList from 'components/AvatarList/AvatarList.component'
import avatarImages from 'assets/avatars'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import BotInfoCard from 'components/BotInfoCard.component.tsx/BotInfoCard.component'
import BotTaskPane from './BotTaskPane.view'
import BotTaskListPane from './BotTaskListPane.view'
const BotDash = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div className="flex h-[calc(100%-32px)]">
      <AvatarList
        className="h-full shadow-lg"
        avatars={avatarImages}
        selected={id || ''}
        onClick={(id) => {
          navigate(`/my-bots/${id}`)
        }}
        onNewAvatarClick={() => {}}
      />
      <BotInfoCard
        className="my-[10px] h-full min-h-full"
        avatar={avatarImages[Number(id)]}
      />

      <BotTaskPane className="mx-4 my-[10px] grow shadow-lg" />

      <BotTaskListPane className="my-[10px] ml-2 mr-4 w-1/5 shadow-lg" />
    </div>
  )
}

export default BotDash
