import buttonImg from '../assets/brocode-logo.png'

const ProfilePicture = () => {

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

  return (
    <img onClick={(e) =>handleClick(e)} src={buttonImg} alt="button-image" className='w-[100px] cursor-pointer' />
  )
}

export default ProfilePicture