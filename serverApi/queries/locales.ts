import { db, getCollection } from "../lib/db"
enum Locale {
  CS = 'CS',
  EN = 'EN',
  RU = 'RU'
}
type LocaleEntity = {
  code: Locale,
  disabled: boolean
}
const ensureLocales = async () => {
  
  const collectionsNames = (await db().listCollections()).map(col => col.id);
  console.log(collectionsNames)
  
  if (!collectionsNames.includes('locales')) {
    const col = getCollection<LocaleEntity>('locales')  
    await col.add({code: Locale.CS, disabled: false});
    await col.add({code: Locale.EN, disabled: false});
    await col.add({code: Locale.RU, disabled: true});
  }
  
}
export const locales = async (_parent: any, _args: any, _context: any) : Promise<Locale[]> => {
  await ensureLocales();
  const query = await getCollection<LocaleEntity>('locales').where('disabled','==', false);
  const snapshot = await query.get();
  const docs = snapshot.docs.map(doc=>doc.data().code)
  
  return docs;
}
