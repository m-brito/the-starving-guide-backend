const stateProfileText: Record<number, string> = {
  0: 'Offline',
  1: 'Online',
  2: 'Ocupado',
  3: 'Ausente',
  4: 'Querendo Jogar',
  5: 'Querendo Trocar',
  6: 'Jogando'
}

export function toStateProfileText(stateValue: number): string {
  return stateProfileText[stateValue] || 'Unknown'
}
