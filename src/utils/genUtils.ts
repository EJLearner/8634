function updateValidity(
  input: HTMLInputElement | HTMLTextAreaElement,
  label: string,
) {
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity(`${label} is required.`);
  } else if (validityState.patternMismatch) {
    input.setCustomValidity(`Please enter a valid ${label}`);
  } else {
    input.setCustomValidity('');
  }

  input.reportValidity();
}

export {updateValidity};
