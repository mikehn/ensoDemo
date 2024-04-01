import React from 'react'
import AvatarList from 'components/AvatarList/AvatarList.component'
import avatarImages from 'assets/avatars'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import BotInfoCard from 'components/BotInfoCard.component.tsx/BotInfoCard.component'
import BotTaskPane from './BotTaskPane.view'
import BotTaskListPane from './BotTaskListPane.view'
const BotDash = () => {
  let { id } = useParams()
  if (!id) id = '0'
  const navigate = useNavigate()
  return (
    <div className="flex h-[calc(100%-32px)]">
      <AvatarList
        className="h-full shadow-lg"
        avatars={avatarImages}
        selected={id || ''}
        onClick={(id) => {
          navigate(`/ensoDemo/my-bots/${id}`)
        }}
        onNewAvatarClick={() => {
          const modal = document?.getElementById(
            'my_modal_1'
          ) as HTMLDialogElement
          modal?.showModal()
        }}
      />
      <BotInfoCard
        className="my-[10px] h-full min-h-full"
        avatar={avatarImages[Number(id)]}
        bid={Number(id) || 0}
      />

      <BotTaskPane className="mx-4 my-[10px] grow shadow-lg" />

      <BotTaskListPane className="my-[10px] ml-2 mr-4 w-1/5 shadow-lg" />

      {/* TODO: Extract to modal component */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Add New Bot</h3>
          <p className="py-4">Add new Bot place holder</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default BotDash
