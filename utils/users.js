import { db } from './initFirebase'
import { collection, getDocs, query } from 'firebase/firestore'

const getUsers = async () => {
  const q = query(collection(db, 'users'))
  const snapshot = await getDocs(q)
  let users = []
  snapshot.forEach((doc) => users.push(doc.data()))
  return users
}

export { getUsers }
