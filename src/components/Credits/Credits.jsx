import PropTypes from 'prop-types'
import Courselist from '../CourseList/Courselist'
import Calculation from './Calculation';
const Credits = ({credits}) => {
  const { title, cover, description, price, credit } = credits;
  // const {title} =  credit;
  // let remaining = 20;
  // let limit = remaining-{credit.credit}; 
  return (
    <div className="w-96 px-3 py-3">
      <div className="bg-base-100 shadow-xl -mr-24 text-left p-5">
        <div className='flex'>
          <h3 className="text-lg font-bold text-blue-500">Credit Hour Remaining: 20hr</h3>
          {
            credits.map(credit => <Calculation credit = {credit}></Calculation>) 
          }
        </div>
        <hr />
        <h3 className="text-lg font-bold">Course Name </h3>
        {
          credits.map(course => <Courselist course={course}></Courselist> )
        }
        <hr />
        <p>Total Credit Hour: 14hr</p>
        <hr />
        <p className="font-bold">Total Price: 345000tk</p>
      </div>
    </div>
  )
}
Credits.propTypes = {
  credit: PropTypes.array
}

export default Credits