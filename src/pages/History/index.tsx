import { HistoryContainer, HistoryList, Status } from './History.styles'

export default function History() {
  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Time</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="green">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="gray">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="green">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="green">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="yellow">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="yellow">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="red">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="green">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="red">Done</Status>
            </tr>
            <tr>
              <td>Task name here</td>
              <td>25 minutes</td>
              <td>Há 1 mês</td>
              <Status statusColor="yellow">Done</Status>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
