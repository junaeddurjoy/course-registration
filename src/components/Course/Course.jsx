import PropTypes from 'prop-types';
import { FiDollarSign  } from 'react-icons/fi';
import { BsBook  } from 'react-icons/bs';
const Course = ({ course, addthisCourse }) => {
    const { title, cover, description, price, credit } = course;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-2 pt-2 w-full">
                <img src={cover} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-xl font-semibold text-center pt-2">{title}</h2>
                <p className='text-gray-500 pb-3 text-justify'>{description}</p>
                <div className='font-semibold flex justify-evenly'>
                
                    <div className='flex'>
                        <FiDollarSign className='text-gray-500 font-bold'/>                    
                        <p className='text-gray-500 pb-3 text-justify'>Price: {price}</p>
                    </div>
                    <div className='flex'>
                        <BsBook className='text-gray-500 font-bold' />
                        <p className='text-gray-500 pb-3 text-justify'>Credit: {credit}hr</p>
                    </div>
                    </div>
                <div className="card-actions">
                    <button onClick={addthisCourse} className="btn btn-primary bg-blue-600 hover:bg-blue-400 text-white p-2 rounded-xl w-full">Select</button>
                </div>
            </div>
        </div>
    )
}
Course.PropTypes = {
    course: PropTypes.object.isRequired,
    addthisCourse: PropTypes.func
}
export default Course