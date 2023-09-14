import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 0rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 0.6rem;
      font-size: 0.875rem;
      line-height: 1.6rem;
      font-weight: 400;

      &:first-child {
        width: 50%;
        padding-left: 2.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-100',
  red: 'red-100',
  green: 'green-100',
  gray: 'gray-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  background-color: ${(props) => props.theme['gray-700']};
  border-top: 2px solid ${(props) => props.theme['gray-800']};
  padding: 0.6rem;
  font-size: 0.875rem;
  line-height: 1.6rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 400;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
