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
    <div className="flex h-[calc(100vh-110px)]">
      <AvatarList
        className="h-full border border-DEFAULT border-a-purple-border/15 shadow-lg"
        avatars={avatarImages}
        selected={id || ''}
        onClick={(id) => {
          navigate(`/my-bots/${id}`)
        }}
        onNewAvatarClick={() => {
          const modal = document?.getElementById(
            'my_modal_1'
          ) as HTMLDialogElement
          modal?.showModal()
        }}
      />
      <BotInfoCard
        className="my-[10px] h-full min-h-full rounded-3xl border border-DEFAULT border-a-purple-border/15"
        avatar={avatarImages[Number(id)]}
        bid={Number(id) || 0}
      />

      <BotTaskPane
        className="mx-4 my-[10px] grow border border-DEFAULT border-a-purple-border/15 shadow-lg"
        avatar={avatarImages[Number(id)]}
        bid={Number(id) || 0}
      />

      <BotTaskListPane className="my-[10px] ml-2 mr-4 w-2/12 min-w-[488px] overflow-hidden  rounded-3xl border border-DEFAULT border-a-purple-border/15 shadow-lg" />

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
