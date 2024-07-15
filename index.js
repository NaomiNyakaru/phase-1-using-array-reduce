let batteries = [
  { type: 'ASSEMBLE_BATTERY', payload: 10 },
  { type: 'ASSEMBLE_BATTERY', payload: 11 },
  { type: 'ASSEMBLE_BATTERY', payload: 10 },
];

let totalBatteries;

function reducer(state = 0, action) {
  switch (action.type) {
    case 'ASSEMBLE_BATTERY':
      return state + action.payload;
    default:
      return state;
  }
}

totalBatteries = batteries.reduce((acc, current) => reducer(acc, current), 0);