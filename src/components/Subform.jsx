import React, { useState } from "react"
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function Subform() {
  const [formData, setFormData] = useState({
    email: ""
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldEmail = e.target.email;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldEmail]: fieldValue,
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({ 
        email: "",
      })

      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
    })
  }

  return (
    <div className="my-8">
      {formSuccess ? 
        <div>{formSuccessMessage}</div> 
        : 
        <form className="flex" method="POST" action="https://www.formbackend.com/f/664decaabbf1c319" onSubmit={submitForm}>
          <div>
            <input className="h-14 w-64 text-sm text-justify pl-2" type="text" name="email" placeholder="Subscribe to Newsletter" onChange={handleInput} value={formData.email} />
          </div>

          <button className="bg-secondary" type="submit"><AiOutlineArrowRight className="mx-6"/></button>
        </form>
      }
    </div>
  )
}