import PropTypes from 'prop-types';

const Course = ({ course }) => {
    const { title, cover, description } = course;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cover} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold text-xl pt-2">{title}</h2>
                <p className='text-gray-500 pb-3'>{description}</p>
                
                <div className="card-actions">
                    <button className="btn btn-primary bg-blue-600 hover:bg-blue-400 text-white p-2 rounded-xl w-full">Select</button>
                </div>
            </div>
        </div>
    )
}
Course.PropTypes = {
    course: PropTypes.object.isRequired
}
export default Course