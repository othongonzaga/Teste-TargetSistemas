const billings = [
    {
      name: 'SP',
      value: 67836.43
    },
    {
      name: 'RJ',
      value: 36678.66
    },
    {
      name: 'MG',
      value: 29229.88
    },
    {
      name: 'ES',
      value: 27165.48
    },
    {
      name: 'Outros',
      value: 19849.53
    },
  
  ]
  
  let total = billings.reduce((acc, state) => acc + state.value, 0)
  console.log(total)
  
  function percentualParticipation(stateName) {
    let stateBilling = billings.find(state => state.name == stateName)
    return (stateBilling.value * 100 / total).toFixed(2)
  }
  console.log(percentualParticipation('MG'))