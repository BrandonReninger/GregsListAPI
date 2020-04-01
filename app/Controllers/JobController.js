import JobService from '../Services/JobService.js'
import _store from '../store.js'
import store from "../store.js"


function _drawJobs() {
    let template = ""
    let jobs = _store.State.jobs

    jobs.forEach(job => template += job.Template)
    document.getElementById("jobs").innerHTML = template
}


export default class HouseController {
    constructor() {
        _store.subscribe('jobs', _drawJobs)
    }

    bid(jobId) {
        JobService.bid(jobId)
    }

    create(event) {
        event.preventDefault()
        let formData = event.target

        let newJobObject = {
            company: formData.company.value,
            jobTitle: formData.jobTitle.value,
            hours: formData.hours.value,
            rate: formData.rate.value,
            description: formData.description.value
        }
        JobService.create(newJobObject)
        formData.reset()
        $('#add-job-modal').modal('toggle')
    }

    delete(jobId) {
        JobService.delete(jobId)
    }

}