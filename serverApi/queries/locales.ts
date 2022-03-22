enum Locale {
    CS = 'CS',
    EN = 'EN'
  }
  export const locales = (_parent: any, _args: any, _context: any) : Locale[] => {
    return Object.values(Locale)
  }