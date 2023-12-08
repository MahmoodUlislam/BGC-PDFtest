const formJsonData = {
  formName: "Registration Form",
  centreName: "Regular Daycare",
  fillFormDate: "2023-12-8",
  childName: "Mobile2 Test",
  childBirthDay: "2022-02-17",
  dateSigned: "2021-02-17",
  coverPageImage:
    "data:binary/octet-stream;base64,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",
  formElements: [
    {
      layout: "header",
      line1: "Regular Daycare",
      line2: "Registration Form",
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [],
      marginTopBottom: 7.5,
      childElements: [
        {
          type: "DisplayText",
          text1: "Childcare Facility's Name",
          text2: "Regular Daycare",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Child's Start Date",
          text2: "2023-09-09",
          colSpan: 1,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 6,
      columnWidths: [
        "16.67%",
        "16.67%",
        "16.67%",
        "16.67%",
        "16.67%",
        "16.67%",
      ],
      tableHeaders: [
        {
          text: "Child Information",
          alignment: "left",
        },
      ],
      marginTopBottom: 7.5,
      childElements: [
        {
          type: "DisplayText",
          text1: "Last Name",
          text2: "Test",
          colSpan: 2,
        },
        {
          type: "DisplayText",
          text1: "First Name",
          text2: "Mobile2",
          colSpan: 2,
        },
        {
          type: "DisplayText",
          text1: "Known As",
          text2: "",
          colSpan: 2,
        },
        {
          type: "DisplayText",
          text1: "Sex",
          text2: "male",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Birthday",
          text2: "2022-02-17",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Name the Child Responds to",
          text2: "",
          colSpan: 6,
        },
        {
          type: "DisplayText",
          text1: "Address",
          text2: "302 Main st, Dhaka, sk",
          colSpan: 6,
        },
        {
          type: "DisplayText",
          text1: "Postal Code",
          text2: "V6X2B1",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "01717077230",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Person(s) with whom the child lives (adults and children)",
          text2: "with me",
          isVerticalStackType: true,
          heights: 66,
          colSpan: 6,
        },
        {
          type: "DisplayText",
          text1: "First Language",
          text2: "Bangla",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Other Language",
          text2: "",
          colSpan: 3,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 6,
      columnWidths: [
        "16.67%",
        "16.67%",
        "16.67%",
        "16.67%",
        "16.67%",
        "16.67%",
      ],
      tableHeaders: [
        {
          text: "Parents/Guardians Information",
          alignment: "left",
        },
      ],
      marginTopBottom: 7.5,
      childElements: [
        {
          type: "DisplayText",
          text1: "Parent Name",
          text2: "islam",
          colSpan: 4,
        },
        {
          type: "DisplayText",
          text1: "Relationship",
          text2: "father",
          colSpan: 2,
        },
        {
          type: "DisplayText",
          text1: "Home Phone",
          text2: "",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Cell Phone",
          text2: "01717077230",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Work Phone",
          text2: "",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Email",
          text2: "mahmood.islam@gmail.com",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Parent Name",
          text2: "",
          colSpan: 4,
        },
        {
          type: "DisplayText",
          text1: "Relationship",
          text2: "",
          colSpan: 2,
        },
        {
          type: "DisplayText",
          text1: "Home Phone",
          text2: "",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Cell Phone",
          text2: "",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Work Phone",
          text2: "",
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: "Email",
          text2: "",
          colSpan: 3,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [
        {
          text: "Pick up Information",
          alignment: "left",
        },
      ],
      marginTopBottom: 7.5,
      childElements: [
        {
          type: "DisplayItem",
          label:
            "Person(s) authorized to pick up the child and be contacted in case of emergency. These people should be available during hours of care.(include mother / father / guardian):",
          prefix: "",
          fontSize: 11,
          outSideBorder: [false, false, false, false],
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 3,
      columnWidths: ["33.33%", "33.33%", "33.33%"],
      tableHeaders: [],
      marginTopBottom: 7.5,
      childElements: [
        {
          type: "DisplayText",
          text1: "Name",
          text2: "mahmood",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Relationship",
          text2: "father",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "032148024890",
          colSpan: 1,
        },
      ],
    },
    {
      layout: "break",
    },
    {
      layout: "table",
      totalColumns: 3,
      columnWidths: ["33.33%", "33.33%", "33.33%"],
      tableHeaders: [],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayText",
          text1: "Name",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Relationship",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Name",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Relationship",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Name",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Relationship",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "",
          colSpan: 1,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 2,
      columnWidths: ["50%", "50%"],
      tableHeaders: [
        {
          text: "If appropriate, list an English speaking contact",
          alignment: "left",
          fontSize: 11,
          isBold: false,
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayText",
          text1: "Name",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "",
          colSpan: 1,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [
        {
          text: "Daycare Information",
          alignment: "left",
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayRowCheckOptions",
          label: "Has the child previously attended daycare/preschool?",
          value: "No",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Comment",
          text2: "",
          isVerticalStackType: true,
          colSpan: 1,
          heights: 66,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      padding: [0, 0, 0, 3.75],
      tableHeaders: [
        {
          text: "Comments/instructions to help us care for your child. (Please feel free to add additional pages.)",
          alignment: "left",
          fontSize: 11,
          isBold: false,
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayText",
          text1: "Toileting/Diapering (special words)",
          text2: "",
          colSpan: 1,
          isVerticalStackType: true,
          border: [true, true, true, true],
          heights: 66,
          outSideBorder: [false, false, false, false],
        },
        {
          type: "DisplayText",
          text1: "Rest Time (special comfort – toy/blanket)",
          text2: "",
          colSpan: 1,
          isVerticalStackType: true,
          border: [true, true, true, true],
          heights: 66,
          outSideBorder: [false, false, false, false],
        },
        {
          type: "DisplayText",
          text1: "Eating/Mealtime (include food likes/dislikes)",
          text2: "",
          colSpan: 1,
          isVerticalStackType: true,
          border: [true, true, true, true],
          heights: 66,
          outSideBorder: [false, false, false, false],
        },
        {
          type: "DisplayText",
          text1: "Fears",
          text2: "",
          colSpan: 1,
          isVerticalStackType: true,
          border: [true, true, true, true],
          heights: 66,
          outSideBorder: [false, false, false, false],
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      padding: [0, 0, 0, 3.75],
      tableHeaders: [
        {
          text: "Please tell us anything else you think will help us provide an enriching experience for your child",
          alignment: "left",
          fontSize: 11,
          isBold: false,
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayText",
          text1: "",
          text2: "",
          colSpan: 1,
          isVerticalStackType: true,
          border: [true, true, true, true],
          heights: 120,
          outSideBorder: [false, false, false, false],
          widths: [
            {
              width: 565,
              _minWidth: 3.75,
              _maxWidth: 3.75,
              _calcWidth: 565,
            },
          ],
        },
      ],
    },
    {
      layout: "break",
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [
        {
          text: "Health Information",
          alignment: "left",
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayItem",
          label:
            "Health professionals involved with your child (other than doctor and dentist)",
          prefix: "",
          fontSize: 11,
          outSideBorder: [false, false, false, false],
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 2,
      columnWidths: ["50%", "50%"],
      tableHeaders: [],
      marginTopBottom: 0,
      childElements: [
        {
          type: "DisplayText",
          text1: "Name",
          text2: "mahmood",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Profession/Agency",
          text2: "business",
          colSpan: 2,
        },
        {
          type: "DisplayText",
          text1: "Name",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Profession/Agency",
          text2: "",
          colSpan: 2,
        },
        {
          type: "DisplayText",
          text1: "Name",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Phone",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Profession/Agency",
          text2: "",
          colSpan: 2,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [
        {
          text: "Does your child has",
          alignment: "left",
          fontSize: 11,
          isBold: false,
          margin: [0, 3.75, 0, 7],
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayRowCheckOptions",
          label: "A medical condition/concern?",
          value: "No",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "If yes, please provide further information",
          text2: "",
          isVerticalStackType: true,
          colSpan: 1,
          heights: 66,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayRowCheckOptions",
          label: "Allergies?",
          value: "No",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "If yes, please provide further information",
          text2: "",
          isVerticalStackType: true,
          colSpan: 1,
          heights: 66,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayRowCheckOptions",
          label: "Asthma?",
          value: "No",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "If yes, please provide further information",
          text2: "",
          isVerticalStackType: true,
          colSpan: 1,
          heights: 66,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayRowCheckOptions",
          label: "Has your child had a seizure in the past year?",
          value: "No",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "If yes, please provide further information",
          text2: "",
          isVerticalStackType: true,
          colSpan: 1,
          heights: 66,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayRowCheckOptions",
          label:
            "Does your child require a special diet related to a medical condition?",
          value: "No",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "If yes, please provide further information",
          text2: "",
          isVerticalStackType: true,
          colSpan: 1,
          heights: 66,
        },
      ],
    },
    {
      layout: "break",
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayRowCheckOptions",
          label: "Food sensitivities?",
          value: "No",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "If yes, please provide further information",
          text2: "",
          isVerticalStackType: true,
          colSpan: 1,
          heights: 66,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 2,
      columnWidths: ["50%", "50%"],
      tableHeaders: [
        {
          text: 'List all prescription and "over the counter" medications your child receives',
          alignment: "left",
          fontSize: 11,
          isBold: false,
          margin: [0, 3.75, 0, 7],
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayText",
          text1: "Medication",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Times for Given",
          text2: "",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Reasons",
          text2: "",
          colSpan: 2,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [
        {
          text: "Emergency Health Information",
          alignment: "left",
        },
      ],
      marginTopBottom: 7.5,
      childElements: [
        {
          type: "DisplayText",
          text1: "Care Card No.",
          text2: "23442131",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Doctor/Clinic Name",
          text2: "testDoctor",
          colSpan: 1,
        },
        {
          type: "DisplayText",
          text1: "Doctor/Clinic Phone",
          text2: "189248981",
          colSpan: 1,
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 1,
      columnWidths: ["*"],
      tableHeaders: [
        {
          text: "Consents for Emergency Care",
          alignment: "left",
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayCheckOptions",
          label:
            "I authorize the staff at childcare center to call a medical practitioner or ambulance/transport child to emergency medical care, in the case of accident and illness of my child(ren), if the parent cannot be immediately reached.",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          value: "Yes",
          outSideBorder: [false, false, false, false],
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 2,
      columnWidths: ["40%", "60%"],
      tableHeaders: [
        {
          text: "",
          alignment: "left",
          fontSize: 11,
          isBold: false,
          margin: [0, 3.75, 0, 7],
        },
      ],
      marginTopBottom: 3.75,
      childElements: [
        {
          type: "DisplayRowCheckOptions",
          label: "Custody or other legal orders",
          value: "No",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
          ],
          colSpan: 2,
        },
        {
          type: "DisplayRowCheckOptions",
          label:
            "If yes, supply a copy of the order to the facility Manager / Licensee",
          value: "NA",
          options: [
            {
              label: "Yes",
              value: "Yes",
            },
            {
              label: "No",
              value: "No",
            },
            {
              label: "N/A",
              value: "NA",
            },
          ],
          colSpan: 2,
        },
        {
          type: "DisplayText",
          text1: "Date",
          text2: "2023-12-8",
          colSpan: 1,
          border: [true, true, true, true],
          margin: [7.5, 17, 0, 0],
          heights: 45,
          outSideMargin: [7.5, 7.5],
        },
        {
          type: "DisplaySignature",
          label: "Signature",
          value:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACWCAYAAABHAOQHAAAAAXNSR0IArs4c6QAACjdJREFUeF7tnXnIrVUVhx8phcohS00NsojI8GKJESoiammoFEQq+UdyG+jGFTVBAxGnijBKkUobVDT8I8SIkpTSciiioqSBshSxDE1RSS0HLLFYsg++Hr/hnO+855y93/VsuNzh2+/e6/esdX+8497bYJOABCSQjMA2yfQqVwISkAAan0UgAQmkI6DxpUu5giUgAY3PGpCABNIR0PjSpVzBEpCAxmcNSEAC6QhofOlSrmAJSEDjswYkIIF0BDS+dClXsAQkoPFZAxKQQDoCGl+6lCtYAhLQ+KwBCUggHQGNL13KFSwBCWh81oAEJJCOgMaXLuUKloAEND5rQAISSEdA40uXcgVLQAIanzUgAQmkI6DxpUu5giUgAY3PGpCABNIR0PjSpVzBEpCAxmcNSEAC6QhofOlSrmAJSEDjswYkIIF0BDS+dClXsAQkoPFZAxKQQDoCGl+6lCtYAhLQ+KwBCUggHQGNL13KFSwBCWh81oAEJJCOgMaXLuUKloAEND5rQAISSEdA40uXcgVLQAIanzUgAQmkI6DxpUu5giUgAY3PGpCABNIR0PjSpVzBEpCAxmcNSEAC6QhofOlSrmAJSEDjswYkIIF0BDS+dClXsAQkoPFZAxKQQDoCGl+6lCtYAhLQ+KwBCUggHQGNL13KFSwBCWh8w66BtwJ3Dlui6iQwPQGNb3pmtR2xM/B24CHgXcDewP7AbsC+wO3l72cC3wXuqk2A8Uhg0QQ0vkUTX3u+Q4GXAwePdfsbcDSwa/n36DdqD3f+fT01zwAXAOet19GfS2DIBDS+erIbZ2m/WUA4DwKHA39ewFxOIYEqCWh89aRlXsb3l3L521X6EeCqeqQbiQQWS0DjWyzv9WaLS9i4nN1nA5e6cTl8I7AdcFsxtl2AR4DLgOOAncq4twKHrReMP5fAUAlofEPN7It1hQHGvcBRuxo4MYd0VUrgpQQ0vhxVsRm4siP1UuCkHNJVKQGNL2sN/BV4Y0d8XErfkRWGuiXgGd/wa2D8oUncC3zT8GWrUAKrE9D4hl8d42d75/se3/CTrsK1CWh8w6+Q/41J3A/43fBlq1ACnvFlrYH3ADeNid8BeCIrEHVLIAh4xjfsOrgE2NqR+D3gA8OWrDoJrE9A41ufUcs9xi9z/WKj5Wwae28ENL7eUFY30EXAaWNRme/q0mRAyyDgf4RlUF/MnH8c+/RtC/DNxUztLBKom4DGV3d+NhpdfJXx1c7B1wKnAg9sdECPk8CQCGh8Q8rmC1quAY7vSIs/h/nZJCABn+oOsgb2AuLrjFH7GXDIIJUqSgIbJOAZ3wbBVXzYZ4CzS3yxHP2HgFsqjtfQJLBwAhrfwpHPdcJty32815ZZ/lD245jrpA4ugdYIaHytZWzteD8GXN7pchbw+WFJVI0EZieg8c3OsKYRfg28swT037Ka8+M1BWgsEqiBgMZXQxb6ieEo4IYy1LPAGcDF/QztKBIYFgGNbzj5jP02jihyHgXeAfx9OPJUIoH+CGh8/bFc5khvGdsoPF5ePnmZATm3BGomoPHVnJ3JY/sC8OlO91hm/t7JD7enBHIR0Pjaz/fLgPuA3YuUr40tRdW+QhVIoGcCGl/PQJcw3HuBH5Z540lufKXxyyXE4ZQSaIaAxtdMqlYNNM7wPll++gvgoPYlqUAC8yWg8c2X77xHj/zdD+wBPAe8H7h+3pM6vgRaJ6DxtZ3BfYHfA7HS8nVlRZb/tC3J6CUwfwIa3/wZz3OGeJIbT3Tj3l58mnbePCdzbAkMhYDG13Ym46FGPNyIF5bjoUasumyTgATWIaDxtV0isU3kq4CfALGVpE0CEpiAgMY3AaRKu8Qnab8tscWy8l+uNE7DkkB1BDS+6lIycUCj+3txwCbgTxMfaUcJJCeg8bVbAD8CjgR8d6/dHBr5kghofEsCP+O02wOxzl68xvI5n+bOSNPD0xHQ+NpMeeyj8W3gn8Cx7qnRZhKNenkENL7lsZ9l5u8AHwSeBmJ/jfjdJgEJTEhA45sQVEXdtgNi97SdgG90vtOtKERDkUDdBDS+uvOzUnTHAD8AnimfqMWnajYJSGAKAhrfFLAq6fp1YEtZlGCX8tVGJaEZhgTaIKDxtZGnUZSRr3hf723Ajzt7bLSlwmglsGQCGt+SEzDl9IeXz9PisFOAr0x5vN0lIAFA42urDM4HzgEeBPYu7/K1pcBoJVABAY2vgiRMEUKsvRdr8N3e2Th8isPtKgEJBAGNr506eHXnQUac9X12TqEfCJxWVnaOOeIlaZsEBkVA42snnbGs/PdLuIcCt/Uceoz5YeCjnXEPAH7V8zwOJ4GlE9D4lp6CiQP4InA6EGvwvaasujzxwWt0fH0Z91Mr9NkTeKCPSRxDAjUR0PhqysbasdxYXl+5GXh3T2FvBi4sRtodMh6iuIx9T5Adpj4CGl99OVktojvK+3tx5hdr8c3S4rJ2K3Dc2CDxjmCY3rWzDO6xEqidgMZXe4ZeiO8p4BXAx4ErZgh7f+BbwD5jY1xVDPXhGcb2UAk0QUDjayJNvBJ4soQae2vEHhvTtjjL2w+4aIWzvC8BYXw2CaQgoPG1kebYMPwfJdQ4U4vL3knbrsBJwBnwvIF2W1zSXgrcOulg9pPAEAhofG1k8Q3AvSXU15VlqSaN/BYgzva6LZarj4clPsCYlKL9BkVA42sjnW8G7i6vsMR2krGB+Fpt57Ld5CdW2Hbyp8C5nuW1kXijnA8BjW8+XPsedQfgX8Bj5dWT2GtjtRZndycAYXrdFmd4lwOxCfm/+w7Q8STQEgGNr41s7VgWJAjDik/Xnlsl7KOAq8ty9N0ucS/v+DakGqUE5k9A45s/4z5miDzdXy5x91plwHgnb/Rr1GV0L+/icrbYRyyOIYHmCWh87aRw9JDisHJ/Li5pwwSPAOKM8H1jUq4BYrVmn9i2k2MjXRABjW9BoHuY5kogPjGbpMVlbbzr58oqk9CyTzoCGl9bKY9d1cYfWnQV3FPu8Xlp21ZejXbBBDS+BQPvYbrRO3nxe2wxuQn4edmLI+7p3dfDHA4hgUET0PgGnV7FSUACKxHQ+KwLCUggHQGNL13KFSwBCWh81oAEJJCOgMaXLuUKloAEND5rQAISSEdA40uXcgVLQAIanzUgAQmkI6DxpUu5giUgAY3PGpCABNIR0PjSpVzBEpCAxmcNSEAC6QhofOlSrmAJSEDjswYkIIF0BDS+dClXsAQkoPFZAxKQQDoCGl+6lCtYAhLQ+KwBCUggHQGNL13KFSwBCWh81oAEJJCOgMaXLuUKloAEND5rQAISSEdA40uXcgVLQAIanzUgAQmkI6DxpUu5giUgAY3PGpCABNIR0PjSpVzBEpCAxmcNSEAC6QhofOlSrmAJSEDjswYkIIF0BDS+dClXsAQkoPFZAxKQQDoCGl+6lCtYAhLQ+KwBCUggHQGNL13KFSwBCWh81oAEJJCOgMaXLuUKloAEND5rQAISSEfg/2JM05ceRopeAAAAAElFTkSuQmCC",
          colSpan: 1,
          outSideMargin: [7.5, 7.5],
        },
      ],
    },
    {
      layout: "table",
      totalColumns: 3,
      columnWidths: ["40%", "40%", "20%"],
      tableHeaders: [],
      marginTopBottom: 3.75,
      fillColor: "#DCDCDC",
      childElements: [
        {
          type: "DisplayText",
          text1: " ",
          text2: "Office Use only",
          outSideMargin: [0, 11.25, 0, 0],
          border: [false, false, false, false],
          outSideBorder: [false, false, false, false],
          colSpan: 3,
        },
        {
          type: "DisplayText",
          text1: " ",
          text2: "Date Child Leaves the Facility",
          border: [false, false, false, false],
          outSideBorder: [false, false, false, false],
          colSpan: 1,
          heights: 30,
        },
        {
          type: "DisplayText",
          text1: " ",
          text2: "",
          border: [false, false, false, false],
          outSideBorder: [false, false, false, false],
          colSpan: 1,
          heights: 30,
          fillColor: "white",
        },
        {
          type: "DisplayText",
          text1: " ",
          text2: "",
          border: [false, false, false, false],
          outSideBorder: [false, false, false, false],
          colSpan: 1,
          heights: 30,
        },
        {
          type: "DisplayText",
          text1: " ",
          text2: "",
          border: [false, false, false, false],
          outSideBorder: [false, false, false, false],
          colSpan: 3,
        },
      ],
    },
  ],
  coverPageImageMarginTop: 0,
};
export default formJsonData;
