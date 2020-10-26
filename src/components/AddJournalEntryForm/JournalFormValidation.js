export default function validateJournalEntry(values) {
  let errors = {}

  if (!values.category) {
    errors.category = 'Please select a category'
  }

  if (values.phone && !/^\d{4,15}$/.test(values.phone)) {
    errors.phone = 'Bitte gib eine gültige Telefon-Nummer ohne Leerzeichen ein!'
  }

  if (
    values.place &&
    values.caption &&
    values.place.length &&
    values.caption.length < 2
  ) {
    errors.place = 'Input too short'
  } else if (
    values.place &&
    values.caption &&
    values.place.length &&
    values.caption.length > 30
  ) {
    errors.place = 'Input too long.'
  }

  if (values.entry && values.entry.length < 10) {
    errors.entry = 'This entry seems to be a little short'
  }

  return errors
}
