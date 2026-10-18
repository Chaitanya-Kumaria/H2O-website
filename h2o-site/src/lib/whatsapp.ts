// Every call to action is "Enquire on WhatsApp" with a prefilled message.
import type { Settings } from './types';

export function enquiryText(settings: Settings, about?: string) {
  const subject = about ? ` I would like to enquire about ${about}.` : ' I would like to enquire about a stay.';
  return `${settings.whatsappGreeting}${subject}\n\nDates: \nNumber of guests: `;
}

export function whatsappLink(settings: Settings, about?: string) {
  const number = settings.whatsappNumber.replace(/\D/g, '');
  // with no number set yet, wa.me lets the guest pick a chat; set the number in the admin
  return `https://wa.me/${number}?text=${encodeURIComponent(enquiryText(settings, about))}`;
}
