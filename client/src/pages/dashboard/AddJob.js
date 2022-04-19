import Wrapper from "../../assets/wrappers/DashboardFormPage"
import {FormRow, Alert, FormRowSelect} from '../../components'
import { useAppContext } from "../../context/appContext"

const AddJob = () => {

  const {
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues,
    isLoading,
    createJob,
    editJob
  } = useAppContext()

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!position || !company || !jobLocation){
      displayAlert()
      return
    }
    if(isEditing){
      editJob()
      return
    }
    createJob()
  }

  const handleJobInput = (e) =>{
    const name = e.target.name
    const value = e.target.value
    // console.log(`${name}:${value}`)
    handleChange({name,value})
  }
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert/>}

        {/* position */}
        <div className="form-center">
          <FormRow
          type='text'
          name='position'
          value={position}
          handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
          type='text'
          name='company'
          value={company}
          handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
          type='text'
          labelText='job location'
          name='jobLocation'
          value={jobLocation}
          handleChange={handleJobInput}
          />
          {/* job type */}
          <FormRowSelect 
          name='status' 
          value={status} 
          handleChange={handleJobInput}
          list={statusOptions}
          />
          {/* job status */}
          <FormRowSelect 
          name='jobType'
          labelText='job type' 
          value={jobType} 
          handleChange={handleJobInput}
          list={jobTypeOptions}
          />

          {/* btn container */}
          <div className="btn-container">
            <button
            className="btn btn-block submit-btn"
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            >
              submit
            </button>

            <button
            onClick={(e)=>{
              e.preventDefault()
              clearValues()
            }}
            className='btn btn-block clear-btn'
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
