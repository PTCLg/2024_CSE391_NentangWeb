import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    Student: PropTypes.bool,
}

Student.defaultProps ={
    name: 'None',
    age: 0,
    Student: false,
}

export default Student