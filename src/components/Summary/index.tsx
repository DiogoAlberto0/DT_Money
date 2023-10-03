import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import { SummaryContainer, SummaryContent } from './styles'

import { useSummary } from '../../hooks/useSummary'

import { priceFormat } from '../../utils/formatter'

export const Summary = () => {
  const { summary } = useSummary()

  return (
    <SummaryContainer>
      <SummaryContent iconvariant="green">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{priceFormat.format(summary.income)}</strong>
      </SummaryContent>
      <SummaryContent iconvariant="red">
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{priceFormat.format(summary.outcome)}</strong>
      </SummaryContent>
      <SummaryContent variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} />
        </header>

        <strong>{priceFormat.format(summary.total)}</strong>
      </SummaryContent>
    </SummaryContainer>
  )
}
