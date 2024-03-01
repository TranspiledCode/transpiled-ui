const validAutocompleteValues = [
  'on',
  'off',
  'username',
  'current-password',
  'new-password',
  'email',
  'tel',
  'name',
  'organization-title',
  'street-address',
  'postal-code',
  'country',
  'cc-name',
  'cc-number',
  'cc-exp',
  'cc-exp-month',
  'cc-exp-year',
  'cc-csc',
];

//  validateAutocompleteValue function
function validateAutocompleteValue(props, propName, componentName) {
  const propValue = props[propName];

  // Only perform the check if propValue is not undefined (it's an optional prop)
  if (propValue !== undefined) {
    // Check if the propValue is a string and is one of the valid values
    if (
      typeof propValue !== 'string' ||
      !validAutocompleteValues.includes(propValue)
    ) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Expected one of ${validAutocompleteValues.join(
          ', '
        )}, but received ${propValue}.`
      );
    }
  }

  // Return null if validation is successful
  return null;
}

export default validateAutocompleteValue;
