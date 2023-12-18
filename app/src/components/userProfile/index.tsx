import './index.css'
import { useEffect, useState } from 'react'
import { User } from '@/types/user'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/button'
import { updateProfile } from '@/end-points'

type Props = {
  user: User | null
}

export default function UserProfile({ user }: Props) {
  const navigate = useNavigate()
  const [modelIsOpen, setModelIsOpen] = useState(false)
  const [userProfileToUpdate, setUserProfileToUpdate] = useState<User | null>(user)

  const userMetaData: { title: string; value: string }[] = [
    { title: 'First Name', value: 'firstName' },
    { title: 'Last Name', value: 'lastName' },
    { title: 'Email', value: 'email' }
  ]

  function handleModel() {
    setModelIsOpen(!modelIsOpen)
  }

  async function handleUpdateProfile() {
    await updateProfile({
      firstName: userProfileToUpdate?.firstName as string,
      lastName: userProfileToUpdate?.lastName as string
    })

    navigate(0)

    handleModel()
  }

  useEffect(() => {
    setUserProfileToUpdate(user)
  }, [user])

  return (
    <>
      <section className="profile">
        <div className="profile-img-div">
          {/* <img src="" alt={`${user?.first_name} ${user?.last_name} profile`} /> */}
        </div>

        <div className="profile-meta-data">
          {userMetaData?.map((attribute, index) => {
            return (
              <div key={index} className="profile-meta-data-attribute">
                <label>{attribute.title}:</label>
                <span>{(user as any)?.[attribute.value]}</span>
              </div>
            )
          })}

          <br />

          <Button type="normal" className="action-btn" onClick={handleModel}>
            Update Profile
          </Button>

          <dialog open={modelIsOpen}>
            <div className="dialog-div">
              <div>
                <div className="dialog-body">
                  {userMetaData?.map((attribute, index) => {
                    if (attribute.value !== 'email') {
                      return (
                        <div
                          className="ui-get-values profile-meta-data-attribute"
                          key={index}
                        >
                          <label>{attribute.title}:</label>

                          <input
                            className={'ui-input'}
                            type={'text'}
                            value={(userProfileToUpdate as any)?.[attribute.value]}
                            placeholder={attribute.title}
                            onChange={(e) => {
                              if (userProfileToUpdate !== null) {
                                setUserProfileToUpdate({
                                  ...userProfileToUpdate,
                                  [attribute.value]: e.target.value
                                })
                              }
                            }}
                          />
                        </div>
                      )
                    }
                  })}
                </div>

                <div className="dialog-footer">
                  <Button type="important" className="action-btn" onClick={handleModel}>
                    Cancel
                  </Button>

                  <Button
                    type="normal"
                    className="action-btn"
                    onClick={handleUpdateProfile}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </section>
    </>
  )
}
