import BreadCrumb from "../components/BreadCrumb"
import React from "react"
import ProfileForm from "../components/ProfilePage/ProfileForm"

function Profile() {
  return (
    <>
      <main>
        <div className="flex items-center justify-center">
          <BreadCrumb path="/profile" title="Profile" />
        </div>

        <div className="text-center bg-white h-full min-h-[450px] py-6">
          <ProfileForm />
        </div>
      </main>
    </>
  )
}

export default Profile
