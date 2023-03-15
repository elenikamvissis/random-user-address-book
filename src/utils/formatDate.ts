export const formatDate = (dateStr: string): string | null => {
  if (dateStr === undefined) return null
  const dateObj: Date = new Date(dateStr)
  const formattedDate: string = dateObj.toISOString().split('T')[0]
  return formattedDate
}
