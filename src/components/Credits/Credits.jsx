import PropTypes from 'prop-types'
import Courselist from '../CourseList/Courselist'
const Credits = ({credits, creds, total}) => {
  const { title, cover, description, price, credit } = credits;
  // const {title} =  credit;
  // let remaining = 20;
  // let limit = remaining-{credit.credit}; 
  return (
    <div className="w-96 px-3 py-3">
      <div className="bg-base-100 shadow-xl -mr-24 text-left p-5">
          <h3 className="text-lg font-bold text-blue-500">Credit Hour Remaining:
          {creds}hr
          </h3>

        <hr />
        <h3 className="text-lg font-bold">Course Name </h3>
        {
          credits.map(course => <Courselist course={course}></Courselist> )
        }
        <hr />
        <p className='font-bold'>Total Credit Hour: {total}hr</p>
      </div>
    </div>
  )
}
Credits.propTypes = {
  credit: PropTypes.array,
  creds: PropTypes.number,
  total: PropTypes.number
}

export default Credits