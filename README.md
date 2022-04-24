# Loan-Application-Form (using ReactJS)

·         Loan Amount and Requested Loan Amount

o    should use proper currency formatting

o    should only allow user to enter a loan amount between $2,000 and $20,000

·         Date fields mush have format MM/DD/YYYY

o    Date must automatically be formatted and validated on user input to use MM/DD/YYYY without a datepicker.

o    This field should accept numeric inputs only. Slashes are automatically added while the user is entering the date.

·         Email must follow standard email format.

·         State must be a valid US state code.

·         Validation on SSN, Phone Number, and Zip should be upon user input instead of form submission

o    SSN should be a 9-digit number and should follow the XXX-XX-XXXX format (e.g., 123-45-6789). The dashes are automatically added while the user is entering the digits. This field should accept numeric inputs only.

o    Zip code should only accept 5 digits. This field should accept numeric inputs only.

o    Phone number should have 10 digits and should follow (XXX) XXX – XXXX format (e.g., (123) 456 – 7890). The parentheses and dash are automatically added while the user is entering the digits. This field should accept numeric inputs only.

Here I have used MaterialUI for the user interface, formik to handle form and yup to handle validations.

I have created lots of components (like for every input field) which is not necessary we can create this whole form in a single component also.

I haven't used class based components anywhere.
