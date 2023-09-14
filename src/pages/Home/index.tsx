import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './Home.styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'The task name must not be blank!'),
  minutesAmount: zod
    .number()
    .min(5, 'The Min is 05')
    .max(60, 'The Cycle is Max 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isStartButtonDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">I will work at</label>
          <TaskInput
            id="task"
            list="suggestions"
            placeholder="Your project name here!"
            {...register('task')}
          />

          <datalist id="suggestions">
            <option value="project 1" />
            <option value="project 2" />
            <option value="project 3" />
            <option value="project 4" />
          </datalist>

          <label htmlFor="minutesAmount">while</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={isStartButtonDisabled} type="submit">
          <Play size={24} />
          Play time!
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
