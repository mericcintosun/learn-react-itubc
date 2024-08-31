import PropTypes from 'prop-types'


const Student = (props) => {
  return (
    <>
    
    <div className="text-2xl p-5 border border-gray-500">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
    
    </>
  )
  
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    istStudent: false,
}

export default Student