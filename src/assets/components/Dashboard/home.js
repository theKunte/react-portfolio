import { auth, storage, db } from '../../../firebase'
import { useRef } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc } from 'firebase/firestore/lite'
import { collection } from 'firebase/firestore/lite'

const Home = () => {
  const form = useRef()

  const submitPortfolio = (e) => {
    e.preventDefault()
    const name = form.current[0]?.value
    const description = form.current[1]?.value
    const url = form.current[2]?.value
    const image = form.current[3]?.files[0]

    const storageRef = ref(storage, `portfolio/${image.name}`)

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePortfolio({
              name,
              description,
              url,
              image: downloadUrl,
            })
          },
          (error) => {
            console.log(error)
            savePortfolio({
              name,
              description,
              url,
              image: null,
            })
          }
        )
      },
      (error) => {
        console.log(error)
        savePortfolio({
          name,
          description,
          url,
          image: null,
        })
      }
    )
  }

  const savePortfolio = async (portfolio) => {
    console.log(portfolio)
    try {
      await addDoc(collection(db, 'portfolio'), portfolio)
      window.location.reload(false)
    } catch (error) {
      alert('Failed to add portfolio')
    }
  }

  return (
    <div
      className="dashboard"
      style={{ paddingLeft: '80px', boxSizing: 'border-box' }}
    >
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <textarea placeholder="Description" />
        </p>
        <p>
          <input type="text" placeholder="Url" />
        </p>
        <p>
          <input type="file" placeholder="Image" />
        </p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </form>
    </div>
  )
}

export default Home
