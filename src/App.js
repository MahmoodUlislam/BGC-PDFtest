import "./App.css";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import { pdfGenerator } from "./esikidz-utilities";
import formJsonData from "./data/dataJson";

function App() {
  // Create refs for form fields
  const avatarRef = useRef(null);
  const careCardRef = useRef(null);
  const medicalConditionRef = useRef(null);
  const allergiesRef = useRef(null);
  const specialNeedsRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const birthdayRef = useRef(null);
  const genderRef = useRef(null);
  const primaryLanguageRef = useRef(null);
  const secondaryLanguageRef = useRef(null);
  const custodyRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const outdoorConsentRef = useRef(null);
  const ambulanceConsentRef = useRef(null);
  const photoConsentRef = useRef(null);
  const sunscreenConsentRef = useRef(null);
  const transportationConsentRef = useRef(null);
  const currentGradeRef = useRef(null);
  const frenchImmersionRef = useRef(null);
  const epiPenOrInhalerRef = useRef(null);
  const indigenousPersonRef = useRef(null);
  const walkHomePermissionRef = useRef(null);
  const childEthnicityRef = useRef(null);
  const guardianPhotoRef = useRef(null);
  const primaryGuardianNameRef = useRef(null);
  const primaryGuardianRelationshipRef = useRef(null);
  const primaryGuardianCellPhoneRef = useRef(null);
  const primaryGuardianEmailRef = useRef(null);
  const secondaryGuardianNameRef = useRef(null);
  const secondaryGuardianRelationshipRef = useRef(null);
  const secondaryGuardianCellPhoneRef = useRef(null);
  const secondaryGuardianEmailRef = useRef(null);
  const familyAddressRef = useRef(null);
  const familyCityRef = useRef(null);
  const familyProvinceRef = useRef(null);
  const familyPostalCodeRef = useRef(null);
  const pickupName1Ref = useRef(null);
  const pickupRelationship1Ref = useRef(null);
  const pickupPhone1Ref = useRef(null);
  const pickupName2Ref = useRef(null);
  const pickupRelationship2Ref = useRef(null);
  const pickupPhone2Ref = useRef(null);
  const pickupName3Ref = useRef(null);
  const pickupRelationship3Ref = useRef(null);
  const pickupPhone3Ref = useRef(null);
  const pickupName4Ref = useRef(null);
  const pickupRelationship4Ref = useRef(null);
  const pickupPhone4Ref = useRef(null);
  const doctorNameRef = useRef(null);
  const doctorPhoneRef = useRef(null);
  const primaryEmergencyContactNameRef = useRef(null);
  const primaryEmergencyContactPhoneRef = useRef(null);
  const secondaryEmergencyContactNameRef = useRef(null);
  const secondaryEmergencyContactPhoneRef = useRef(null);
  const newcomerStatusRef = useRef(null);
  const arrivalDateRef = useRef(null);
  const waiverOfLiabilityRef = useRef(null);

  useEffect(() => {
    // Update the title when the component mounts
    document.title = "BCG Saskatoon: Child Registration";

    return () => {
      document.title = "BCG Saskatoon: Child Registration";
    };
  }, []);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Access values using refs
    // Get values from refs
    const avatar = avatarRef.current.value;
    const careCard = careCardRef.current.value;
    const medicalCondition = medicalConditionRef.current.value;
    const allergies = allergiesRef.current.value;
    const specialNeeds = specialNeedsRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const birthday = birthdayRef.current.value;
    const gender = genderRef.current.value;
    const primaryLanguage = primaryLanguageRef.current.value;
    const secondaryLanguage = secondaryLanguageRef.current.value;
    const custody = custodyRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const outdoorConsent = outdoorConsentRef.current.checked;
    const ambulanceConsent = ambulanceConsentRef.current.checked;
    const photoConsent = photoConsentRef.current.checked;
    const sunscreenConsent = sunscreenConsentRef.current.checked;
    const transportationConsent = transportationConsentRef.current.checked;
    // const currentGrade = currentGradeRef.current.value;
    // const frenchImmersion = frenchImmersionRef.current.value;
    // const epiPenOrInhaler = epiPenOrInhalerRef.current.value;
    // const indigenousPerson = indigenousPersonRef.current.value;
    // const walkHomePermission = walkHomePermissionRef.current.value;
    // const childEthnicity = childEthnicityRef.current.value;
    // const guardianPhoto = guardianPhotoRef.current.value;
    // const primaryGuardianName = primaryGuardianNameRef.current.value;
    // const primaryGuardianRelationship =
    //   primaryGuardianRelationshipRef.current.value;
    // const primaryGuardianCellPhone = primaryGuardianCellPhoneRef.current.value;
    // const primaryGuardianEmail = primaryGuardianEmailRef.current.value;
    // const secondaryGuardianName = secondaryGuardianNameRef.current.value;
    // const secondaryGuardianRelationship =
    //   secondaryGuardianRelationshipRef.current.value;
    // const secondaryGuardianCellPhone =
    //   secondaryGuardianCellPhoneRef.current.value;
    // const secondaryGuardianEmail = secondaryGuardianEmailRef.current.value;
    // const familyAddress = familyAddressRef.current.value;
    // const familyCity = familyCityRef.current.value;
    // const familyProvince = familyProvinceRef.current.value;
    // const familyPostalCode = familyPostalCodeRef.current.value;
    // const pickupName1 = pickupName1Ref.current.value;
    // const pickupRelationship1 = pickupRelationship1Ref.current.value;
    // const pickupPhone1 = pickupPhone1Ref.current.value;
    // const pickupName2 = pickupName2Ref.current.value;
    // const pickupRelationship2 = pickupRelationship2Ref.current.value;
    // const pickupPhone2 = pickupPhone2Ref.current.value;
    // const pickupName3 = pickupName3Ref.current.value;
    // const pickupRelationship3 = pickupRelationship3Ref.current.value;
    // const pickupPhone3 = pickupPhone3Ref.current.value;
    // const pickupName4 = pickupName4Ref.current.value;
    // const pickupRelationship4 = pickupRelationship4Ref.current.value;
    // const pickupPhone4 = pickupPhone4Ref.current.value;
    // const doctorName = doctorNameRef.current.value;
    // const doctorPhone = doctorPhoneRef.current.value;
    // const primaryEmergencyContactName =
    //   primaryEmergencyContactNameRef.current.value;
    // const primaryEmergencyContactPhone =
    //   primaryEmergencyContactPhoneRef.current.value;
    // const secondaryEmergencyContactName =
    //   secondaryEmergencyContactNameRef.current.value;
    // const secondaryEmergencyContactPhone =
    //   secondaryEmergencyContactPhoneRef.current.value;
    // const newcomerStatus = newcomerStatusRef.current.value;
    // const arrivalDate = arrivalDateRef.current.value;
    // const waiverOfLiability = waiverOfLiabilityRef.current.checked;

    // Generate PDF
    const pdf = pdfGenerator.createChildDocumentPdf(
      pdfGenerator.getRegistrationData({
        avatar,
        careCard,
        medicalCondition,
        allergies,
        specialNeeds,
        firstName,
        lastName,
        birthday,
        gender,
        primaryLanguage,
        secondaryLanguage,
        custody,
        phone,
        email,
        outdoorConsent,
        ambulanceConsent,
        photoConsent,
        sunscreenConsent,
        transportationConsent,
        // currentGrade,
        // frenchImmersion,
        // epiPenOrInhaler,
        // indigenousPerson,
        // walkHomePermission,
        // childEthnicity,
        // guardianPhoto,
        // primaryGuardianName,
        // primaryGuardianRelationship,
        // primaryGuardianCellPhone,
        // primaryGuardianEmail,
        // secondaryGuardianName,
        // secondaryGuardianRelationship,
        // secondaryGuardianCellPhone,
        // secondaryGuardianEmail,
        // familyAddress,
        // familyCity,
        // familyProvince,
        // familyPostalCode,
        // pickupName1,
        // pickupRelationship1,
        // pickupPhone1,
        // pickupName2,
        // pickupRelationship2,
        // pickupPhone2,
        // pickupName3,
        // pickupRelationship3,
        // pickupPhone3,
        // pickupName4,
        // pickupRelationship4,
        // pickupPhone4,
        // doctorName,
        // doctorPhone,
        // primaryEmergencyContactName,
        // primaryEmergencyContactPhone,
        // secondaryEmergencyContactName,
        // secondaryEmergencyContactPhone,
        // newcomerStatus,
        // arrivalDate,
        // waiverOfLiability,
      })
    );
    // console.log(pdf);
  };

  return (
    <div className="app">
      <div className="headline">BCG Saskatoon: Child Registration</div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            Upload Child Avatar Photo:
            <input type="file" ref={avatarRef} />
          </label>

          {/* Medical Info */}
          <h2>Medical Information</h2>
          <label>
            Care Card Number:
            <input type="number" ref={careCardRef} />
          </label>

          <label>
            Medical Condition/Details:
            <input type="text" ref={medicalConditionRef} />
          </label>

          <label>
            Allergies/Details:
            <input type="text" ref={allergiesRef} />
          </label>

          <label>
            Special Needs/Details:
            <input type="text" ref={specialNeedsRef} />
          </label>

          {/* Child Info */}
          <h2>Child Information</h2>
          <label>
            First Name:
            <input type="text" ref={firstNameRef} />
          </label>

          <label>
            Last Name:
            <input type="text" ref={lastNameRef} />
          </label>

          <label>
            Birthday:
            <input type="date" ref={birthdayRef} />
          </label>

          <label>
            Gender:
            <select ref={genderRef}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            Primary Language:
            <input type="text" ref={primaryLanguageRef} />
          </label>

          <label>
            Secondary Language:
            <input type="text" ref={secondaryLanguageRef} />
          </label>

          <label>
            Custody or Other Legal Orders:
            <input type="text" ref={custodyRef} />
          </label>

          {/* Consent */}
          <h2>Consents</h2>
          <label>
            Phone calls:
            <input type="checkbox" ref={phoneRef} />
          </label>

          <label>
            Email communication:
            <input type="checkbox" ref={emailRef} />
          </label>

          <label>
            Outdoor Activities:
            <input type="checkbox" ref={outdoorConsentRef} />
          </label>

          <label>
            Ambulance Services:
            <input type="checkbox" ref={ambulanceConsentRef} />
          </label>

          <label>
            Photo Release:
            <input type="checkbox" ref={photoConsentRef} />
          </label>

          <label>
            Sunscreen Application:
            <input type="checkbox" ref={sunscreenConsentRef} />
          </label>

          <label>
            Transportation:
            <input type="checkbox" ref={transportationConsentRef} />
          </label>

          {/* BGC Specific */}
          <h2>BGC Specific</h2>
          <label>
            Current Grade (select N/A if not eligible to attend school):
            <select id="currentGrade" name="currentGrade">
              <option value="N/A">N/A</option>
              <option value="Infant">Infant</option>
              <option value="Toddler">Toddler</option>
            </select>
          </label>

          <label>
            Does your child attend a French immersion program?
            <select id="frenchImmersion" name="frenchImmersion">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Does your child carry an Epi-Pen or Inhaler?
            <select id="epiPenOrInhaler" name="epiPenOrInhaler">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Is your child a Canadian Indigenous person?
            <select id="indigenousPerson" name="indigenousPerson">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Is your child permitted to walk home from the center?
            <select id="walkHomePermission" name="walkHomePermission">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            What is your child's ethnicity?
            <input type="text" id="childEthnicity" name="childEthnicity" />
          </label>

          <h1>Guardian Information</h1>
          {/* Guardian Photo Upload */}
          <label>
            Upload guardian photo for authorized pickup:
            <input
              type="file"
              id="guardianPhoto"
              name="guardianPhoto"
              accept="image/*"
            />
          </label>

          {/* Primary Guardian */}
          <h2>Primary Guardian</h2>
          <label>
            Name:
            <input
              type="text"
              id="primaryGuardianName"
              name="primaryGuardianName"
              required
            />
          </label>
          <label>
            Relationship:
            <input
              type="text"
              id="primaryGuardianRelationship"
              name="primaryGuardianRelationship"
              required
            />
          </label>
          <label>
            Cell Phone:
            <input
              type="tel"
              id="primaryGuardianCellPhone"
              name="primaryGuardianCellPhone"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              id="primaryGuardianEmail"
              name="primaryGuardianEmail"
              required
            />
          </label>

          {/* Secondary Guardian */}
          <h2>Secondary Guardian</h2>
          <label>
            Name:
            <input
              type="text"
              id="secondaryGuardianName"
              name="secondaryGuardianName"
              required
            />
          </label>
          <label>
            Relationship:
            <input
              type="text"
              id="secondaryGuardianRelationship"
              name="secondaryGuardianRelationship"
              required
            />
          </label>
          <label>
            Cell Phone:
            <input
              type="tel"
              id="secondaryGuardianCellPhone"
              name="secondaryGuardianCellPhone"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              id="secondaryGuardianEmail"
              name="secondaryGuardianEmail"
              required
            />
          </label>

          {/* Family Address */}
          <h2>Family Address</h2>
          <label>
            Address:
            <input
              type="text"
              id="familyAddress"
              name="familyAddress"
              required
            />
          </label>
          <label>
            City:
            <input type="text" id="familyCity" name="familyCity" required />
          </label>
          <label>
            Province:
            <input
              type="text"
              id="familyProvince"
              name="familyProvince"
              required
            />
          </label>
          <label>
            Postal Code:
            <input
              type="text"
              id="familyPostalCode"
              name="familyPostalCode"
              required
            />
          </label>

          {/* Pick Up List (max 4) */}
          <h2>Pick Up List</h2>
          <div id="pickupList">
            <div class="pickupSet">
              <label>
                Name:
                <input type="text" name="pickupName1" required />
              </label>
              <label>
                Relationship:
                <input type="text" name="pickupRelationship1" required />
              </label>
              <label>
                Phone:
                <input type="tel" name="pickupPhone1" required />
              </label>
            </div>
            <div class="pickupSet">
              <label>
                Name:
                <input type="text" name="pickupName2" />
              </label>
              <label>
                Relationship:
                <input type="text" name="pickupRelationship2" />
              </label>
              <label>
                Phone:
                <input type="tel" name="pickupPhone2" />
              </label>
            </div>
            <div class="pickupSet">
              <label>
                Name:
                <input type="text" name="pickupName3" />
              </label>
              <label>
                Relationship:
                <input type="text" name="pickupRelationship3" />
              </label>
              <label>
                Phone:
                <input type="tel" name="pickupPhone3" />
              </label>
            </div>
            <div class="pickupSet">
              <label>
                Name:
                <input type="text" name="pickupName4" />
              </label>
              <label>
                Relationship:
                <input type="text" name="pickupRelationship4" />
              </label>
              <label>
                Phone:
                <input type="tel" name="pickupPhone4" />
              </label>
            </div>
          </div>

          {/* Emergency Info */}
          <h2>Emergency Info</h2>
          <label>
            Doctor:
            <input type="text" id="doctorName" name="doctorName" required />
          </label>
          <label>
            Doctor Phone:
            <input type="tel" id="doctorPhone" name="doctorPhone" required />
          </label>
          <label>
            Primary Emergency Contact Name:
            <input
              type="text"
              id="primaryEmergencyContactName"
              name="primaryEmergencyContactName"
              required
            />
          </label>
          <label>
            Primary Emergency Contact Phone:
            <input
              type="tel"
              id="primaryEmergencyContactPhone"
              name="primaryEmergencyContactPhone"
              required
            />
          </label>
          <label>
            Secondary Emergency Contact Name:
            <input
              type="text"
              id="secondaryEmergencyContactName"
              name="secondaryEmergencyContactName"
              required
            />
          </label>
          <label>
            Secondary Emergency Contact Phone:
            <input
              type="tel"
              id="secondaryEmergencyContactPhone"
              name="secondaryEmergencyContactPhone"
              required
            />
          </label>

          {/* BGC Specific */}
          <h2>BGC Specific</h2>
          <label>
            Considered a newcomer to Canada (immigrated within the last 5
            years)?
            <select id="newcomerStatus" name="newcomerStatus">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            If yes, please enter date of arrival in Canada (mmm/dd/yyyy) <br />{" "}
            Enter n/a if not applicable:
            <input
              type="text"
              id="arrivalDate"
              name="arrivalDate"
              placeholder="mm/dd/yyyy or N/A"
            />
          </label>

          <label>
            Waiver of Liability:
            <input
              type="checkbox"
              id="waiverOfLiability"
              name="waiverOfLiability"
              required
            />
          </label>

          {/* Submit form */}
          <button type="submit">Submit & Download PDF</button>
        </form>
      </div>
    </div>
  );
}

export default App;
