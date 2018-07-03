import React from 'react';

const backDropStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 600,
    minHeight: 500,
    margin: '0 auto',
    padding: 30,
    position: 'relative'
}

const NewPartnerForm = (props) => {

        if(!props.show) {
            return null;
        }

        return <div style={backDropStyle}> 
            <div style={modalStyle}>
                <h2 className="textSelectPartner">Register New Partner</h2>
                <form>
                    
                    <div className="formGroup">
                    <label htmlFor="newOrgName">Organization Name</label>
                    <input onChange={props.handleChange} type="text" name="orgName" id="newOrgName" value={props.newOrg.orgName}/>
                    </div>

                    <div className="formGroup">
                    <label htmlFor="neworgAbbreviation">Organization Abbreviation</label>
                    <input onChange={props.handleChange} type="text" name="orgAbbreviation" id="newOrgAbbreviation" value={props.newOrg.orgAbbreviation}/>
                    </div>

                    <div className="formGroup">
                    <label htmlFor="newOrgAddress">Address</label>
                    <input onChange={props.handleChange} type="text" name="orgAddress" id="newOrgAddress" value={props.newOrg.orgAddress}/>
                    </div>

                    <div className="formGroup">
                    <label htmlFor="newOrgWebsite">Website</label>
                    <input onChange={props.handleChange} type="text" name="orgWebsite" id="newOrgWebsite" value={props.newOrg.orgWebsite}/>
                    </div>

                    <div className="formGroup">
                    <label htmlFor="newOrgPhone">Phone Number</label>
                    <input onChange={props.handleChange} type="text" name="orgPhone" id="newOrgPhone" value={props.newOrg.orgPhone}/>
                    </div>

                    <div className="formGroup">
                    <label htmlFor="newDirectorFirst">Director First Name</label>
                    <input onChange={props.handleChange} type="text" name="directorFirst" id="newDirectorFirst" value={props.newOrg.directorFirst}/>
                    </div>

                    <div className="formGroup">
                    <label htmlFor="newDirectorLast">Director Last Name</label>
                    <input onChange={props.handleChange} type="text" name="directorLast" id="newDirectorLast" value={props.newOrg.directorLast}/>
                    </div>

                    <div className="formGroup">
                    <label htmlFor="newBusinessType">Business Type</label>
                    <select onChange={props.handleChange} defaultValue="" name="businessType" id="newBusinessType">
                        <option value="" disabled></option>
                        <option value="For-profit">For-profit</option>
                        <option value="Non-profit">Non-profit</option>
                        <option value="School/College">School/College</option>
                        <option value="other">other</option>
                    </select>
                    </div>
                </form>
                <button onClick={props.handleSubmit}>Submit Partner Organization</button>
                <button onClick={props.closeNewPartnerModal}>Close Modal</button>
            </div>
        </div>
}

export default NewPartnerForm

