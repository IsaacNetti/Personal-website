import { contactInfo } from '../data/placeholderData';

export default function ContactWindow() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-accent font-bold mb-2">Name</h3>
        <p className="text-text">{contactInfo.name}</p>
      </div>
      <div>
        <h3 className="text-accent font-bold mb-2">Phone</h3>
        <p className="text-text">{contactInfo.phone}</p>
      </div>
      <div>
        <h3 className="text-accent font-bold mb-2">Email</h3>
        <p className="text-text">{contactInfo.email}</p>
      </div>
      <div>
        <h3 className="text-accent font-bold mb-2">GitHub</h3>
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          {contactInfo.github}
        </a>
      </div>
      <div>
        <h3 className="text-accent font-bold mb-2">LinkedIn</h3>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          {contactInfo.linkedin}
        </a>
      </div>
    </div>
  );
}