export function isActiveThisSemester(item) {
  return item.subject !== 'dermatology' || item.section === 'Obecná část';
}
