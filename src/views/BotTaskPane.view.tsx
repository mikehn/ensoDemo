import classNames from 'classnames'
import Avatar from 'components/Avatar/Avatar.component'
import React, { ReactNode, useEffect, useRef } from 'react'
import { RandomBotResponse } from 'utils/MockData'
type Props = { className?: string; avatar: string; bid: number }
let rCounter = 0
const InitialMessage = ({ name }: { name: string }) => {
  const groups = ['E-Commerce', 'Agency', "I'm a freelancer"]
  const images = ['/ti1.jpeg', '/agency2.jpg', '/freelancer.jpeg']
  const [selectedId, setSelectedId] = React.useState('')
  const setSelected = (id: string) => {
    setSelectedId(id)
  }
  return (
    <div>
      <p>
        <b>Hey, {name}!</b> I’m an AI business assistant trained to help you
        with thought leadership content for Linkedin, to help you establish your
        brand online.
        <br />
        <br />
        I’m trained to look for the most viral and engaging Linkedin content
        formats. I’ll prepare daily content drafts and ask you to choose the
        ones I think would fit best your online persona.
      </p>
      <h2 className="mt-8 text-xl font-semibold">
        Lets choose your type of business
      </h2>
      <div className="flex flex-wrap align-middle">
        {groups.map((group, i) => (
          <BizTypeGroup
            key={group}
            image={images[i]}
            title={group}
            onClick={setSelected}
            isSelected={selectedId == group}
            id={group}
          />
        ))}
      </div>
    </div>
  )
}

function getRandomResponse() {
  rCounter = rCounter + (1 % RandomBotResponse.length)
  return RandomBotResponse[rCounter]
}

const BotTaskPane = ({ className, avatar }: Props) => {
  const [messageList, setMessageList] = React.useState<ReactNode[]>([
    <InitialMessage key={0} name={'Mike'} />
  ])
  const endOfList = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    endOfList.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={'card h-full w-96 bg-base-100 shadow-xl ' + className}>
      <div className="flex size-full flex-col content-start items-start justify-start">
        <div className="card-body h-20 min-h-44 w-full border-b-2 border-[#231269]/10 ">
          <TaskOverview />
        </div>
        <div className="card-body h-3/5 w-full overflow-y-auto border-b-2 border-[#231269]/10  bg-[#F9F8FF] px-8 pb-0 pt-[4vh] 2xl:px-[10%] ">
          <TaskDescription avatar={avatar} messages={messageList} />
        </div>
        <div className="card-body flex h-40 w-full justify-end">
          <TaskQuery
            onMessageAdd={(m) => {
              setMessageList((prev) => [
                ...prev,
                <div key={m.length} className="ml-1">
                  {m}
                </div>,
                <LoadingDots key={m.length + 1}>
                  {getRandomResponse()}
                  <div ref={endOfList}></div>
                </LoadingDots>
              ])
              setTimeout(() => scrollToBottom(), 100)
            }}
          />
        </div>
      </div>
    </div>
  )
}

const TaskQuery = ({
  onMessageAdd
}: {
  onMessageAdd: (msg: string) => void
}) => {
  const [text, setText] = React.useState('')
  const addMessage = (msg: string) => {
    setText('')
    onMessageAdd(msg)
  }
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') addMessage(text)
  }
  return (
    <label className="input flex w-full items-center gap-2 border-[#231269]/10 outline-none  ">
      <input
        type="text"
        value={text}
        className="grow"
        placeholder="Ask me Anything"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <svg
        onClick={() => addMessage(text)}
        className="text-purple-400 hover:scale-110 hover:fill-current"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.4438 4.89142L13.8325 17.2446C13.5049 18.364 12.0106 18.5658 11.4 17.5724L8.24918 12.4445L3.13859 9.28301C2.14858 8.67043 2.34967 7.17102 3.46535 6.84234L15.7768 3.21873C16.7968 2.91853 17.7431 3.86877 17.4438 4.89142Z"
          stroke="#20202D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1689 7.48209L8.28452 12.4351"
          stroke="#20202D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  )
}

const TaskDescription = ({
  avatar,
  messages
}: {
  avatar: string
  messages: ReactNode[]
}) => {
  return (
    <div className="w-full">
      {messages.map((message, i) => (
        <div key={i} className="mb-8">
          {i % 2 == 0 ? (
            <Avatar
              avatar={avatar}
              selected={false}
              onClick={() => {}}
              isDisplayOnly={true}
            />
          ) : (
            <div className="avatar mb-2 mr-2">
              <div className="w-12 rounded-full border-2 border-slate-300">
                <img src="/bp.png" />
              </div>
            </div>
          )}
          {message}
        </div>
      ))}
    </div>
  )
}

const BizTypeGroup = ({
  id,
  title,
  isSelected,
  image,
  onClick
}: {
  id: string
  title: string
  isSelected: boolean
  image: string
  onClick: (id: string) => void
}) => {
  return (
    <div
      className="group my-6 mr-4 flex cursor-pointer select-none flex-col transition ease-in-out hover:scale-[101%]"
      onClick={() => onClick(id)}
    >
      <div className="flex h-[8.5rem] w-[10.5rem] content-center justify-center rounded-lg bg-white pt-1 align-middle shadow-sm outline outline-1 outline-a-purple-border/15 group-hover:bg-amber-200">
        <img className="h-32 w-40 rounded-lg object-cover" src={image} />
      </div>
      <div className="ml-1 mt-4 flex w-40 flex-wrap content-center items-center justify-center rounded-3xl border border-a-purple-border/10 bg-white p-2 align-middle group-hover:outline group-hover:outline-1  group-hover:outline-amber-300 ">
        <input
          type="radio"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          checked={isSelected}
          className="radio radio-sm mr-2 bg-white shadow-sm checked:bg-slate-600"
        />
        <div className="text-base">{title}</div>
      </div>
    </div>
  )
}

const Dot = ({ className }: { className: string }) => {
  return (
    <div
      className={classNames(
        'animate animate-bounce mx-1 size-2 rounded-full',
        className
      )}
    ></div>
  )
}

const LoadingDots = ({ children }: { children: ReactNode }) => {
  const [showChildren, setShowChildren] = React.useState(false)
  useEffect(() => {
    const interval = setTimeout(
      () => {
        setShowChildren(true)
      },
      Math.random() * 2800 + 1000
    )
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex justify-start">
      {!showChildren ? (
        <div className="flex items-center justify-center">
          <Dot className="bg-a-purple-strong" />
          <Dot className="bg-a-purple-strong/50 animate-delay-150" />
          <Dot className="bg-a-purple-strong/35 animate-delay-300" />
        </div>
      ) : (
        <div className="ml-1">{children}</div>
      )}
    </div>
  )
}

const TaskOverview = () => {
  return (
    <div className="w-full">
      <div
        className={
          'badge badge-md h-6 bg-[#EEEBFF] font-semibold text-a-purple-strong shadow-sm'
        }
      >
        <div className="mr-2">
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" fill="#4546F7" />
          </svg>
        </div>
        Active Task
      </div>
      <h2 className="mt-2 text-xl font-semibold">Bot Onboarding</h2>
      <div className="mt-4 w-full">
        <h4 className="text-sm">progress</h4>
        <progress
          className="progress progress-primary w-full"
          value={Math.random() * 40 + 5}
          max="100"
        ></progress>
      </div>
    </div>
  )
}
export default BotTaskPane
