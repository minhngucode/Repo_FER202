const UserProfile = ({ user }) => {
    return (
        <>
            <p>Hello, {user.name}, {user.age} years old</p>
        </>
    )
}

export default UserProfile;