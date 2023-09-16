import PropTypes from 'prop-types'
const Courselist = ({course}) => {
  const {title} =  course;
  return (
    <div>
        <ol className='list-decimal'>
            <li>{title}</li>
        </ol>
        <h3>{title}</h3>
    </div>
  )
}
Courselist.propTypes = {
    course: PropTypes.object
}
export default Courselist