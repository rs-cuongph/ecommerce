export const handlePhoneNumberContact = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};
export const handleEmailContact = (email: string) => {
  window.location.href = `mailto:${email}`;
};
