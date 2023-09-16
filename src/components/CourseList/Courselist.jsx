import PropTypes from 'prop-types'
const Courselist = ({course}) => {
  const {title} =  course;
  return (
    <div>
        <ol className='list-disc'>
            <li>{title}</li>
        </ol>
    </div>
  )
}
Courselist.propTypes = {
    course: PropTypes.object
}
export default Courselist