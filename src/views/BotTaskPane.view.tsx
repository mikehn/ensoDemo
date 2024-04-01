import Avatar from 'components/Avatar/Avatar.component'
import React from 'react'

type Props = { className?: string; avatar: string; bid: number }

const BotTaskPane = ({ className, avatar }: Props) => {
  return (
    <div className={'card h-full w-96 bg-base-100 shadow-xl ' + className}>
      <div className="flex size-full flex-col content-start items-start justify-start">
        <div className="card-body h-20 min-h-44 w-full border-b-2 border-[#231269]/10 ">
          <TaskOverview />
        </div>
        <div className="card-body h-3/5 bg-[#F9F8FF] px-8 py-20 2xl:px-72 ">
          <TaskDescription avatar={avatar} />
        </div>
        <div className="card-body flex h-40 w-full justify-end">
          <TaskQuery />
        </div>
      </div>
    </div>
  )
}

const TaskQuery = () => {
  return (
    <label className="input flex w-full items-center gap-2 border-[#231269]/10 outline-none  ">
      <input type="text" className="grow" placeholder="Ask me Anything" />
      <svg
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

const TaskDescription = ({ avatar }: { avatar: string }) => {
  return (
    <div>
      <Avatar
        avatar={avatar}
        selected={false}
        onClick={() => {}}
        isDisplayOnly={true}
      />
      <p className="">
        <b>Hey, Gilad!</b> I’m an AI business assistant trained to help you with
        thought leadership content for Linkedin, to help you establish your
        brand online.
        <br />
        <br />
        I’m trained to look for the most viral and engaging Linkedin content
        formats. I’ll prepare daily content drafts and ask you to choose the
        ones I think would fit best your online persona.
      </p>
      <h2 className="mt-16 text-xl font-semibold">
        Lets choose your type of business
      </h2>
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
          value="10"
          max="100"
        ></progress>
      </div>
    </div>
  )
}
export default BotTaskPane