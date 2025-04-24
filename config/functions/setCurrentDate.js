export default function applyCurrentDate(entity) {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const yyyy = today.getFullYear();

  entity.c_currentDate = `${mm}-${dd}-${yyyy}`;
  return entity;
}
