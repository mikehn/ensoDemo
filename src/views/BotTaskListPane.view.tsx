import classNames from 'classnames'
import Badge from 'components/Badge/Badge.component'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Tasks } from 'utils/MockData'
import './BotTaskListPane.style.css'

type Status = 'Completed' | 'Up Next' | 'Waiting...'
type Props = { className?: string }
type TaskFilters = 'Daily' | 'Weekly' | 'Completed'
interface TaskData {
  title: string
  description: string
  id: string
  status: string
}

const getFilteredTasks = (tasks: TaskData[]) => {
  const Completed = tasks.filter((task) => task.status === 'Completed')
  const Weekly = [tasks[tasks.length - 2], tasks[tasks.length - 1]]
  const Daily = [...tasks]
  return { Completed, Weekly, Daily }
}

const BotTaskListPane = ({ className }: Props) => {
  const [selected, setSelected] = React.useState<TaskFilters>('Daily')
  const defaultClassName =
    'btn btn-sm m-2 bg-main outline-none border-none shadow-none bg-white'
  const selectedBtnClassName =
    'bg-slate-50 btn btn-sm m-2 border-[1px]  border-gray-200'
  const TaskGroups: TaskFilters[] = ['Daily', 'Weekly', 'Completed']
  const filteredTasks = useMemo(() => getFilteredTasks(Tasks), [])
  return (
    <div
      className={
        'flex items-center card px-0 h-full w-96 bg-base-100 shadow-xl ' +
        className
      }
    >
      <div className="card-body h-full px-0">
        <div className="flex content-center justify-center">
          {TaskGroups.map((group) => (
            <button
              key={group}
              onClick={() => {
                setSelected(group)
              }}
              className={classNames('m-1 text-[14px] px-2', {
                [selectedBtnClassName]: selected === group,
                [defaultClassName]: selected !== group
              })}
            >
              <span className="font-semibold">{group} Tasks</span>
              {` (${filteredTasks[group].length})`}
            </button>
          ))}
        </div>
        <div className="h-full p-4 pr-2 pt-2">
          <TaskCardList cards={filteredTasks[selected]} onClick={() => {}} />
        </div>
      </div>
    </div>
  )
}

type CardListProps = {
  cards: TaskData[]
  onClick: (id: string) => void
  isSelected?: boolean
}

const TaskCardList = ({ cards, onClick }: CardListProps) => {
  const listRef = useRef<HTMLDivElement | null>(null)
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)

  const checkIfScrolledToBottom = () => {
    const list = listRef.current
    if (list) {
      const { scrollTop, scrollHeight, clientHeight } = list
      const isAtBottom = scrollTop + clientHeight === scrollHeight
      console.log('>>>>>>>>>>>>', isAtBottom)
      setIsScrolledToBottom(isAtBottom)
    }
  }

  useEffect(() => {
    const list = listRef.current
    if (list) {
      list.addEventListener('scroll', checkIfScrolledToBottom)
    }

    return () => {
      if (list) {
        list.removeEventListener('scroll', checkIfScrolledToBottom)
      }
    }
  }, [])
  return (
    <div
      ref={listRef}
      className={classNames(
        'h-[94%] overflow-y-hidden pr-2 hover:overflow-y-auto',
        {
          'fade-bottom': !isScrolledToBottom
        }
      )}
    >
      {cards.map((card) => (
        <TaskCard
          key={card.id}
          title={card.title}
          description={card.description}
          id={card.id}
          status={card.status as Status}
          onClick={(id) => onClick(id)}
        />
      ))}
    </div>
  )
}

const TaskCard = ({
  title,
  description,
  id,
  status,
  onClick
}: {
  title: string
  description: string
  id: string
  status: Status
  onClick: (id: string) => void
}) => {
  const colorMap = {
    Completed: { bg: 'bg-green-200', iconColor: 'green' },
    'Up Next': { bg: 'bg-amber-50', iconColor: '#cbb203' },
    'Waiting...': { bg: 'bg-slate-100', iconColor: 'gray' }
  }

  let shadowClass = 'shadow-sm'
  if (status === 'Up Next') {
    shadowClass = 'shadow-lg shadow-[#401D6D]/15'
  }
  return (
    <div
      className={classNames(
        'card mb-4 cursor-pointer border border-a-purple-border/10',
        shadowClass
      )}
      onClick={() => onClick(id)}
    >
      <div className="card-body">
        <div className="font-semibold">{title}</div>
        <div>{description}</div>
        <Badge
          className={colorMap[status].bg}
          iconColor={colorMap[status].iconColor}
          title={status}
        />
      </div>
    </div>
  )
}
export default BotTaskListPane
