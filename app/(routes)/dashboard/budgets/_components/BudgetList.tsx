import React from 'react'
import CreateBudget from './CreateBudget'

const BudgetList = () => {
  return (
    <div className='p-2'>
      <h1 className='font-semibold text-2xl'>My Budgets</h1>
      <CreateBudget/>
    </div>
  )
}

export default BudgetList
